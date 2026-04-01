import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { about, resumeUrl } from "@/components/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading title="About Me" subtitle="Get to know me :)" />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto max-w-md overflow-hidden">
            <Image
              src="/images/photos/colored.png"
              alt="Mohamad portrait"
              width={700}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[16px] accent-text">Who am I?</p>
              <h3 className="mt-4 font-heading text-[18px] font-bold sm:text-[20px]">
                {about.headline}
              </h3>
            </div>
            <p className="body-copy text-[15px] leading-8">{about.detail}</p>

            <div className="border-y py-6" style={{ borderColor: "var(--divider)" }}>
              <p className="mb-4 text-[15px] accent-text">Technologies I have worked with:</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {about.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 text-[14px] font-bold text-[var(--text)]"
                  >
                    <FiArrowRight className="text-[var(--accent)]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div key={fact.label} className="text-[14px]">
                  <span className="font-bold text-[var(--text)]">{fact.label}: </span>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--accent)] px-6 py-3 text-[15px] transition hover:bg-[var(--accent)] hover:text-white"
              >
                Resume
              </a>
              <div className="h-px w-16" style={{ background: "var(--divider)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
