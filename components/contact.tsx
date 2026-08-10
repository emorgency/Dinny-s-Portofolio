import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { contactLinks } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s connect.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              Interested in my work or want to discuss an opportunity? Feel free
              to reach out.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="divide-y divide-border border-y border-border">
              {contactLinks.map((link) => {
                const isMail = link.href.startsWith('mailto:')
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isMail ? undefined : '_blank'}
                      rel={isMail ? undefined : 'noopener noreferrer'}
                      className="group flex items-center justify-between py-5 text-lg font-medium text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
