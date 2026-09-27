import { useInView } from "../hooks/useInView"

const ECONOMICS = [
  { label: "Fuel cost saved", value: "₹3,000+ / month", note: "vs petrol equivalent" },
  { label: "Per-km cost", value: "₹0.8–1.2", note: "electricity at standard tariff" },
  { label: "Service interval", value: "6,000 km", note: "vs 2,500 km petrol" },
  { label: "Payload (cargo)", value: "Commercial rated", note: "Loader model" },
]

const FLEET_BENEFITS = [
  {
    number: "01",
    title: "Operating economics",
    body: "Electric running costs are 60–70% lower than petrol equivalents. On a 120 km daily commercial route, the savings compound rapidly into measurable profit per vehicle.",
  },
  {
    number: "02",
    title: "Finance & ownership",
    body: "Structured finance options for fleet operators. Low down-payment, transparent EMI, and subsidy eligibility under FAME-II and state EV schemes across India.",
  },
  {
    number: "03",
    title: "Service network",
    body: "Nationwide authorised service centres. Preventive maintenance scheduling, genuine parts supply, and on-site fleet service programmes for operators with 5+ vehicles.",
  },
  {
    number: "04",
    title: "Fleet management",
    body: "Remote vehicle monitoring via the Prakriti Fleet Portal. Track location, battery state, service due dates, and operational hours across your entire fleet from one dashboard.",
  },
]

export default function BusinessSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="business"
      className="bg-white"
      style={{ borderTop: "1px solid #E3E7E3" }}
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
            <div className="label-mono-green mb-6">Fleet & Business</div>
            <h2
              className="display-xl text-[#111111]"
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              Electric that<br />
              earns.
            </h2>
          </div>
          <div className="lg:pt-4">
            <p
              className="body-copy text-[#555B56]"
              style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "420px" }}
            >
              Built for fleet operators, last-mile logistics businesses, and passenger mobility
              entrepreneurs. Prakriti vehicles are designed to run all day, every day, and
              return a profit.
            </p>
          </div>
        </div>

        {/* Economics strip */}
        <div
          className="mb-16 lg:mb-20"
          style={{
            background: "#F5F7F4",
            borderRadius: "6px",
            padding: "clamp(24px, 3vw, 40px)",
            border: "1px solid #E3E7E3",
          }}
        >
          <p className="label-mono mb-8">Operating Economics</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {ECONOMICS.map((item, i) => (
              <div
                key={item.label}
                style={{
                  borderRight: i < ECONOMICS.length - 1 ? "1px solid #E3E7E3" : "none",
                  paddingRight: "24px",
                  paddingLeft: i > 0 ? "24px" : "0",
                }}
              >
                <div
                  className="display-xl text-[#111111] mb-1"
                  style={{ fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.1 }}
                >
                  {item.value}
                </div>
                <div className="label-mono mb-1" style={{ fontSize: "10px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "12px", color: "#93939F" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet benefit rows */}
        <div style={{ borderTop: "1px solid #E3E7E3" }}>
          {FLEET_BENEFITS.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 sm:gap-8 py-8 items-baseline"
              style={{
                gridTemplateColumns: "64px 1fr 2fr",
                borderBottom: "1px solid #E3E7E3",
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

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#dealership" className="btn btn-primary" style={{ fontSize: "14px" }}>
            Fleet Enquiry
          </a>
          <a href="#dealership" className="btn btn-outline" style={{ fontSize: "14px" }}>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}
