import { useInView } from "../hooks/useInView"
interface CTAProps { onTestRide: () => void }

export default function CTASection({ onTestRide }: CTAProps) {
  const { ref, inView } = useInView(0.15)

  return (
    <section
      id="final-cta"
      style={{ background: "#111511", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className={`container-bb py-28 lg:py-40 text-center transition-all duration-700 motion-safe:transition-all ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className="label-mono w-fit mx-auto mb-10"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "3px",
            padding: "4px 12px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "10px",
            letterSpacing: "0.1em",
          }}
        >
          Get Started
        </div>
        <h2
          className="display-xl text-white mx-auto mb-6"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            maxWidth: "800px",
          }}
        >
          READY TO MOVE<br />
          <span style={{ color: "#1B8F3A" }}>ELECTRIC?</span>
        </h2>
        <p
          className="body-copy mx-auto mb-14"
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.65,
            maxWidth: "460px",
          }}
        >
          Book a no-obligation test ride at your nearest Prakriti experience centre.
          Our team will walk you through the full range and operating economics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onTestRide}
            className="btn btn-green cursor-pointer"
            style={{ fontSize: "15px", paddingLeft: "36px", paddingRight: "36px" }}
          >
            Book a Test Ride
          </button>
          <a
            href="#dealership"
            className="btn btn-ghost-light"
            style={{ fontSize: "15px", paddingLeft: "36px", paddingRight: "36px" }}
          >
            Find a Dealer
          </a>
        </div>
      </div>
    </section>
  )
}
