"use client";

import { githubUrl, projectsContent, projectsHeadings, uiStrings } from "@/components/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const { lang } = useLanguage();
  const projects = projectsContent[lang];
  const heading = projectsHeadings[lang];
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title={heading.title} subtitle={heading.subtitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--accent)] px-6 py-3 font-medium text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            {uiStrings[lang].seeMore}
          </a>
        </div>
      </div>
    </section>
  );
}
