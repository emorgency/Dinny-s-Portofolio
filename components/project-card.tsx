
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/40 sm:p-8">
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-bold tracking-tight text-muted-foreground/50 tabular-nums">
          {project.number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {project.category}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Technology stack and button stay at the bottom */}
      <div className="mt-auto">
        <ul className="flex min-h-[64px] flex-wrap content-end items-end gap-2 pt-6">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Link here
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            <span className="sr-only">
              — opens {project.title} in a new tab
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}
