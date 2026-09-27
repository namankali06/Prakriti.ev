import { useState } from "react"
import { useInView } from "../hooks/useInView"

const FAQS = [
  { q: "What is the range of Prakriti e-rickshaws?", a: "Range varies by model: Defender — 140 km, Loader — 120 km, Glider — 100 km under IDC certification. Real-world range will vary based on load, road conditions, and driving pattern." },
  { q: "How long does it take to charge?", a: "Standard charging takes 3–5 hours depending on the model. All vehicles support standard Indian domestic power supply (5A, 220V)." },
  { q: "What warranty is provided?", a: "Prakriti offers a comprehensive vehicle warranty and a separate battery warranty. Please contact your nearest authorised dealer for current warranty terms." },
  { q: "Where can I find a Prakriti dealer?", a: "Use the enquiry form on this page to connect with the nearest authorised dealer in your city. Our network is expanding across India." },
  { q: "Are Prakriti vehicles eligible for FAME II subsidy?", a: "Eligibility for FAME II or state-level subsidies depends on the specific model and your state of registration. Our dealer team can advise you on applicable subsidies." },
  { q: "Can I convert my existing fleet to Prakriti?", a: "Yes. We offer fleet conversion consulting and have experience working with logistics, delivery, and passenger mobility operators. Use the Fleet/Business enquiry type in the contact form." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView(0.1)

  return (
    <section id="faq" className="bg-white py-24 lg:py-32 border-t border-[#E5E7E8]">
      <div ref={ref} className={`container-bb transition-all duration-700 motion-safe:transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="section-label mb-6 w-fit">FAQ</div>
            <h2 className="display-xl text-[clamp(30px,3.5vw,48px)] text-[#111111]">Frequently asked.</h2>
          </div>
          <div className="border-t border-[#E5E7E8]">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-[#E5E7E8]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left cursor-pointer group"
                  aria-expanded={open === i}
                >
                  <span className="text-[15px] font-medium text-[#111111] leading-snug group-hover:text-[#1B8F3A] transition-colors">
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
                    <p className="body-copy text-[15px] text-[#5F6368] leading-relaxed max-w-[640px]">{faq.a}</p>
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
