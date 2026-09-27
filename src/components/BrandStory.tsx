import { useInView } from '../hooks/useInView'

export default function BrandStory() {
  const { ref, inView } = useInView()

  return (
    <section id="brand-story" className="section-dark py-16 lg:py-24" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="mb-8">
          <span className="section-label-accent">Our Story</span>
        </div>

        <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] card overflow-hidden">
            <img src="/urban-rider.png" alt="Prakriti EV rider in urban India" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)" }}>
              <p className="display-lg text-white" style={{ letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 1.2 }}>
                "DESIGNED TO DISAPPEAR<br />INTO YOUR ROUTINE."
              </p>
            </div>
          </div>

          <div className="lg:pl-2">
            <h2 className="display-2xl text-white mb-6" style={{ letterSpacing: "0.02em", textTransform: "uppercase" }}>
              THE PRAKRITI<br />REVOLUTION
            </h2>
            <div className="space-y-4 mb-6">
              <p className="body-base text-neutral-400">
                We started with a simple belief: that electric mobility should be built for the people who need it most — everyday Indian commuters navigating real roads, real traffic, real lives.
              </p>
              <p className="body-base text-neutral-400">
                Prakriti EV was founded to make that belief a reality. Not by copying global templates, but by engineering from the ground up — for Indian weather, Indian roads and Indian budgets.
              </p>
              <p className="body-base text-neutral-400">
                The result is a range of electric scooters that are smarter, tougher and more affordable than anything built elsewhere.
              </p>
            </div>
            <div className="space-y-3 mb-6">
              {[
                'Cleaner mobility for every Indian city',
                'Smarter transportation built locally',
                'Sustainable future through Indian engineering',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-[2px] h-4 bg-[var(--color-accent-primary)] mt-1 flex-shrink-0" />
                  <span className="body-base text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
            <a href="#" className="label-xs-accent flex items-center gap-2 hover:text-white transition-colors group">
              DISCOVER OUR STORY
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}