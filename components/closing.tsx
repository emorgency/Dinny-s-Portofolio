import { Reveal } from '@/components/reveal'

export function ThankYou() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-50">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Thank you for taking the time to visit.
          </h2>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
        <p>© 2026 Dinny Alya Puteri</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  )
}
