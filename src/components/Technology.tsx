import { useState } from "react"
import { useInView } from "../hooks/useInView"

interface TechFeature {
  id: string
  category: string
  title: string
  tagline: string
  description: string
  image: string
  specs: { label: string; value: string }[]
}

const techFeatures: TechFeature[] = [
  {
    id: "battery",
    category: "Power & Battery",
    title: "AIS-156 Certified Battery Pack",
    tagline: "3.5 kWh Advanced LFP Chemistry",
    description:
      "Thermally isolated battery pack engineered for Indian summer temperatures. A 15-layer Battery Management System monitors cell health, prevents overcharge, and maximises cycle life across the vehicle lifetime.",
    image: "/ev-tech-battery.png",
    specs: [
      { label: "Real Range", value: "140 km / charge" },
      { label: "Fast Charge", value: "0–80% in 60 min" },
      { label: "Cycle Life", value: "2,000+ cycles" },
      { label: "Warranty", value: "8 years / 80,000 km" },
    ],
  },
  {
    id: "motor",
    category: "Drivetrain",
    title: "4.5 kW Peak Electric Powertrain",
    tagline: "Instant 26 Nm Wheel Torque",
    description:
      "Custom-tuned PMSM hub motor delivering instantaneous torque for 18-degree hill gradients with dual load. Regenerative EABS braking recovers energy and reduces brake wear in stop-start city conditions.",
    image: "/modern-ev-scooter.png",
    specs: [
      { label: "Peak Power", value: "4.5 kW (6.1 HP)" },
      { label: "0–40 km/h", value: "3.3 seconds" },
      { label: "Top Speed", value: "85 km/h" },
      { label: "Hill Climb", value: "18-degree slope" },
    ],
  },
  {
    id: "chassis",
    category: "Chassis & Safety",
    title: "High-tensile Reinforced Frame",
    tagline: "Sealed for Monsoon. Tuned for Potholes.",
    description:
      "Chassis engineered for Indian conditions — high-clearance suspension tuned for Tier 2 and Tier 3 roads, sealed electrical systems for monsoon operation, and progressive damping that handles commercial loads without fatigue.",
    image: "/ev-smart-dashboard.png",
    specs: [
      { label: "Ground Clearance", value: "185 mm" },
      { label: "Braking", value: "EABS + Dual Disc" },
      { label: "Suspension", value: "Independent front" },
      { label: "IP Rating", value: "IP67 electrical" },
    ],
  },
]

export default function Technology() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, inView } = useInView(0.12)
  const feature = techFeatures[activeTab]

  return (
    <section id="technology" className="section-dark" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="section-label-accent mb-4">Engineering</div>
            <h2 className="display-2xl">
              Engineered for<br />
              <span className="text-gradient-accent">performance.</span>
            </h2>
          </div>
          <p className="body-sm text-neutral-400" style={{ maxWidth: "360px" }}>
            Modular lithium architecture, intelligent telemetry, and aerospace-grade chassis durability.
          </p>
        </div>

        <div className="flex gap-0 mb-10" style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
          {techFeatures.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`py-3 px-4 text-xs font-medium transition-all duration-200 cursor-pointer relative ${
                activeTab === idx ? "text-white" : "text-neutral-500 hover:text-white"
              }`}
              style={{ background: "transparent", border: "none" }}
            >
              {item.category}
              {activeTab === idx && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: "2px", background: "var(--color-accent-primary)" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div
            className="lg:col-span-5 flex flex-col justify-between card"
            style={{ padding: "clamp(24px, 3vw, 40px)" }}
          >
            <div>
              <span className="label-xs-accent block mb-2">{feature.category}</span>
              <h3 className="display-lg mb-2">{feature.title}</h3>
              <p className="label-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                {feature.tagline}
              </p>
              <p className="body-base text-neutral-400 mb-6" style={{ lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
            <div style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
              {feature.specs.map((spec) => (
                <div key={spec.label} className="spec-row spec-row-dark">
                  <span className="spec-label spec-label-dark">{spec.label}</span>
                  <span className="spec-value spec-value-dark">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-7 relative overflow-hidden card"
            style={{ minHeight: "360px" }}
          >
            <img
              key={feature.image}
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
              style={{ transition: "opacity 0.4s ease" }}
              loading="lazy"
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 100%)",
                padding: "32px 24px 24px",
              }}
            >
              <p className="label-xs-accent mb-1">{feature.category}</p>
              <p className="display-md text-white" style={{ fontSize: "14px" }}>
                {feature.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}