import { ContactItem } from "@/components/portfolio-data";

type ProjectCardContactProps = {
  item: ContactItem;
};

export function ProjectCardContact({ item }: ProjectCardContactProps) {
  const Icon = item.icon;

  return (
    <article className="rounded-[10px] border p-8 text-center" style={{ background: "var(--panel)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}>
      <div className="mx-auto flex h-16 w-16 items-center justify-center text-2xl text-[var(--accent)]">
        <Icon />
      </div>
      <h3 className="mt-6 font-heading text-2xl font-semibold">{item.title}</h3>
      <p className="body-copy mt-4 text-sm leading-7">{item.detail}</p>
    </article>
  );
}
