"use client";

import { contactContent, getContactItems } from "@/components/portfolio-data";
import { ProjectCardContact } from "@/components/project-card-contact";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/context/language-context";

export function ContactSection() {
  const { lang } = useLanguage();
  const heading = contactContent[lang];
  const contactItems = getContactItems(lang);
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title={heading.sectionTitle} subtitle={heading.sectionSubtitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactItems.map((item) => (
            <ProjectCardContact key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
