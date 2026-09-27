const FOOTER_LINKS: Record<string, string[]> = {
  Products: ["Big Bull Defender", "Big Bull Loader", "Big Bull Glider", "Big Bull Cruiser", "Big Bull Explorer", "Big Bull Phantom"],
  Business: ["Fleet Solutions", "Last-Mile Delivery", "Passenger Mobility", "Dealership Partnership"],
  Company: ["About Prakriti", "Manufacturing", "Careers", "Press"],
  Support: ["Customer Care", "Service Network", "Warranty", "Spare Parts"],
}

const SOCIAL = [
  {
    name: "LinkedIn",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    name: "YouTube",
    icon: "M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z",
  },
  {
    name: "Instagram",
    icon: "M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zm0 2a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8zM12 7a5 5 0 100 10A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.5a1 1 0 100-2 1 1 0 000 2z",
  },
]

export default function Footer() {
  return (
    <footer className="section-dark" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
      <div className="container">
        <div className="py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="display-xl text-white" style={{ fontSize: "20px", letterSpacing: "-0.01em" }}>
                PRAKRITI
              </span>
              <span className="label-xs text-white px-2 py-1 rounded-md" style={{ background: "var(--color-accent-primary)" }}>
                EV
              </span>
            </div>
            <p className="mb-4" style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(255,255,255,0.45)", maxWidth: "240px" }}>
              Electric mobility built for India. Reliable, zero-emission commercial transport for every road.
            </p>
            <div className="space-y-1 mb-4">
              <p className="label-xs-accent">Support</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                contact@bigbullev.in
              </p>
            </div>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex items-center justify-center transition-colors"
                  style={{
                    width: "32px",
                    height: "32px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "var(--radius-md)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, items]) => (
            <div key={heading} className="col-span-1">
              <h4 className="label-xs-accent mb-3">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors hover:text-white"
                      style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--color-border-subtle)", color: "rgba(255,255,255,0.3)", fontSize: "12px" }}
        >
          <p>&copy; {new Date().getFullYear()} Prakriti EV Private Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}