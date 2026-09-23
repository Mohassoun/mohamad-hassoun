"use client";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { servicesContent, servicesHeadings } from "@/components/portfolio-data";
import { useLanguage } from "@/context/language-context";

export function ServicesSection() {
  const { lang } = useLanguage();
  const services = servicesContent[lang];
  const heading = servicesHeadings[lang];
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title={heading.title} subtitle={heading.subtitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
