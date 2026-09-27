import { useInView } from '../hooks/useInView'

export default function BrandStory() {
  const { ref, inView } = useInView()

  return (
    <section className="bg-[#000000] py-[120px] border-t border-[#262626]">
      <div
        ref={ref}
        className={`max-w-[1600px] mx-auto px-6 sm:px-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-10">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: '11px', letterSpacing: '2px', color: '#0dccaa', textTransform: 'uppercase' }}>Our Story</span>
        </div>

        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
          {/* Large image */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] bg-[#0d0d0d] overflow-hidden">
            <img src="/urban-rider.png" alt="Prakriti EV rider in urban India" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000]/90 to-transparent p-8">
              <p style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.2 }}>
                "DESIGNED TO DISAPPEAR<br />INTO YOUR ROUTINE."
              </p>
            </div>
          </div>

          <div className="lg:pl-4">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 'clamp(28px,4vw,40px)', fontWeight: 400, letterSpacing: '3px', textTransform: 'uppercase', color: '#ffffff', lineHeight: 1.1, marginBottom: '24px' }}>
              THE PRAKRITI<br />REVOLUTION
            </h2>
            <div className="space-y-4 mb-8">
              <p style={{ fontFamily: "var(--font-body)", fontSize: '17px', lineHeight: 1.65, color: '#666666' }}>
                We started with a simple belief: that electric mobility should be built for the people who need it most — everyday Indian commuters navigating real roads, real traffic, real lives.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: '17px', lineHeight: 1.65, color: '#666666' }}>
                Prakriti EV was founded to make that belief a reality. Not by copying global templates, but by engineering from the ground up — for Indian weather, Indian roads and Indian budgets.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: '17px', lineHeight: 1.65, color: '#666666' }}>
                The result is a range of electric scooters that are smarter, tougher and more affordable than anything built elsewhere.
              </p>
            </div>
            <div className="space-y-3 mb-8">
              {[
                'Cleaner mobility for every Indian city',
                'Smarter transportation built locally',
                'Sustainable future through Indian engineering',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-px h-4 bg-[#0dccaa] mt-1 flex-shrink-0" />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: '17px', color: '#cccccc' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="#" style={{ fontFamily: "var(--font-mono)", fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999999', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              className="hover:text-white transition-colors group">
              DISCOVER OUR STORY
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
