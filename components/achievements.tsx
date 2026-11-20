import { Reveal } from '@/components/reveal'
import { achievements } from '@/lib/portfolio-data'

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Competitions &amp; Achievements
          </p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Learning beyond the classroom.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            A few experiences that have helped me learn, collaborate, and apply
            what I study in practical settings.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 70}>
              <article className="grid gap-3 py-6 sm:grid-cols-[0.8fr_1.2fr] sm:gap-10 sm:py-8">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {achievement.subtitle}
                  </p>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {achievement.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
