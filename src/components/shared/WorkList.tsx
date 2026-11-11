interface WorkItem {
  period: string;
  title: string;
  place: string;
  description?: string;
  highlights?: string[];
}

export function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ol className="border-b border-rule">
      {items.map((item) => {
        const current = item.period.endsWith("Present");
        return (
          <li
            key={`${item.title}-${item.period}`}
            className="grid grid-cols-1 gap-x-10 gap-y-2 border-t border-rule py-7 min-[900px]:grid-cols-[11rem_minmax(0,1fr)_minmax(0,1.35fr)] min-[900px]:py-8"
          >
            <p className="flex items-center gap-2.5 self-start text-[15px] font-medium text-ink-soft tabular-nums min-[900px]:pt-1">
              {current && <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber" />}
              {item.period.replace(" - ", " – ")}
            </p>
            <div>
              <h3 className="item-title">{item.title}</h3>
              <p className="mt-1 text-ink-soft">{item.place}</p>
            </div>
            <div className="mt-1 min-[900px]:mt-0">
              {item.description && <p>{item.description}</p>}
              {item.highlights && (
                <ul className="mt-4 space-y-1.5 text-[15px] text-ink-soft">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.72em] h-px w-3 shrink-0 bg-ink-soft" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
