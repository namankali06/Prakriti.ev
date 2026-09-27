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
    <section
      id="why"
      style={{ background: "#F5F7F4", borderTop: "1px solid #E3E7E3" }}
    >
      <div
        ref={ref}
        className={`container-bb py-24 lg:py-32 transition-all duration-700 motion-safe:transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* Header */}
        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16 lg:mb-24"
        >
          <div>
            <div className="label-mono-green mb-6">Built for India</div>
            <h2
              className="display-xl text-[#111111]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              Designed around<br />
              real-world work.
            </h2>
          </div>
          <div className="lg:pt-4">
            <p
              className="body-copy text-[#555B56]"
              style={{ fontSize: "17px", lineHeight: 1.65, maxWidth: "440px" }}
            >
              We build electric rickshaws for people who depend on their vehicle every single
              day. No compromises on reliability. No compromises on service. Only performance
              that earns its place.
            </p>
          </div>
        </div>

        {/* Full-width road image */}
        <div
          className="relative overflow-hidden mb-16 lg:mb-20"
          style={{ borderRadius: "6px" }}
        >
          <div style={{ aspectRatio: "21/9", minHeight: "240px" }}>
            <img
              src="/ev-manufacturing-india.png"
              alt="Prakriti EV on Indian road"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              background: "linear-gradient(to top, rgba(17,20,17,0.65) 0%, transparent 100%)",
              padding: "32px 28px 20px",
            }}
          >
            <p className="label-mono" style={{ color: "rgba(255,255,255,0.7)", fontSize: "10px" }}>
              Prakriti EV · Indian roads
            </p>
          </div>
        </div>

        {/* Feature rows */}
        <div style={{ borderTop: "1px solid #D5D7D8" }}>
          {INDIA_FEATURES.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 sm:gap-8 py-8 items-baseline"
              style={{
                gridTemplateColumns: "64px 1fr 2fr",
                borderBottom: "1px solid #D5D7D8",
              }}
            >
              <span className="label-mono-green" style={{ fontSize: "11px" }}>
                {item.number}
              </span>
              <h3
                className="display-xl text-[#111111]"
                style={{ fontSize: "18px", lineHeight: 1.2 }}
              >
                {item.title}
              </h3>
              <p
                className="body-copy text-[#555B56]"
                style={{ fontSize: "15px", lineHeight: 1.65 }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
