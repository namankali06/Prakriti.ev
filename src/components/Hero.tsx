"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"

interface HeroSlide {
  id: string
  image: string
  title: string
  subtitle: string
  color: string
  specs: { label: string; value: string }[]
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "cruiser-teal",
    image: "/scooter-1.png",
    title: "Big Bull Cruiser",
    subtitle: "Neo Teal Edition",
    color: "#2FD3F2",
    specs: [
      { label: "Range", value: "110 km" },
      { label: "Top Speed", value: "65 km/h" },
      { label: "Charge Time", value: "3.5 hrs" },
    ],
  },
  {
    id: "explorer-orange",
    image: "/scooter-2.png",
    title: "Big Bull Explorer",
    subtitle: "ESPA Orange",
    color: "#FF6B35",
    specs: [
      { label: "Range", value: "130 km" },
      { label: "Top Speed", value: "75 km/h" },
      { label: "Charge Time", value: "4.5 hrs" },
    ],
  },
  {
    id: "phantom-red",
    image: "/scooter-3.png",
    title: "Big Bull Phantom",
    subtitle: "Race Red",
    color: "#E84D4D",
    specs: [
      { label: "Range", value: "95 km" },
      { label: "Top Speed", value: "90 km/h" },
      { label: "Charge Time", value: "2 hrs" },
    ],
  },
  {
    id: "alpha-silver",
    image: "/scooter-4.png",
    title: "Big Bull Alpha",
    subtitle: "Urban Silver",
    color: "#9CA3AF",
    specs: [
      { label: "Range", value: "150 km" },
      { label: "Top Speed", value: "55 km/h" },
      { label: "Charge Time", value: "Swap Ready" },
    ],
  },
  {
    id: "nexus-blue",
    image: "/scooter-5.png",
    title: "Big Bull Nexus",
    subtitle: "Electric Blue",
    color: "#3B82F6",
    specs: [
      { label: "Range", value: "120 km" },
      { label: "Top Speed", value: "70 km/h" },
      { label: "Charge Time", value: "4 hrs" },
    ],
  },
  {
    id: "zenith-gold",
    image: "/scooter-6.png",
    title: "Big Bull Zenith",
    subtitle: "Champagne Gold",
    color: "#D4A843",
    specs: [
      { label: "Range", value: "140 km" },
      { label: "Top Speed", value: "80 km/h" },
      { label: "Charge Time", value: "3 hrs" },
    ],
  },
]

interface HeroProps {
  onTestRide: () => void
}

