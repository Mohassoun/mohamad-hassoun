type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle font-heading">{subtitle}</p>
    </div>
  );
}
