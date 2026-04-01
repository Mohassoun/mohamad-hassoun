import { contactItems } from "@/components/portfolio-data";
import { ProjectCardContact } from "@/components/project-card-contact";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="Get in Touch" subtitle="Let's build something together :)" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactItems.map((item) => (
            <ProjectCardContact key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
