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
    <section id="specifications" className="section-secondary" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mb-10">
          <div className="section-label mb-4">Specifications</div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="display-2xl">
              Model<br />Specifications.
            </h2>
            <p className="body-sm text-neutral-400" style={{ maxWidth: "240px" }}>
              Select a model to view its detailed capabilities.
            </p>
          </div>
        </div>

        <div className="flex gap-0 mb-10" style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => selectModel(i)}
              className={`py-3 px-4 text-xs font-medium transition-all duration-200 cursor-pointer relative ${
                modelIdx === i ? "text-white" : "text-neutral-500 hover:text-white"
              }`}
              style={{ background: "transparent", border: "none" }}
            >
              {p.name}
              {modelIdx === i && (
                <span
                  className="absolute bottom-0 left-0 right-0"
                  style={{ height: "2px", background: "var(--color-accent-primary)" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative">
            <div
              className="relative overflow-hidden card"
              style={{
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px",
              }}
            >
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div>
            <span className="label-xs-accent block mb-2">{product.category}</span>
            <h3 className="display-xl mb-3">
              {product.name}
            </h3>
            <p className="body-base text-neutral-400 mb-6">
              {product.description}
            </p>

            <div style={{ borderTop: "1px solid var(--color-border-subtle)", marginBottom: "24px" }}>
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
                style={{ flex: 1, justifyContent: "center", fontSize: "15px" }}
              >
                Book Test Ride
              </a>
              <a
                href={`/model/${product.id}`}
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: "center", fontSize: "15px" }}
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