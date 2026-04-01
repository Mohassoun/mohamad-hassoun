import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/components/portfolio-data";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          title="What I can do?"
          subtitle="I may not be perfect but surely I'm of some use :)"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
