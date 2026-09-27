import { useState, useEffect, useRef } from "react"
import { PRODUCTS } from "../data/products"

interface HeaderProps { onTestRide: () => void }

const NAV_LINKS = [
  { label: "Products", href: "/#models" },
  { label: "Technology", href: "/#technology" },
  { label: "Manufacturing", href: "/#manufacturing" },
  { label: "Dealership", href: "/#dealership" },
  { label: "Service", href: "/#service" },
]

export default function Navbar({ onTestRide }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenuOpen(false); setProductsOpen(false) } }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-bg-secondary)/95] backdrop-blur-md border-b border-[var(--color-border-subtle)]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ height: "64px" }}
      >
        <div className="container h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Prakriti EV home">
            <span className="display-xl text-white" style={{ fontSize: "17px", letterSpacing: "-0.01em" }}>
              PRAKRITI
            </span>
            <span className="label-xs text-white px-2 py-1 rounded-md" style={{ background: "var(--color-accent-primary)" }}>
              EV
            </span>
          </a>

          <nav className="hidden lg:flex items-center h-full gap-1" aria-label="Main navigation">
            <div
              ref={dropdownRef}
              className="relative h-full flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="h-full px-4 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-150 ${productsOpen ? "rotate-180" : ""}`}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-72 bg-[var(--color-bg-card)] overflow-hidden transition-all duration-200 origin-top ${productsOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                style={{
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
                role="menu"
              >
                {PRODUCTS.map((p, i) => (
                  <a
                    key={p.id}
                    href={`/#models`}
                    role="menuitem"
                    onClick={() => setProductsOpen(false)}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-[var(--color-bg-tertiary)] transition-colors ${i < PRODUCTS.length - 1 ? "border-b" : ""}`}
                    style={{ borderColor: "var(--color-border-subtle)" }}
                  >
                    <div className="w-10 h-10 bg-[var(--color-bg-tertiary)] rounded flex-shrink-0 flex items-center justify-center" style={{ borderRadius: "var(--radius-md)" }}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white leading-tight">{p.name}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{p.category}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="h-full px-4 text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onTestRide}
              className="btn btn-primary btn-sm hidden lg:inline-flex cursor-pointer"
            >
              Book Test Ride
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col items-center justify-center gap-[4px] w-10 h-10 cursor-pointer"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
              <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[var(--color-bg-secondary)] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full pt-[64px] overflow-y-auto">
          <nav className="flex flex-col flex-1 px-6 pt-8" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`py-5 display-xl text-[20px] text-white hover:text-[var(--color-accent-primary)] transition-colors ${i < NAV_LINKS.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "var(--color-border-subtle)", letterSpacing: "-0.01em" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-10 pt-6 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
            <button
              onClick={() => { closeMenu(); onTestRide() }}
              className="btn btn-primary w-full justify-center cursor-pointer"
            >
              Book a Test Ride
            </button>
            <p className="mt-4 text-center text-xs text-neutral-500">
              Prakriti EV — Electric mobility built for India.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}