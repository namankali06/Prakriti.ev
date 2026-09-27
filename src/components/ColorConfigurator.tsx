import { useState } from "react"
import { PRODUCTS } from "../data/products"
import { useInView } from "../hooks/useInView"

export default function ColorConfigurator() {
  const [modelIdx, setModelIdx] = useState(0)
  const { ref, inView } = useInView(0.1)

  const product = PRODUCTS[modelIdx]

  const selectModel = (i: number) => {
    setModelIdx(i)
  }

  return (
    <section
      id="specifications"
      className="bg-[#F5F7F4]"
      style={{ borderTop: "1px solid #E3E7E3" }}
    >
      <div
        ref={ref}
        className={`container-bb py-24 lg:py-32 transition-all duration-700 motion-safe:transition-all ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <div className="label-mono-green mb-5">Specifications</div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="display-xl text-[#111111]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
            >
              Model<br />Specifications.
            </h2>
            <p className="body-copy text-[#93939F]" style={{ fontSize: "15px", maxWidth: "240px" }}>
              Select a model to view its detailed capabilities.
            </p>
          </div>
        </div>

        {/* Model switcher — simple text tabs */}
        <div
          className="flex gap-0 mb-12"
          style={{ borderBottom: "1px solid #E3E7E3" }}
        >
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => selectModel(i)}
              className={`py-3 px-6 text-[13px] font-medium transition-all duration-200 cursor-pointer relative ${
                modelIdx === i ? "text-[#111111]" : "text-[#93939F] hover:text-[#555B56]"
              }`}
              style={{ background: "transparent", border: "none" }}
            >
              {p.name}
              {modelIdx === i && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: "2px", background: "#1B8F3A" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Vehicle render */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{
                background: "#FFFFFF",
                borderRadius: "6px",
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px",
                border: "1px solid #E3E7E3",
              }}
            >
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Details panel */}
          <div>
            <span className="label-mono-green block mb-2">{product.category}</span>
            <h3
              className="display-xl text-[#111111] mb-3"
              style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)", lineHeight: 1.05 }}
            >
              {product.name}
            </h3>
            <p className="body-copy text-[#555B56] mb-8" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              {product.description}
            </p>

            {/* Specs */}
            <div style={{ borderTop: "1px solid #E3E7E3", marginBottom: "32px" }}>
              {product.specs.map((spec) => (
                <div key={spec.label} className="spec-row">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#dealership"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: "center", fontSize: "14px" }}
              >
                Book Test Ride
              </a>
              <a
                href={`/model/${product.id}`}
                className="btn btn-outline"
                style={{ flex: 1, justifyContent: "center", fontSize: "14px" }}
              >
                View Full Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
