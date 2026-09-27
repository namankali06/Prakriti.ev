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
            ? "bg-white border-b border-[#E3E7E3]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ height: "68px" }}
      >
        <div className="container-bb h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Prakriti EV home">
            <span
              className="display-xl text-[#111111]"
              style={{ fontSize: "17px", letterSpacing: "-0.01em" }}
            >
              PRAKRITI
            </span>
            <span
              className="label-mono text-white px-1.5 py-0.5"
              style={{
                fontSize: "9px",
                background: "#1B8F3A",
                borderRadius: "2px",
                color: "#fff",
                letterSpacing: "0.06em",
              }}
            >
              EV
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center h-full gap-1" aria-label="Main navigation">
            <div
              ref={dropdownRef}
              className="relative h-full flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="h-full px-4 text-[13px] font-medium text-[#555B56] hover:text-[#111111] transition-colors cursor-pointer flex items-center gap-1.5"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-transform duration-150 ${productsOpen ? "rotate-180" : ""}`}
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-0 w-72 bg-white overflow-hidden transition-all duration-200 origin-top ${
                  productsOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{
                  border: "1px solid #E3E7E3",
                  borderRadius: "6px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
                role="menu"
              >
                {PRODUCTS.map((p, i) => (
                  <a
                    key={p.id}
                    href={`/#models`}
                    role="menuitem"
                    onClick={() => setProductsOpen(false)}
                    className={`flex items-start gap-3 px-4 py-3.5 hover:bg-[#F5F7F4] transition-colors ${
                      i < PRODUCTS.length - 1 ? "border-b border-[#E3E7E3]" : ""
                    }`}
                  >
                    <div className="w-10 h-10 bg-[#F5F7F4] rounded flex-shrink-0 flex items-center justify-center" style={{ borderRadius: "4px" }}>
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" style={{ filter: p.defaultFilter }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#111111] leading-tight">{p.name}</div>
                      <div className="text-xs text-[#93939F] mt-0.5">{p.category}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="h-full px-4 text-[13px] font-medium text-[#555B56] hover:text-[#111111] transition-colors flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onTestRide}
              className="btn btn-green btn-sm hidden lg:inline-flex cursor-pointer"
            >
              Book Test Ride
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 cursor-pointer"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-[22px] h-[1.5px] bg-[#111111] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-[22px] h-[1.5px] bg-[#111111] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[22px] h-[1.5px] bg-[#111111] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full pt-[68px] overflow-y-auto">
          <nav className="flex flex-col flex-1 px-6 pt-8" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`py-5 display-xl text-[20px] text-[#111111] hover:text-[#1B8F3A] transition-colors ${
                  i < NAV_LINKS.length - 1 ? "border-b border-[#E3E7E3]" : ""
                }`}
                style={{ letterSpacing: "-0.01em" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-10 pt-6 border-t border-[#E3E7E3]">
            <button
              onClick={() => { closeMenu(); onTestRide() }}
              className="btn btn-green w-full justify-center cursor-pointer"
            >
              Book a Test Ride
            </button>
            <p className="mt-4 text-center text-xs text-[#93939F]">
              Prakriti EV — Electric mobility built for India.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
