import { useInView } from "../hooks/useInView"

interface CTAProps { onTestRide: () => void }

export default function CTASection({ onTestRide }: CTAProps) {
  const { ref, inView } = useInView(0.15)

  return (
    <section id="final-cta" className="section-dark" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-20 lg:py-28 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="section-label-accent mx-auto mb-6">Get Started</div>
        <h2 className="display-2xl mx-auto mb-4" style={{ maxWidth: "800px" }}>
          READY TO MOVE<br />
          <span className="text-gradient-accent">ELECTRIC?</span>
        </h2>
        <p className="body-base text-neutral-400 mx-auto mb-10" style={{ maxWidth: "460px", lineHeight: 1.7 }}>
          Book a no-obligation test ride at your nearest Prakriti experience centre. Our team will walk you through the full range and operating economics.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onTestRide}
            className="btn btn-primary cursor-pointer"
            style={{ fontSize: "15px", paddingLeft: "36px", paddingRight: "36px" }}
          >
            Book a Test Ride
          </button>
          <a
            href="#dealership"
            className="btn btn-secondary"
            style={{ fontSize: "15px", paddingLeft: "36px", paddingRight: "36px" }}
          >
            Find a Dealer
          </a>
        </div>
      </div>
    </section>
  )
}