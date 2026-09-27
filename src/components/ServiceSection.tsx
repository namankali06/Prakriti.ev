import { useInView } from "../hooks/useInView"

const SERVICE_PILLARS = [
  {
    number: "01",
    title: "Nationwide network",
    body: "Authorised service centres across India. Every centre is equipped with genuine Prakriti parts, trained technicians, and diagnostic tools specific to our vehicles.",
  },
  {
    number: "02",
    title: "Genuine parts",
    body: "Original components stocked at every authorised centre. No compatibility risk, no performance compromise. Parts availability guaranteed for a minimum of 10 years.",
  },
  {
    number: "03",
    title: "Warranty",
    body: "Vehicle: 3 years / 60,000 km. Battery: 8 years / 80,000 km. Motor: 5 years / 80,000 km. Comprehensive coverage, transparent terms, no hidden conditions.",
  },
  {
    number: "04",
    title: "Roadside support",
    body: "24-hour roadside assistance for commercial customers. Call the Prakriti support line and a technician will be on-site within 4 hours in covered service zones.",
  },
]

export default function ServiceSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="service" className="section-secondary" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          <div>
            <div className="section-label-accent mb-4">Service & Support</div>
            <h2 className="display-2xl">
              Supported<br />
              <span className="text-gradient-accent">for life.</span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="body-base text-neutral-400" style={{ maxWidth: "400px", lineHeight: 1.7 }}>
              A vehicle that earns must keep running. Prakriti's service infrastructure is built to keep your vehicle operational — not just in the first year, but across its entire working life.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden card mb-12 lg:mb-16" style={{ aspectRatio: "16/7" }}>
          <img
            src="/ev-service-center.png"
            alt="Prakriti authorised service centre"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              background: "linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 100%)",
              padding: "32px 28px 20px",
            }}
          >
            <p className="label-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Authorised Service · Prakriti Network
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          {SERVICE_PILLARS.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 sm:gap-6 py-6 items-baseline"
              style={{
                gridTemplateColumns: "56px 1fr 2fr",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <span className="label-xs-accent">{item.number}</span>
              <h3 className="display-md">{item.title}</h3>
              <p className="body-sm text-neutral-400" style={{ lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-0 card overflow-hidden">
          {[
            { label: "Vehicle warranty", value: "3 Years" },
            { label: "Battery warranty", value: "8 Years" },
            { label: "Motor warranty", value: "5 Years" },
            { label: "Service interval", value: "6,000 km" },
          ].map((w, i) => (
            <div
              key={w.label}
              style={{
                padding: "24px",
                borderRight: i < 3 ? "1px solid var(--color-border-secondary)" : "none",
                borderBottom: i < 2 ? "1px solid var(--color-border-secondary)" : "none",
              }}
            >
              <div className="display-lg mb-1">
                {w.value}
              </div>
              <div className="label-xs">{w.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}