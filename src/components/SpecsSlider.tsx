import { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const specs = [
  { num: '01', value: '140 KM', label: 'MAX RANGE', desc: 'Go farther without constantly thinking about your next charge. The Defender 2.0 is built for the full day.' },
  { num: '02', value: '4 HOURS', label: 'FULL CHARGE', desc: 'Efficient charging designed around everyday routines — plug in overnight or during your lunch break.' },
  { num: '03', value: '12-INCH', label: 'ALLOY WHEELS', desc: 'Better stability and confidence across urban roads, potholes and varied Indian road conditions.' },
  { num: '04', value: 'EABS', label: 'SMART BRAKING', desc: 'Advanced electronic anti-lock braking that responds in milliseconds for maximum stopping confidence.' },
  { num: '05', value: 'IP67', label: 'WATER RATING', desc: "Engineered for India's monsoons. Sealed components that perform reliably across all weather conditions." },
]

export default function SpecsSlider() {
  const [active, setActive] = useState(0)
  const touchStart = useRef(0)
  const { ref, inView } = useInView()

  const prev = () => setActive((a) => (a === 0 ? specs.length - 1 : a - 1))
  const next = () => setActive((a) => (a === specs.length - 1 ? 0 : a + 1))

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.changedTouches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 48) diff > 0 ? next() : prev()
  }

  const s = specs[active]

  return (
    <section id="specs" className="section-dark py-16 lg:py-24" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mb-10">
          <span className="section-label-accent">Specifications</span>
        </div>
        <h2 className="display-2xl mb-12" style={{ letterSpacing: "0.02em", textTransform: "uppercase" }}>
          ENGINEERED FOR<br />THE EVERYDAY.
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-7xl font-light text-neutral-900 mb-2 select-none" style={{ fontFamily: "var(--font-mono)", lineHeight: 1 }}>{s.num}</div>
            <div key={s.value} className="mb-2">
              <div className="display-2xl text-white mb-2" style={{ letterSpacing: "0.02em", textTransform: "uppercase" }}>{s.value}</div>
            </div>
            <div className="label-xs-accent mb-4">{s.label}</div>
            <p className="body-base text-neutral-400 mb-8" style={{ maxWidth: "340px" }}>{s.desc}</p>

            <div className="flex items-center gap-3 mt-6">
              <button onClick={prev} className="btn-icon" aria-label="Previous">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} className="btn-icon" aria-label="Next">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="space-y-0">
            {specs.map((spec, idx) => (
              <button key={spec.num} onClick={() => setActive(idx)}
                className={`w-full flex items-center gap-4 py-4 border-b transition-all duration-200 ${idx === active ? 'border-[var(--color-accent-primary)]' : 'border-[var(--color-border-subtle)] hover:border-[var(--color-border-secondary)]'}`}
              >
                <span className={`label-xs ${idx === active ? '' : 'text-neutral-500'} flex-shrink-0 w-12`}>{spec.num}</span>
                <div className="flex-1 flex items-center justify-between">
                  <span className={`label-xs ${idx === active ? '' : 'text-neutral-500'}`}>{spec.label}</span>
                  <span className={`label-xs ${idx === active ? '' : 'text-neutral-500'}`}>{spec.value}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}