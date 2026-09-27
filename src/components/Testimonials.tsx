import { useInView } from "../hooks/useInView"

const QUOTES = [
  { quote: "Running 12 Big Bull Defenders across our delivery network. Lower operating cost compared to diesel, and the service team is responsive.", name: "Ramesh Gupta", role: "Fleet operator, logistics company", location: "Lucknow" },
  { quote: "The Glider is ideal for our last-mile passenger service. Passengers appreciate the quiet ride and our operators like the low maintenance.", name: "Anitha Krishnan", role: "Mobility service provider", location: "Chennai" },
  { quote: "We converted our entire cargo fleet to Big Bull Loaders. The range is consistent and the build quality handles our warehouse routes.", name: "Mohammad Asif", role: "Warehousing & distribution", location: "Hyderabad" },
]

export default function Testimonials() {
  const { ref, inView } = useInView(0.1)
  return (
    <section id="testimonials" className="section-secondary py-16 lg:py-24" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="section-label-accent mb-4 w-fit">Operator Stories</div>
        <h2 className="display-2xl mb-12">
          Real operators.<br />Real results.
        </h2>
        <div style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          {QUOTES.map((q) => (
            <div key={q.name} className="grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr] gap-4 sm:gap-8 py-8 border-b items-start" style={{ borderColor: "var(--color-border-subtle)" }}>
              <blockquote>
                <p className="display-md text-white leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
              </blockquote>
              <div className="sm:text-right">
                <p className="text-sm font-medium text-white">{q.name}</p>
                <p className="text-sm text-neutral-400 mt-1">{q.role}</p>
                <p className="label-xs mt-2">{q.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}