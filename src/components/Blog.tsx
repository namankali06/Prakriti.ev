import { useInView } from "../hooks/useInView"

const POSTS = [
  {
    category: "EV TECHNOLOGY",
    title: "How EABS Braking Cuts Brake Costs for Indian Fleet Operators",
    date: "September 2, 2026",
    excerpt:
      "Electronic anti-lock braking with regenerative energy recovery reduces brake wear significantly. Here is what that means for operators running 100+ km per day.",
    image: "/blog-1.png",
  },
  {
    category: "MOBILITY",
    title: "The Economics of Switching to Electric in 2026",
    date: "August 14, 2026",
    excerpt:
      "Fuel prices at record highs. We break down the real cost comparison of running a Big Bull Defender versus a petrol three-wheeler across major Indian cities.",
    image: "/blog-2.png",
  },
  {
    category: "MANUFACTURING",
    title: "How Prakriti Builds for India — Not Just in India",
    date: "July 30, 2026",
    excerpt:
      "A walkthrough of our manufacturing facility and how every engineering decision is validated against Indian road conditions before a vehicle reaches a dealer.",
    image: "/blog-3.png",
  },
]

export default function Blog() {
  const { ref, inView } = useInView()

  return (
    <section
      id="stories"
      style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        ref={ref}
        className={`container-bb py-24 lg:py-32 transition-all duration-700 motion-safe:transition-all ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <div
              className="label-mono mb-5"
              style={{ color: "#1B8F3A", fontSize: "11px", letterSpacing: "0.1em" }}
            >
              Stories
            </div>
            <h2
              className="display-xl text-white"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              From the world<br />
              of Prakriti.
            </h2>
          </div>
          <a
            href="#"
            className="label-mono flex items-center gap-2 hover:text-white transition-colors group"
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "0.1em" }}
          >
            ALL STORIES
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Posts — 3-column editorial grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {POSTS.map((post, i) => (
            <a
              key={post.title}
              href="#"
              className="group flex flex-col overflow-hidden"
              style={{
                borderRight:
                  i < POSTS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Image */}
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "16/10", background: "#0d0d0d" }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.85 }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div
                className="flex flex-col flex-1"
                style={{ padding: "28px 0" }}
              >
                <div
                  className="label-mono mb-3"
                  style={{ color: "#1B8F3A", fontSize: "10px", letterSpacing: "0.1em" }}
                >
                  {post.category}
                </div>
                <h3
                  className="display-xl text-white mb-3 group-hover:text-[#1B8F3A] transition-colors"
                  style={{ fontSize: "17px", lineHeight: 1.25, letterSpacing: "-0.01em" }}
                >
                  {post.title}
                </h3>
                <p
                  className="body-copy flex-1 mb-5"
                  style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "16px",
                  }}
                >
                  <span
                    className="label-mono"
                    style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}
                  >
                    {post.date.toUpperCase()}
                  </span>
                  <span
                    className="label-mono group-hover:text-[#1B8F3A] transition-colors"
                    style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}
                  >
                    READ →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
