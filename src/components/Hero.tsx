"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface HeroProps {
  onTestRide: () => void
}

const COLORWAYS = [
  { name: "Urban Teal", color: "#1fb5a8", image: "/scooter-1.png", active: true },
  { name: "Midnight Ink", color: "#1a1a2e", image: "/scooter-2.png", active: false },
  { name: "Pearl White", color: "#f6efe8", image: "/scooter-3.png", active: false },
]

export default function Hero({ onTestRide }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const productRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLDivElement>(null)
  const [activeColor, setActiveColor] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (productRef.current) {
        gsap.fromTo(productRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
        )
      }

      if (watermarkRef.current) {
        gsap.fromTo(watermarkRef.current,
          { opacity: 0, scale: 1.1 },
          { opacity: 0.04, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
        )
      }

      const hero = heroRef.current
      if (hero) {
        const parallaxElements = hero.querySelectorAll(".parallax-layer")
        parallaxElements.forEach((el, i) => {
          const depth = (i + 1) * 0.15
          gsap.to(el, {
            yPercent: 20 * depth,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          })
        })
      }
    }, heroRef)

    return () => ctx?.revert()
  }, [mounted, prefersReducedMotion])

  const handleColorChange = (index: number) => {
    setActiveColor(index)
  }

  const activeColorway = COLORWAYS[activeColor]

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden section-primary diagonal-cut"
      style={{ minHeight: "100svh" }}
      aria-label="Prakriti EV — Hero"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="parallax-layer absolute rounded-full"
              style={{
                width: `${40 + i * 30}px`,
                height: `${40 + i * 30}px`,
                left: `${10 + (i * 13) % 80}%`,
                top: `${15 + (i * 17) % 70}%`,
                background: `rgba(31, 181, 168, ${0.03 + i * 0.01})`,
                filter: "blur(60px)",
              }}
            />
          ))}
        </div>

        <div
          className="parallax-layer absolute rounded-full blur-[300px] opacity-10"
          style={{
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, #7a1c22 0%, transparent 70%)",
            top: "20%",
            right: "-10%",
            transform: "translate(50%, -50%)",
          }}
        />

        <div
          className="parallax-layer absolute rounded-full blur-[200px] opacity-5"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #1fb5a8 0%, transparent 70%)",
            bottom: "10%",
            left: "5%",
            transform: "translate(-50%, 50%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-[100svh]">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4" aria-label="Main navigation">
          <a href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Prakriti EV home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" />
              <path d="M16 8v8M8 16h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="display-sm text-cream" style={{ letterSpacing: "-0.01em" }}>PRAKRITI</span>
            <span className="label-xs text-ink px-2 py-0.5 rounded-full" style={{ background: "var(--color-cream)" }}>EV</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#models" className="text-sm font-medium text-cream/80 hover:text-cream transition-colors">Products</a>
            <a href="#technology" className="text-sm font-medium text-cream/80 hover:text-cream transition-colors">Technology</a>
            <a href="#manufacturing" className="text-sm font-medium text-cream/80 hover:text-cream transition-colors">Manufacturing</a>
            <a href="#dealership" className="text-sm font-medium text-cream/80 hover:text-cream transition-colors">Dealership</a>
            <a href="#service" className="text-sm font-medium text-cream/80 hover:text-cream transition-colors">Service</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#dealership" className="hidden sm:inline-flex nav-pill">Book Test Ride</a>
            <button
              className="lg:hidden btn btn-icon"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="container w-full max-w-[1440px]">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="max-w-xl">
                <div className="badge badge-cream mb-6" style={{ letterSpacing: "0.08em" }}>
                  Now rolling out across India
                </div>

                <h1 className="display-5xl text-cream mb-6" style={{ letterSpacing: "-0.02em", lineHeight: 1.02 }}>
                  Ride Further.<br />
                  <span className="text-gradient-accent">Charge Less.</span>
                </h1>

                <p className="body-base text-cream/70 mb-8 max-w-lg" style={{ lineHeight: 1.7 }}>
                  The Glider is built for the everyday commute — light in the city, steady on the highway, and cheap to keep charged.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#models" className="btn btn-primary" style={{ minWidth: "220px" }}>
                    Explore the Glider
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="#dealership" className="btn btn-secondary" style={{ minWidth: "220px" }}>
                    Find a dealership
                  </a>
                </div>
              </div>

              <div className="relative" aria-hidden="true">
                <div
                  ref={watermarkRef}
                  className="watermark-text absolute -top-1/2 -left-1/2 -z-10 select-none"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  GLIDER
                </div>

                <div
                  ref={productRef}
                  className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-square max-w-[600px] mx-auto"
                  style={{
                    filter: "drop-shadow(0 0 120px rgba(31, 181, 168, 0.4)) drop-shadow(0 60px 80px rgba(0,0,0,0.5))",
                  }}
                >
                  <img
                    src={activeColorway.image}
                    alt={`Prakriti EV ${activeColorway.name}`}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>

                <div className="flex items-center justify-center gap-3 mt-8" role="radiogroup" aria-label="Color options">
                  {COLORWAYS.map((cw, i) => (
                    <button
                      key={cw.name}
                      onClick={() => handleColorChange(i)}
                      role="radio"
                      aria-checked={i === activeColor}
                      aria-label={`${cw.name} colorway`}
                      className="color-swatch"
                      style={{
                        background: cw.color,
                        boxShadow: i === activeColor ? `0 0 0 4px ${cw.color}40, 0 8px 32px ${cw.color}30` : "none",
                      }}
                    >
                      {i === activeColor && (
                        <svg className="w-6 h-6 text-ink absolute" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>

                <p className="label-xs text-center mt-4 text-cream/50">
                  {activeColorway.name} · Select colorway above
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
        <svg className="w-full h-16 sm:h-24" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0 100 L100 0 L100 100 Z"
            fill="var(--color-bg-secondary)"
          />
        </svg>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .parallax-layer { transform: none !important; }
        }
        @media (max-width: 820px) {
          .watermark-text { font-size: clamp(80px, 20vw, 140px); }
        }
      `}</style>
    </section>
  )
}