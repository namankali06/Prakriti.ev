import { PRODUCTS } from "../data/products"
import { useInView } from "../hooks/useInView"
import { Link } from "react-router-dom"

export default function Products() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="models" className="section-tertiary" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div ref={ref} className={`container pt-20 pb-16 lg:pt-28 lg:pb-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="section-label mb-6">Our Electric Range</div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="display-2xl">
            Choose your<br />
            <span className="text-gradient-accent">Prakriti.</span>
          </h2>
          <p className="body-sm text-neutral-400" style={{ maxWidth: "240px" }}>
            Nine models. One electric purpose.
          </p>
        </div>
      </div>

      {PRODUCTS.map((product, idx) => {
        const isEven = idx % 2 === 0

        return (
          <div
            key={product.id}
            className={`${idx < PRODUCTS.length - 1 ? "border-b" : ""}`}
            style={{ borderColor: "var(--color-border-subtle)" }}
          >
            <div className="container py-16 lg:py-24">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div
                    className="relative overflow-hidden card"
                    style={{
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
                      className="w-full h-full object-contain transition-transform duration-700 ease-out"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div
                      className="absolute top-4 left-4 badge badge-accent px-3 py-1"
                    >
                      {product.specs.find((s) => s.label === "Range")?.value}
                    </div>
                  </div>
                </div>

                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="label-xs-accent block mb-2">{product.category}</span>
                  <h3 className="display-xl mb-4">
                    {product.name}
                  </h3>
                  <p className="body-base text-neutral-400 mb-8" style={{ maxWidth: "380px" }}>
                    {product.description}
                  </p>

                  <div style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
                    {product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Link
                      to={`/model/${product.id}`}
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: "center", fontSize: "15px" }}
                    >
                      View Details
                    </Link>
                    <a
                      href="/#dealership"
                      className="btn btn-secondary"
                      style={{ flex: 1, justifyContent: "center", fontSize: "15px" }}
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