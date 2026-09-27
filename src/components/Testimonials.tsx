import { useInView } from "../hooks/useInView"

const QUOTES = [
  { quote: "Running 12 Big Bull Defenders across our delivery network. Lower operating cost compared to diesel, and the service team is responsive.", name: "Ramesh Gupta", role: "Fleet operator, logistics company", location: "Lucknow" },
  { quote: "The Glider is ideal for our last-mile passenger service. Passengers appreciate the quiet ride and our operators like the low maintenance.", name: "Anitha Krishnan", role: "Mobility service provider", location: "Chennai" },
  { quote: "We converted our entire cargo fleet to Big Bull Loaders. The range is consistent and the build quality handles our warehouse routes.", name: "Mohammad Asif", role: "Warehousing & distribution", location: "Hyderabad" },
]

export default function Testimonials() {
  const { ref, inView } = useInView(0.1)
  return (
    <section id="testimonials" className="bg-[#F2F1EE] py-24 lg:py-32 border-t border-[#E5E7E8]">
      <div ref={ref} className={`container-bb transition-all duration-700 motion-safe:transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="section-label mb-6 w-fit">Operator Stories</div>
        <h2 className="display-xl text-[clamp(32px,4vw,52px)] text-[#111111] mb-16">
          Real operators.<br />Real results.
        </h2>
        <div className="border-t border-[#D5D7D8]">
          {QUOTES.map((q) => (
            <div key={q.name} className="grid sm:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr] gap-6 sm:gap-12 py-10 border-b border-[#D5D7D8] items-start">
              <blockquote>
                <p className="display-xl text-[18px] sm:text-[20px] text-[#111111] leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
              </blockquote>
              <div className="sm:text-right">
                <p className="text-[14px] font-medium text-[#111111]">{q.name}</p>
                <p className="text-[13px] text-[#5F6368] mt-1">{q.role}</p>
                <p className="label-mono mt-2">{q.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
