import { useEffect } from "react"
import { useParams, Navigate, useOutletContext, Link } from "react-router-dom"
import { PRODUCTS } from "../data/products"
import type { LayoutContextType } from "../components/Layout"

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const product = PRODUCTS.find((p) => p.id === id)
  const { openTestRide } = useOutletContext<LayoutContextType>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="section-light">
      <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 border-b" style={{ borderColor: "var(--color-border-primary)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="relative overflow-hidden card flex items-center justify-center p-6 lg:p-10"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-700 ease-out hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-6 text-xs font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Models
              </Link>
              
              <span className="label-xs-accent block mb-3">{product.category}</span>
              <h1 className="display-2xl mb-4">
                {product.name}
              </h1>
              <p className="body-base text-neutral-400 mb-6" style={{ lineHeight: 1.7 }}>
                {product.tagline} {product.description}
              </p>

              <div style={{ borderTop: "1px solid var(--color-border-primary)", marginBottom: "24px" }}>
                {product.specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="spec-row py-3">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value text-lg">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={openTestRide}
                  className="btn btn-primary flex-1 justify-center text-base"
                >
                  Book Test Ride
                </button>
                <a
                  href="/#dealership"
                  className="btn btn-secondary flex-1 justify-center text-base"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 section-secondary">
        <div className="container">
          <div className="section-label-accent mb-4">Technical Data</div>
          <h2 className="display-2xl mb-10">
            Complete<br />
            Specifications.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="card" style={{ padding: "24px" }}>
              <h3 className="label-xs-accent mb-4 pb-2 border-b" style={{ borderColor: "var(--color-border-subtle)" }}>
                Performance & Powertrain
              </h3>
              <div className="space-y-3">
                {product.specs.slice(0, 3).map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline">
                    <span className="text-neutral-400 text-sm">{spec.label}</span>
                    <span className="text-white font-medium text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card" style={{ padding: "24px" }}>
              <h3 className="label-xs-accent mb-4 pb-2 border-b" style={{ borderColor: "var(--color-border-subtle)" }}>
                Dimensions & Capacity
              </h3>
              <div className="space-y-3">
                {product.specs.slice(3).map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline">
                    <span className="text-neutral-400 text-sm">{spec.label}</span>
                    <span className="text-white font-medium text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}