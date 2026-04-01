import { githubUrl, projects } from "@/components/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading title="Portfolio" subtitle="Here are few samples of my previous work :)" />
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
            className="border border-[var(--accent)] px-6 py-3 font-medium text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
