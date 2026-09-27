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
    <section id="manufacturing" className="section-dark" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          <div>
            <div className="section-label-accent mb-4">Manufacturing · India</div>
            <h2 className="display-2xl">
              THE FACTORY.<br />
              <span className="text-gradient-accent">Built here.</span><br />
              Ready for India.
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="body-base text-neutral-400" style={{ lineHeight: 1.7 }}>
              Every Prakriti vehicle is assembled in India, by Indian engineers, using a supply chain that supports local manufacturing. Tested against real Indian conditions before any vehicle leaves the factory.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden card mb-12 lg:mb-16" style={{ aspectRatio: "16/7" }}>
          <img
            src="/ev-manufacturing-india.png"
            alt="Prakriti EV assembly — Indian manufacturing facility"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 100%)",
              padding: "32px 28px 20px",
            }}
          >
            <p className="label-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Prakriti Manufacturing · Assembly Facility · India
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          {PROCESS.map((item) => (
            <div
              key={item.step}
              className="grid gap-4 sm:gap-6 py-6 items-baseline"
              style={{
                gridTemplateColumns: "64px 1fr 2fr",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <span className="label-xs-accent">{item.step}</span>
              <h3 className="display-md">{item.title}</h3>
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