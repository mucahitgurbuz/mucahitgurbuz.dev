interface SectionHeadProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  as?: "h1" | "h2";
}

export function SectionHead({ title, children, as: Heading = "h2" }: SectionHeadProps) {
  return (
    <div className="grid grid-cols-1 items-end gap-3.5 pt-[clamp(80px,11vw,150px)] pb-[clamp(40px,5vw,64px)] min-[861px]:grid-cols-2 min-[861px]:gap-8">
      <Heading className="display text-[clamp(40px,5.2vw,64px)] leading-[1.02]">
        {title}
      </Heading>
      {children && (
        <div className="max-w-[40ch] text-pencil min-[861px]:justify-self-end">
          {children}
        </div>
      )}
    </div>
  );
}
