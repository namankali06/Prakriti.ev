import { useOutletContext } from "react-router-dom"
import type { LayoutContextType } from "../components/Layout"
import Hero from "../components/Hero"
import Products from "../components/Products"
import ProductCarousel from "../components/ProductCarousel"
import ColorConfigurator from "../components/ColorConfigurator"
import WhyPrakriti from "../components/WhyPrakriti"
import Technology from "../components/Technology"
import MadeInIndia from "../components/MadeInIndia"
import BusinessSection from "../components/BusinessSection"
import Dealership from "../components/Dealership"
import ServiceSection from "../components/ServiceSection"
import Blog from "../components/Blog"
import CTASection from "../components/CTASection"

export default function Home() {
  const { openTestRide } = useOutletContext<LayoutContextType>()

  return (
    <>
      {/* 01 — Hero */}
      <Hero onTestRide={openTestRide} />
      {/* 02 — Products 3D Carousel */}
      <ProductCarousel />
      {/* 03/04 — Products Showcase */}
      <Products />
      {/* 05 — Colour / Variant Experience */}
      <ColorConfigurator />
      {/* 05 — Built for India */}
      <WhyPrakriti />
      {/* 06 — Engineering */}
      <Technology />
      {/* 07 — Manufacturing */}
      <MadeInIndia />
      {/* 08 — Fleet / Business */}
      <BusinessSection />
      {/* 09 — Dealership CTA & Enquiry */}
      <Dealership />
      {/* 10 — Service */}
      <ServiceSection />
      {/* 11 — Stories */}
      <Blog />
      {/* 12 — Final CTA */}
      <CTASection onTestRide={openTestRide} />
    </>
  )
}
