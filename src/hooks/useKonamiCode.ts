"use client";

import { useState, useEffect, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function useKonamiCode(callback?: () => void) {
  const [input, setInput] = useState<string[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isUnlocked) return;

      const key = e.code;
      const newInput = [...input, key].slice(-KONAMI_CODE.length);
      setInput(newInput);

      if (newInput.join(",") === KONAMI_CODE.join(",")) {
        setIsUnlocked(true);
        callback?.();
      }
    },
    [input, isUnlocked, callback]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const reset = useCallback(() => {
    setInput([]);
    setIsUnlocked(false);
  }, []);

  return { isUnlocked, reset };
}
