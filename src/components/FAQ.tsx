import { useState } from "react"
import { useInView } from "../hooks/useInView"

const FAQS = [
  { q: "What is the range of Prakriti e-rickshaws?", a: "Range varies by model: Defender ~ 140 km, Loader ~ 120 km, Glider ~ 100 km under IDC certification. Real-world range will vary based on load, road conditions, and driving pattern." },
  { q: "How long does it take to charge?", a: "Standard charging takes 3-5 hours depending on the model. All vehicles support standard Indian domestic power supply (5A, 220V)." },
  { q: "What warranty is provided?", a: "Prakriti offers a comprehensive vehicle warranty and a separate battery warranty. Please contact your nearest authorised dealer for current warranty terms." },
  { q: "Where can I find a Prakriti dealer?", a: "Use the enquiry form on this page to connect with the nearest authorised dealer in your city. Our network is expanding across India." },
  { q: "Are Prakriti vehicles eligible for FAME II subsidy?", a: "Eligibility for FAME II or state-level subsidies depends on the specific model and your state of registration. Our dealer team can advise you on applicable subsidies." },
  { q: "Can I convert my existing fleet to Prakriti?", a: "Yes. We offer fleet conversion consulting and have experience working with logistics, delivery, and passenger mobility operators. Use the Fleet/Business enquiry type in the contact form." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView(0.1)

  return (
    <section id="faq" className="section-light py-16 lg:py-24" style={{ borderTop: "1px solid var(--color-border-primary)" }}>
      <div ref={ref} className={`container transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="section-label-accent mb-4 w-fit">FAQ</div>
            <h2 className="display-2xl">Frequently asked.</h2>
          </div>
          <div style={{ borderTop: "1px solid var(--color-border-primary)" }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b" style={{ borderColor: "var(--color-border-primary)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-medium leading-snug group-hover:text-[var(--color-accent-primary)] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="pb-5">
                    <p className="body-base text-neutral-400 leading-relaxed max-w-[640px]">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}