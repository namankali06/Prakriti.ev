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
    <section id="business" className="section-light" style={{ borderTop: "1px solid var(--color-border-primary)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 lg:mb-16">
          <div>
            <div className="section-label-accent mb-4">Fleet & Business</div>
            <h2 className="display-2xl">
              Electric that<br />
              <span className="text-gradient-accent">earns.</span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="body-base text-neutral-400" style={{ maxWidth: "420px", lineHeight: 1.7 }}>
              Built for fleet operators, last-mile logistics businesses, and passenger mobility entrepreneurs. Prakriti vehicles are designed to run all day, every day, and return a profit.
            </p>
          </div>
        </div>

        <div className="card mb-12 lg:mb-16" style={{ padding: "clamp(24px, 3vw, 40px)" }}>
          <p className="label-xs mb-6">Operating Economics</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {ECONOMICS.map((item, i) => (
              <div
                key={item.label}
                style={{
                  borderRight: i < ECONOMICS.length - 1 ? "1px solid var(--color-border-primary)" : "none",
                  paddingRight: "24px",
                  paddingLeft: i > 0 ? "24px" : "0",
                }}
              >
                <div className="display-lg mb-1">
                  {item.value}
                </div>
                <div className="label-xs mb-1">{item.label}</div>
                <div className="text-xs text-neutral-500">{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border-primary)" }}>
          {FLEET_BENEFITS.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 sm:gap-6 py-6 items-baseline"
              style={{
                gridTemplateColumns: "56px 1fr 2fr",
                borderBottom: "1px solid var(--color-border-primary)",
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

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href="#dealership" className="btn btn-primary" style={{ fontSize: "15px" }}>
            Fleet Enquiry
          </a>
          <a href="#dealership" className="btn btn-secondary" style={{ fontSize: "15px" }}>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  )
}