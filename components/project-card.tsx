"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ProjectItem } from "@/components/portfolio-data";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const safeHref = project.link === "hi" ? undefined : project.link;

  const content = (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative min-h-[24rem] overflow-hidden rounded-[10px] border p-5"
      style={{ background: "var(--panel)", borderColor: "var(--border)", boxShadow: "var(--shadow)" }}
    >
      <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}>
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div
        className={`relative z-10 flex h-full flex-col p-6 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: hovered ? "var(--panel-strong)" : "transparent" }}
      >
        {hovered ? (
          <>
            <div className="flex items-center gap-4">
              <Image
                src={project.icon}
                alt={project.title}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
            </div>
            <p className="body-copy mt-5 text-sm leading-7">{project.description}</p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold accent-text">
                View project
                <FiArrowUpRight />
              </span>
            </div>
          </>
        ) : null}
      </div>
    </article>
  );

  if (!safeHref) {
    return content;
  }

  return (
    <a href={safeHref} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}
