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
    <div className="bg-white">
      {/* Product Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-[#E3E7E3]">
        <div className="container-bb">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Product Image */}
            <div className="order-2 lg:order-1 relative">
              <div
                className="relative overflow-hidden bg-[#F5F7F4] rounded-lg flex items-center justify-center p-8 lg:p-12"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[70vh] object-contain mix-blend-multiply transition-transform duration-700 ease-out hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="order-1 lg:order-2">
              <Link to="/" className="inline-flex items-center gap-2 text-[#93939F] hover:text-[#111111] transition-colors mb-8 text-[13px] font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Models
              </Link>
              
              <span className="label-mono-green block mb-3">{product.category}</span>
              <h1
                className="display-xl text-[#111111] mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
              >
                {product.name}
              </h1>
              <p
                className="text-[#555B56] mb-8"
                style={{ fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: 1.6 }}
              >
                {product.tagline} {product.description}
              </p>

              {/* Key Specs */}
              <div className="border-t border-[#E3E7E3] mb-10">
                {product.specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="spec-row py-4">
                    <span className="spec-label text-[#555B56]">{spec.label}</span>
                    <span className="spec-value text-[#111111] text-[16px]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openTestRide}
                  className="btn btn-green flex-1 justify-center text-[15px]"
                >
                  Book Test Ride
                </button>
                <a
                  href="/#dealership"
                  className="btn btn-outline flex-1 justify-center text-[15px]"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Specifications */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-bb">
          <div className="label-mono-green mb-6">Technical Data</div>
          <h2
            className="display-xl text-[#111111] mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
          >
            Complete<br />
            Specifications.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="label-mono text-[#111111] mb-6 pb-2 border-b border-[#E3E7E3]">Performance & Powertrain</h3>
              <div className="space-y-4">
                {product.specs.slice(0, 3).map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline">
                    <span className="text-[#555B56] text-[15px]">{spec.label}</span>
                    <span className="text-[#111111] font-medium text-[15px]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="label-mono text-[#111111] mb-6 pb-2 border-b border-[#E3E7E3]">Dimensions & Capacity</h3>
              <div className="space-y-4">
                {product.specs.slice(3).map((spec) => (
                  <div key={spec.label} className="flex justify-between items-baseline">
                    <span className="text-[#555B56] text-[15px]">{spec.label}</span>
                    <span className="text-[#111111] font-medium text-[15px]">{spec.value}</span>
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
