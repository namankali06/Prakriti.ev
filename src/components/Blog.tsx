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
    <section id="stories" className="section-dark" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="section-label-accent mb-4">Stories</div>
            <h2 className="display-2xl">
              From the world<br />
              of Prakriti.
            </h2>
          </div>
          <a
            href="#"
            className="label-xs-accent flex items-center gap-2 hover:text-white transition-colors group"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          {POSTS.map((post, i) => (
            <a
              key={post.title}
              href="#"
              className="group flex flex-col overflow-hidden card"
              style={{
                borderRight: i < POSTS.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "16/10", background: "var(--color-bg-tertiary)" }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.85 }}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-1" style={{ padding: "24px" }}>
                <div className="label-xs-accent mb-2">{post.category}</div>
                <h3 className="display-md text-white mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="body-sm text-neutral-400 flex-1 mb-4" style={{ lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between" style={{ borderTop: "1px solid var(--color-border-subtle)", paddingTop: "16px" }}>
                  <span className="label-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {post.date.toUpperCase()}
                  </span>
                  <span className="label-xs-accent group-hover:text-white transition-colors">
                    READ
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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