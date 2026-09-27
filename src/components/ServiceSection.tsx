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
    <section
      id="service"
      style={{ background: "#F5F7F4", borderTop: "1px solid #E3E7E3" }}
    >
      <div
        ref={ref}
        className={`container-bb py-24 lg:py-32 transition-all duration-700 motion-safe:transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16 lg:mb-20">
          <div>
            <div className="label-mono-green mb-6">Service & Support</div>
            <h2
              className="display-xl text-[#111111]"
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              Supported<br />
              for life.
            </h2>
          </div>
          <div className="lg:pt-4">
            <p
              className="body-copy text-[#555B56]"
              style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "400px" }}
            >
              A vehicle that earns must keep running. Prakriti's service infrastructure is built
              to keep your vehicle operational — not just in the first year, but across its
              entire working life.
            </p>
          </div>
        </div>

        {/* Service image */}
        <div
          className="relative overflow-hidden mb-16 lg:mb-20"
          style={{ borderRadius: "6px" }}
        >
          <div style={{ aspectRatio: "16/7", minHeight: "200px" }}>
            <img
              src="/ev-manufacturing-india.png"
              alt="Prakriti authorised service centre"
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
              Authorised Service · Prakriti Network
            </p>
          </div>
        </div>

        {/* Service pillars — editorial rows */}
        <div style={{ borderTop: "1px solid #D5D7D8" }}>
          {SERVICE_PILLARS.map((item) => (
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

        {/* Warranty summary strip */}
        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-0"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E3E7E3",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
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
                borderRight: i < 3 ? "1px solid #E3E7E3" : "none",
                borderBottom: i < 2 ? "1px solid #E3E7E3" : "none",
              }}
            >
              <div
                className="display-xl text-[#111111] mb-1"
                style={{ fontSize: "22px", lineHeight: 1.1 }}
              >
                {w.value}
              </div>
              <div className="label-mono" style={{ fontSize: "10px" }}>
                {w.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
