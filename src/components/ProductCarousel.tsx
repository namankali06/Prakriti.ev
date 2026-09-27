import { PRODUCTS } from "../data/products"
import RoundCarousel from "@/components/originkit/ui/roundcarousel"
import { useInView } from "../hooks/useInView"
import { Link } from "react-router-dom"

export default function ProductCarousel() {
  const { ref, inView } = useInView(0.08)

  const carouselImages = PRODUCTS.map((product) => ({
    src: product.image,
    alt: product.name,
    id: product.id,
    name: product.name,
    category: product.category,
    range: product.specs.find((s) => s.label === "Range")?.value,
  }))

  return (
    <section id="product-carousel" className="bg-white" style={{ borderTop: "1px solid #E3E7E3" }}>
      <div ref={ref} className={`container-bb pt-24 pb-16 lg:pt-32 lg:pb-20 transition-all duration-700 motion-safe:transition-all ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="label-mono-green mb-5">Our Electric Range</div>
        <h2 className="display-xl text-[#111111] mb-10" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
          Explore the<br />
          <span style={{ color: "#1B8F3A" }}>Full Lineup.</span>
        </h2>

        <div style={{ height: "500px", maxWidth: "900px", margin: "0 auto" }}>
          <RoundCarousel
            images={carouselImages.map((img) => ({ src: img.src }))}
            imageWidth={280}
            imageHeight={350}
            spacing={2.5}
            speed={5}
            direction="right"
            drag={true}
            sensitivity={4}
            tilt={-10}
            perspective={4000}
            cornerRadius={16}
            innerDim={3}
            background="transparent"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              to={`/model/${product.id}`}
              className="group block p-4 rounded-lg border border-[#E3E7E3] hover:border-[#1B8F3A] transition-colors duration-300 bg-white"
            >
              <div className="aspect-square relative overflow-hidden rounded-md mb-3" style={{ background: "#F5F7F4" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h4 className="font-medium text-[#111111] text-sm mb-1 group-hover:text-[#1B8F3A] transition-colors">
                {product.name}
              </h4>
              <p className="text-[#757575] text-xs label-mono">{product.category}</p>
              <p className="text-[#1B8F3A] text-xs font-medium label-mono mt-1">
                {product.specs.find((s) => s.label === "Range")?.value}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}