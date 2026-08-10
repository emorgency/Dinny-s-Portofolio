import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Skills &amp; Tools
          </p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I work with.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-y-10 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 60}
              className="border-t border-border pt-5"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
