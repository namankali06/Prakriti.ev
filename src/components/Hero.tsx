import { useState, useEffect } from "react"
import { PRODUCTS } from "../data/products"
import RibbonGlow from "@/components/originkit/ui/ribbon-glow"

interface HeroProps { onTestRide: () => void }

export default function Hero({ onTestRide }: HeroProps) {
  const [entered, setEntered] = useState(false)
  const flagship = PRODUCTS[0]

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Prakriti EV — Hero"
    >
      {/* RibbonGlow background - green theme (lighter for text readability) */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
        <RibbonGlow
          background="#EAF5EC"
          color1="#1B8F3A"
          color2="#136B2C"
          speed={35}
          size={110}
          angle={-170}
          hover={85}
          reach={300}
          style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
        />
      </div>

      {/* Vehicle image — right anchored, dominant */}
      <div
        className={`absolute right-0 bottom-0 transition-all duration-1000 ease-out motion-safe:transition-all ${
          entered ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-8 translate-y-4"
        }`}
        style={{
          width: "clamp(380px, 58vw, 880px)",
          bottom: 0,
          right: "-2%",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <img
          src={flagship.image}
          alt=""
          className="w-full h-auto object-contain object-bottom"
          loading="eager"
          style={{
            display: "block",
            maxHeight: "92vh",
            filter: `${flagship.defaultFilter} brightness(0.75) contrast(1.3) saturate(1.2) drop-shadow(0 0 80px rgba(27,143,58,0.4))`,
            mixBlendMode: "multiply",
            opacity: 0.95,
            maskImage: "radial-gradient(ellipse 70% 85% at 50% 70%, black 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 85% at 50% 70%, black 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Content — left column */}
      <div className="relative z-10 container-bb flex flex-col justify-center" style={{ minHeight: "100svh", paddingTop: "80px", paddingBottom: "80px" }}>
        <div
          className={`transition-all duration-700 delay-100 motion-safe:transition-all ${
            entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ maxWidth: "clamp(280px, 45vw, 580px)" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-6 h-px" style={{ background: "#1B8F3A" }} />
            <span className="label-mono" style={{ color: "#1B8F3A", fontSize: "11px" }}>
              Electric Mobility · India
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display-xl text-[#111111] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 7.5vw, 7.5rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            PRAKRITI.<br />
            <span style={{ color: "#1B8F3A" }}>BUILT FOR</span><br />
            THE EVERYDAY.
          </h1>

          {/* Supporting line */}
          <p
            className="body-copy mb-12"
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "#555B56",
              lineHeight: 1.65,
              maxWidth: "400px",
            }}
          >
            Electric rickshaws engineered for Indian roads.<br />
            Reliable. Zero-emission. Built to earn.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-4 flex-wrap">
            <a href="#models" className="btn btn-green" style={{ fontSize: "14px" }}>
              Explore Vehicles
            </a>
            <button
              onClick={onTestRide}
              className="btn btn-outline"
              style={{ fontSize: "14px" }}
            >
              Book a Test Ride
            </button>
          </div>

          {/* Spec strip */}
          <div
            className="mt-14 pt-8 grid grid-cols-3"
            style={{ borderTop: "1px solid #E3E7E3", maxWidth: "380px" }}
          >
            {[
              { value: "140 KM", label: "IDC Certified Range" },
              { value: "4 HR", label: "Full Charge" },
              { value: "100%", label: "Made in India" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="display-xl text-[#111111]"
                  style={{ fontSize: "22px", lineHeight: 1.1, marginBottom: "4px" }}
                >
                  {stat.value}
                </div>
                <div className="label-mono" style={{ fontSize: "10px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 motion-safe:transition-all ${
          entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-hidden="true"
        style={{ zIndex: 10 }}
      >
        <span className="label-mono" style={{ fontSize: "9px", color: "#93939F" }}>SCROLL</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ animation: "bb-bounce 1.8s ease-in-out infinite" }}
        >
          <path d="M3 6l5 5 5-5" stroke="#93939F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes bb-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="bb-bounce"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
