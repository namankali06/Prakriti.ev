import { useInView } from "../hooks/useInView"

const INDIA_FEATURES = [
  {
    number: "01",
    title: "Ground clearance",
    body: "185 mm of clearance handles the realities of Indian roads — speed bumps, broken tarmac, unpaved village roads. Tested across 40,000 km of real Indian conditions before production.",
  },
  {
    number: "02",
    title: "Load capacity",
    body: "Commercial-grade payload ratings tested to 120% of stated load across varying road surfaces. The chassis does not fatigue. The earnings do not stop.",
  },
  {
    number: "03",
    title: "Suspension tuning",
    body: "Progressive damping engineered for Indian urban stop-start traffic and highway stretches. Absorbs potholes. Keeps the battery protected. Keeps the driver comfortable.",
  },
  {
    number: "04",
    title: "Serviceability",
    body: "Designed for nationwide service — modular battery and motor architecture means field-level technicians can diagnose and replace components without specialist tooling.",
  },
]

export default function WhyPrakriti() {
  const { ref, inView } = useInView()

  return (
    <section id="why" className="section-secondary" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          <div>
            <div className="section-label-accent mb-4">Built for India</div>
            <h2 className="display-2xl">
              Designed around<br />real-world work.
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="body-base text-neutral-400" style={{ maxWidth: "440px", lineHeight: 1.7 }}>
              We build electric rickshaws for people who depend on their vehicle every single day. No compromises on reliability. No compromises on service. Only performance that earns its place.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden card mb-12 lg:mb-16">
          <div style={{ aspectRatio: "21/9", minHeight: "240px" }}>
            <img
              src="/ev-manufacturing-india.png"
              alt="Prakriti EV · Indian roads"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 100%)",
              padding: "32px 28px 20px",
            }}
          >
            <p className="label-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Prakriti EV · Indian roads
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          {INDIA_FEATURES.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 sm:gap-6 py-6 items-baseline"
              style={{
                gridTemplateColumns: "56px 1fr 2fr",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <span className="label-xs-accent" style={{ fontSize: "10px" }}>
                {item.number}
              </span>
              <h3 className="display-md">
                {item.title}
              </h3>
              <p className="body-sm text-neutral-400" style={{ lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}