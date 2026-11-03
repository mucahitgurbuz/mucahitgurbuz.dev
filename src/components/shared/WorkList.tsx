interface WorkItem {
  period: string;
  title: string;
  place: string;
  description?: string;
  highlights?: string[];
}

export function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <div className="border-b border-contour">
      {items.map((item) => (
        <div
          key={`${item.title}-${item.period}`}
          className="grid grid-cols-1 gap-2 border-t border-contour py-6 min-[861px]:grid-cols-[170px_1fr_1.3fr] min-[861px]:gap-8 min-[861px]:py-[30px]"
        >
          <p className="pt-[3px] text-[15px] text-pencil tabular-nums">{item.period.replace(" - ", " – ")}</p>
          <div>
            <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
            <p className="mt-1 text-[15px] text-pencil">{item.place}</p>
          </div>
          <div className="text-base text-[#2e3633]">
            {item.description && <p>{item.description}</p>}
            {item.highlights && (
              <ul className="mt-3 space-y-1 text-[15px] text-pencil">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
