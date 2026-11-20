import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-16 md:py-10"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        {/* Text */}
        <Reveal className="order-2 md:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Technology • Data • Software
          </p>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Dinny Alya Puteri
          </h1>

          <p className="mt-5 text-xl font-medium text-foreground sm:text-2xl">
            Informatics Engineering Student
          </p>

          <p className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">
            Semester 5 · Jakarta, Indonesia
          </p>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Interested in building practical technology solutions through data,
            machine learning, and software development.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              About Me
            </a>
          </div>
        </Reveal>

        {/* Photo */}
        <Reveal delay={120} className="order-1 md:order-2">
          <div className="mx-auto w-full max-w-sm md:max-w-none">
            <div className="overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src="/profile.png"
                alt="Portrait of Dinny Alya Puteri"
                width={640}
                height={800}
                className="aspect-4/5 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
