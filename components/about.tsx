import { Reveal } from '@/components/reveal'

const infoItems = [
  { label: 'Education', value: 'Informatics Engineering Student' },
  { label: 'Current Level', value: 'Semester 5' },
  { label: 'Location', value: 'Jakarta, Indonesia' },
  {
    label: 'Interests',
    value: 'Data Science · Machine Learning · Software Development',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            About Me
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Building with curiosity, learning through practice.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a Informatics Engineering bachelor student at Universitas Pamulang,
                currently in my fifth semester. I&apos;m passionate about
                developing my skills across data science, machine learning, and
                software development. Much of my focus is on understanding how
                data and code come together to solve real problems.
              </p>
              <p>
                Through hands-on academic and competition projects, I have
                explored building web applications, working with machine-learning
                workflows, and designing user-focused digital experiences. I enjoy
                turning ideas into practical projects while strengthening my
                technical fundamentals through collaboration and experimentation.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {infoItems.map((item) => (
                <div key={item.label} className="border-t border-border pt-4">
                  <dt className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
