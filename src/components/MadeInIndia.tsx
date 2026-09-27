import { useInView } from "../hooks/useInView"

const PROCESS = [
  {
    step: "01",
    title: "Sourcing",
    body: "Components sourced from certified Indian suppliers. Every part meets Prakriti quality specifications before entering the assembly line. 100% Made in India — not as a slogan, but as a commitment.",
  },
  {
    step: "02",
    title: "Assembly",
    body: "Precision assembly by trained technicians in our dedicated manufacturing facility. Inline quality checkpoints at every stage. No shortcuts. No outsourced final assembly.",
  },
  {
    step: "03",
    title: "Quality testing",
    body: "Rigorous pre-delivery testing — electrical systems, braking, load rating, monsoon simulation, and 200 km road testing on a controlled test track before any vehicle ships.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "Vehicles dispatched to authorised dealers across India, ready for handover. Full documentation, warranty registration, and first-service scheduling included at no additional cost.",
  },
]

export default function MadeInIndia() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="manufacturing"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className={`container-bb py-24 lg:py-32 transition-all duration-700 motion-safe:transition-all ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16 lg:mb-20">
          <div>
            <div
              className="label-mono mb-6"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em" }}
            >
              Manufacturing · India
            </div>
            <h2
              className="display-xl text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
            >
              THE FACTORY.<br />
              <span style={{ color: "#1B8F3A" }}>Built here.</span><br />
              Ready for India.
            </h2>
          </div>
          <div className="lg:pt-4">
            <p
              className="body-copy"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.65 }}
            >
              Every Prakriti vehicle is assembled in India, by Indian engineers, using a supply
              chain that supports local manufacturing. Tested against real Indian conditions
              before any vehicle leaves the factory.
            </p>
          </div>
        </div>

        {/* Factory image */}
        <div
          className="relative overflow-hidden mb-16 lg:mb-20"
          style={{ borderRadius: "4px", aspectRatio: "16/7" }}
        >
          <img
            src="/ev-manufacturing-india.png"
            alt="Prakriti EV assembly — Indian manufacturing facility"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              background: "linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 100%)",
              padding: "32px 28px 20px",
            }}
          >
            <p className="label-mono" style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px" }}>
              Prakriti Manufacturing · Assembly Facility · India
            </p>
          </div>
        </div>

        {/* Process rows */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {PROCESS.map((item) => (
            <div
              key={item.step}
              className="grid gap-4 sm:gap-8 py-8 items-baseline"
              style={{
                gridTemplateColumns: "72px 1fr 2fr",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span
                className="label-mono"
                style={{ color: "#1B8F3A", fontSize: "11px", letterSpacing: "0.08em" }}
              >
                {item.step}
              </span>
              <h3 className="display-xl text-white" style={{ fontSize: "18px", lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p
                className="body-copy"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.65 }}
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