export default function Hero({ onTestRide }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const heroRef = useRef<HTMLElement>(null)
  const imageRefs = useRef<(HTMLElement | null)[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])
  const badgeRefs = useRef<(HTMLElement | null)[]>([])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advanceSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!isHovering) {
      intervalRef.current = setInterval(advanceSlide, 4500)
    }
  }, [advanceSlide, isHovering])

  useEffect(() => {
    intervalRef.current = setInterval(advanceSlide, 4500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [advanceSlide])

  useEffect(() => {
    resetTimer()
  }, [activeIndex, resetTimer])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.set(el, { opacity: i === activeIndex ? 1 : 0, scale: 1 })
      })

      textRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.set(el, { opacity: i === activeIndex ? 1 : 0, y: 20 })
      })

      badgeRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.set(el, { opacity: i === activeIndex ? 1 : 0, y: 30 })
      })

      if (imageRefs.current[activeIndex]) {
        gsap.to(imageRefs.current[activeIndex], {
          scale: 1.05,
          duration: 4.5,
          ease: "none",
        })
      }
    }, heroRef)
    return () => ctx?.revert()
  }, [activeIndex])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const particles = heroRef.current?.querySelectorAll(".particle")
      if (particles) {
        gsap.to(particles, {
          y: -100,
          x: (i) => (i % 2 === 0 ? 50 : -50),
          rotation: 360,
          duration: (i) => 20 + i * 5,
          repeat: -1,
          ease: "none",
          stagger: 0.5,
        })
      }

      const gridLines = heroRef.current?.querySelectorAll(".grid-line")
      if (gridLines) {
        gsap.to(gridLines, {
          opacity: (i) => (i % 2 === 0 ? 0.3 : 0.15),
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.3,
        })
      }

      const glowBlob = heroRef.current?.querySelector(".glow-blob")
      if (glowBlob) {
        gsap.to(glowBlob, {
          scale: 1.2,
          rotation: 180,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }
    }, heroRef)
    return () => ctx?.revert()
  }, [])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  const currentSlide = HERO_SLIDES[activeIndex]

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden section-dark"
      style={{ minHeight: "100svh" }}
      aria-label="Prakriti EV — Hero"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{ opacity: 0.08 }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path className="grid-line" d="M 10 0 L 0 0 0 10" fill="none" stroke="#DC2626" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full"
              style={{
                width: `${3 + (i % 3) * 2}px`,
                height: `${3 + (i % 3) * 2}px`,
                left: `${5 + (i * 7) % 90}%`,
                top: `${10 + (i * 11) % 80}%`,
                background: `rgba(220, 38, 38, ${0.1 + (i % 3) * 0.05})`,
              }}
            />
          ))}
        </div>

        <div
          className="glow-blob absolute rounded-full blur-[200px] opacity-5"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #DC2626 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          zIndex: 5,
          width: "500px",
          height: "300px",
          background: "radial-gradient(ellipse at center, rgba(220, 38, 38, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-end justify-center min-h-[calc(100svh-80px)] px-4">
        <div className="relative w-full max-w-5xl">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              ref={(el) => { imageRefs.current[i] = el }}
              className="absolute inset-0 flex items-end justify-center"
              style={{
                opacity: 0,
                transition: "opacity 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              aria-hidden={i !== activeIndex}
            >
              <div
                className="relative w-[85%] max-w-[600px]"
                style={{
                  filter: `drop-shadow(0 0 80px ${currentSlide.color}80) drop-shadow(0 40px 60px rgba(0,0,0,0.5))`,
                }}
              >
                <img
                  src={slide.image}
                  alt={`${slide.title} ${slide.subtitle}`}
                  className="w-full h-auto object-contain"
                  loading={i === 0 ? "eager" : "lazy"}
                  style={{
                    transformOrigin: "center bottom",
                    transition: "transform 4.5s linear",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-3 pointer-events-none z-20" aria-hidden="true">
        {currentSlide.specs.map((spec, i) => (
          <div
            key={spec.label}
            ref={(el) => { badgeRefs.current[i] = el }}
            className="glass badge badge-white px-4 py-2"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
            }}
          >
            <div className="text-white font-medium text-sm">{spec.value}</div>
            <div className="text-neutral-400 text-xs font-mono tracking-wider uppercase mt-0.5">{spec.label}</div>
          </div>
        ))}
      </div>

      <div className="relative z-20 container flex flex-col justify-center min-h-[100svh] px-4">
        <div className="max-w-2xl">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              ref={(el) => { textRefs.current[i] = el }}
              className="absolute inset-0 transition-all duration-800"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transform: i === activeIndex ? "translateY(0)" : "translateY(20px)",
                pointerEvents: i === activeIndex ? "auto" : "none",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-0.5" style={{ background: slide.color }} />
                <span className="label-xs" style={{ color: slide.color }}> {slide.subtitle.toUpperCase()} </span>
              </div>

              <h1 className="display-2xl text-white mb-6 leading-[0.95]" style={{ letterSpacing: "-0.03em" }}>
                {slide.title.split(" ").map((word, wi) => (
                  <span key={wi} className="block" style={{ color: wi === slide.title.split(" ").length - 1 ? slide.color : "white" }}>
                    {word}
                    {wi < slide.title.split(" ").length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>

              <p className="body-base text-neutral-400 mb-8 max-w-lg" style={{ lineHeight: 1.7 }}>
                Smooth. Silent. Stylish. — The future of urban mobility.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onTestRide}
                  className="btn btn-primary group relative overflow-hidden"
                  style={{ fontSize: "15px", padding: "16px 32px", minWidth: "200px" }}
                >
                  <span className="relative z-10">Book a Test Ride</span>
                  <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </button>
                <a href="#models" className="btn btn-secondary group relative overflow-hidden" style={{ fontSize: "15px", padding: "16px 32px", minWidth: "200px" }}>
                  <span className="relative z-10">Explore Lineup</span>
                  <span className="absolute inset-0 bg-white/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </a>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 mt-12" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to slide ${i + 1}: ${HERO_SLIDES[i].title}`}
                className="relative w-2 h-2 rounded-full transition-all duration-300 flex items-center justify-center"
                style={{
                  background: i === activeIndex ? currentSlide.color : "rgba(255,255,255,0.3)",
                  transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
                  boxShadow: i === activeIndex ? `0 0 20px ${currentSlide.color}` : "none",
                }}
              >
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20" aria-hidden="true">
        <span className="label-xs text-neutral-500">SCROLL</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-neutral-500" style={{ animation: "bounce-slow 2.5s ease-in-out infinite" }}>
          <path d="M4 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .particle, .grid-line, .glow-blob { animation: none !important; }
        }
      `}</style>
    </section>
  )
}