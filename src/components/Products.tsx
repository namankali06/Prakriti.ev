import { useState } from "react"
import { PRODUCTS } from "../data/products"
import { useInView } from "../hooks/useInView"
import { Link } from "react-router-dom"

export default function Products() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="models" className="bg-white" style={{ borderTop: "1px solid #E3E7E3" }}>
      {/* Section header */}
      <div ref={ref} className={`container-bb pt-24 pb-16 lg:pt-32 lg:pb-20 transition-all duration-700 motion-safe:transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="label-mono-green mb-5">Our Electric Range</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2
            className="display-xl text-[#111111]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
          >
            Choose your<br />
            <span style={{ color: "#1B8F3A" }}>Prakriti.</span>
          </h2>
          <p className="body-copy text-[15px] text-[#555B56]" style={{ maxWidth: "240px" }}>
            Three models. One electric purpose.
          </p>
        </div>
      </div>

      {/* Editorial model sections — alternating layout */}
      {PRODUCTS.map((product, idx) => {
        const isEven = idx % 2 === 0

        return (
          <div
            key={product.id}
            className={`${idx < PRODUCTS.length - 1 ? "border-b border-[#E3E7E3]" : ""}`}
            style={{ background: isEven ? "#FFFFFF" : "#F5F7F4" }}
          >
            <div className="container-bb py-20 lg:py-28">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Image */}
                <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      background: isEven ? "#F5F7F4" : "#FFFFFF",
                      borderRadius: "8px",
                      aspectRatio: "4/3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "40px",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    {/* Range badge */}
                    <div
                      className="absolute top-5 left-5 label-mono-green"
                      style={{
                        background: "#EAF5EC",
                        border: "1px solid rgba(27,143,58,0.2)",
                        borderRadius: "3px",
                        padding: "4px 10px",
                        fontSize: "10px",
                      }}
                    >
                      {product.specs.find((s) => s.label === "Range")?.value}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="label-mono-green block mb-2">{product.category}</span>
                  <h3
                    className="display-xl text-[#111111] mb-4"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.5rem)", lineHeight: 1.05 }}
                  >
                    {product.name}
                  </h3>
                  <p className="body-copy text-[#555B56] mb-8" style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "380px" }}>
                    {product.description}
                  </p>

                  {/* Spec rows */}
                  <div style={{ borderTop: "1px solid #E3E7E3" }}>
                    {product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Link
                      to={`/model/${product.id}`}
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: "center", fontSize: "14px" }}
                    >
                      View Details
                    </Link>
                    <a
                      href="/#dealership"
                      className="btn btn-outline"
                      style={{ flex: 1, justifyContent: "center", fontSize: "14px" }}
                    >
                      Find Dealer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
