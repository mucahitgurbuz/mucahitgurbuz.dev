"use client";

import { useEffect, useState } from "react";

const W = 1600;
const H = 900;
const STEP = 7;
const INTERVAL = 0.028;
const VIEW = "630 60 880 860";

type Point = [number, number];

const BERLIN: Point = [1010, 330];
const ANKARA: Point = [1390, 735];

const PLACES = [
  { at: BERLIN, name: "Berlin", coord: "52.52° N  13.40° E", dx: 26 },
  { at: ANKARA, name: "Ankara", coord: "39.93° N  32.86° E", dx: -26 },
];

function hash(x: number, y: number) {
  let h = x * 374761393 + y * 668265263 + 1013904223;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function noise(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const u = (x - xi) ** 2 * (3 - 2 * (x - xi));
  const v = (y - yi) ** 2 * (3 - 2 * (y - yi));
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number) {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let octave = 0; octave < 4; octave++) {
    sum += amp * noise(x * freq, y * freq);
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum;
}

function bump(x: number, y: number, [cx, cy]: Point, r: number) {
  return Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * r * r));
}

function height(x: number, y: number) {
  return (
    0.6 * fbm(x * 0.0026 + 11, y * 0.0026 + 4) +
    0.75 * bump(x, y, BERLIN, 190) +
    0.26 * bump(x, y, ANKARA, 120)
  );
}

interface Terrain {
  levels: { d: string; index: boolean }[];
  labels: { at: Point; value: number }[];
}

// Marching squares over a height field: each cell yields up to two
// segments per contour level, keyed by which corners sit above it.
function buildTerrain(): Terrain {
  const cols = Math.ceil(W / STEP) + 1;
  const rows = Math.ceil(H / STEP) + 1;
  const grid = new Float32Array(cols * rows);
  let min = Infinity;
  let max = -Infinity;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const v = height(i * STEP, j * STEP);
      grid[j * cols + i] = v;
      min = Math.min(min, v);
      max = Math.max(max, v);
    }
  }

  const levels: Terrain["levels"] = [];
  const labels: Terrain["labels"] = [];
  let n = 0;
  for (let level = Math.ceil(min / INTERVAL) * INTERVAL; level < max; level += INTERVAL, n++) {
    const segments: [Point, Point][] = [];
    for (let j = 0; j < rows - 1; j++) {
      for (let i = 0; i < cols - 1; i++) {
        const tl = grid[j * cols + i];
        const tr = grid[j * cols + i + 1];
        const br = grid[(j + 1) * cols + i + 1];
        const bl = grid[(j + 1) * cols + i];
        const key =
          (tl > level ? 8 : 0) | (tr > level ? 4 : 0) | (br > level ? 2 : 0) | (bl > level ? 1 : 0);
        if (key === 0 || key === 15) continue;
        const x = i * STEP;
        const y = j * STEP;
        const top = (): Point => [x + (STEP * (level - tl)) / (tr - tl), y];
        const right = (): Point => [x + STEP, y + (STEP * (level - tr)) / (br - tr)];
        const bottom = (): Point => [x + (STEP * (level - bl)) / (br - bl), y + STEP];
        const left = (): Point => [x, y + (STEP * (level - tl)) / (bl - tl)];
        const pairs: Record<number, [() => Point, () => Point][]> = {
          1: [[left, bottom]],
          2: [[bottom, right]],
          3: [[left, right]],
          4: [[top, right]],
          5: [[left, top], [bottom, right]],
          6: [[top, bottom]],
          7: [[left, top]],
          8: [[left, top]],
          9: [[top, bottom]],
          10: [[top, right], [left, bottom]],
          11: [[top, right]],
          12: [[left, right]],
          13: [[bottom, right]],
          14: [[left, bottom]],
        };
        for (const [p, q] of pairs[key]) segments.push([p(), q()]);
      }
    }

    const index = n % 5 === 0;
    levels.push({
      index,
      d: segments
        .map(([a, b]) => `M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}`)
        .join(""),
    });

    if (index && segments.length) {
      const target: Point = [BERLIN[0] - 330 + n * 6, BERLIN[1] + 260 - n * 9];
      let best: Point | null = null;
      let bestDistance = Infinity;
      for (const [a, b] of segments) {
        const mid: Point = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        const distance = (mid[0] - target[0]) ** 2 + (mid[1] - target[1]) ** 2;
        if (distance < bestDistance) {
          bestDistance = distance;
          best = mid;
        }
      }
      if (best && bestDistance < 160 ** 2) labels.push({ at: best, value: 40 + n * 20 });
    }
  }
  return { levels, labels };
}

export function TopoMap({ className }: { className?: string }) {
  const [terrain, setTerrain] = useState<Terrain | null>(null);

  useEffect(() => {
    setTerrain(buildTerrain());
  }, []);

  const route = `M${ANKARA[0]} ${ANKARA[1]}Q${(BERLIN[0] + ANKARA[0]) / 2 + 150} ${(BERLIN[1] + ANKARA[1]) / 2 + 40} ${BERLIN[0]} ${BERLIN[1]}`;

  return (
    <svg
      className={`topo ${className ?? ""}`}
      viewBox={VIEW}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {terrain && (
        <>
          <g>
            {terrain.levels.map((level, i) => (
              <path key={i} d={level.d} className={level.index ? "lv ix" : "lv"} />
            ))}
            {terrain.labels.map(({ at, value }) => (
              <text key={value} x={at[0]} y={at[1] + 6} className="elev" textAnchor="middle">
                {value}
              </text>
            ))}
          </g>
          <g>
            <path className="route" d={route} />
            {PLACES.map(({ at, name, coord, dx }) => {
              const anchor = dx > 0 ? "start" : "end";
              return (
                <g key={name}>
                  <circle cx={at[0]} cy={at[1]} r={12} className="pin" />
                  <text x={at[0] + dx} y={at[1] - 2} className="place" textAnchor={anchor}>
                    {name}
                  </text>
                  <text x={at[0] + dx} y={at[1] + 24} className="coord" textAnchor={anchor}>
                    {coord}
                  </text>
                </g>
              );
            })}
          </g>
        </>
      )}
    </svg>
  );
}
