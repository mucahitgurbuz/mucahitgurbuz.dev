interface SectionHeadProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  as?: "h1" | "h2";
}

export function SectionHead({ title, children, as: Heading = "h2" }: SectionHeadProps) {
  return (
    <div className="mb-[clamp(28px,4vw,48px)]">
      <Heading className={Heading === "h1" ? "statement" : "title"}>{title}</Heading>
      {children && <p className="lede mt-3">{children}</p>}
    </div>
  );
}
