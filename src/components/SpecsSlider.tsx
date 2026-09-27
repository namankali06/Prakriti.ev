import { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const specs = [
  {
    num: '01',
    value: '140 KM',
    label: 'MAX RANGE',
    desc: 'Go farther without constantly thinking about your next charge. The Defender 2.0 is built for the full day.',
  },
  {
    num: '02',
    value: '4 HOURS',
    label: 'FULL CHARGE',
    desc: 'Efficient charging designed around everyday routines — plug in overnight or during your lunch break.',
  },
  {
    num: '03',
    value: '12-INCH',
    label: 'ALLOY WHEELS',
    desc: 'Better stability and confidence across urban roads, potholes and varied Indian road conditions.',
  },
  {
    num: '04',
    value: 'EABS',
    label: 'SMART BRAKING',
    desc: 'Advanced electronic anti-lock braking that responds in milliseconds for maximum stopping confidence.',
  },
  {
    num: '05',
    value: 'IP67',
    label: 'WATER RATING',
    desc: "Engineered for India's monsoons. Sealed components that perform reliably across all weather conditions.",
  },
]

export default function SpecsSlider() {
  const [active, setActive] = useState(0)
  const touchStart = useRef(0)
  const { ref, inView } = useInView()

  const prev = () => setActive((a) => (a === 0 ? specs.length - 1 : a - 1))
  const next = () => setActive((a) => (a === specs.length - 1 ? 0 : a + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.changedTouches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 48) diff > 0 ? next() : prev()
  }

  const s = specs[active]

  return (
    <section className="bg-[#000000] py-[120px] overflow-hidden border-t border-[#262626]">
      <div
        ref={ref}
        className={`max-w-[1600px] mx-auto px-6 sm:px-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-12 sm:mb-16">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: '11px', letterSpacing: '2px', color: '#0dccaa', textTransform: 'uppercase' }}>Specifications</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(32px,4.5vw,48px)', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.1, marginBottom: '64px' }}>
          ENGINEERED FOR<br />THE EVERYDAY.
        </h2>

        {/* Main spec display */}
        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: '80px', fontWeight: 400, color: '#1f1f1f', lineHeight: 1, marginBottom: '8px', userSelect: 'none' }}>{s.num}</div>
            <div key={s.value} className="mb-3">
              <div style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(48px,7vw,80px)', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1 }}>{s.value}</div>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: '11px', letterSpacing: '2.5px', color: '#666666', textTransform: 'uppercase', marginBottom: '24px' }}>{s.label}</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: '17px', lineHeight: 1.6, color: '#666666', maxWidth: '340px' }}>{s.desc}</p>

            <div className="flex items-center gap-3 mt-10">
              <button onClick={prev} className="btn-icon btn-icon-muted" aria-label="Previous">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} className="btn-icon btn-icon-muted" aria-label="Next">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Right: progress indicators + scooter */}
          <div className="space-y-0">
            {specs.map((spec, idx) => (
              <button key={spec.num} onClick={() => setActive(idx)}
                className={`w-full flex items-center gap-4 py-5 border-b text-left transition-all duration-200 ${
                  idx === active ? 'border-[#0dccaa]' : 'border-[#262626] hover:border-[#3a3a3a]'
                }`}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: idx === active ? '#0dccaa' : '#333333' }}>{spec.num}</span>
                <div className="flex-1 flex items-center justify-between">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: idx === active ? '#ffffff' : '#555555' }}>{spec.label}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: '14px', letterSpacing: '1px', color: idx === active ? '#0dccaa' : '#333333' }}>{spec.value}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
