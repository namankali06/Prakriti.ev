import { useState } from "react"
import { useInView } from "../hooks/useInView"
import { INDIAN_CITIES } from "../data/cities"

const ENQUIRY_TYPES = ["Product enquiry", "Test ride", "Dealership", "Fleet / Business", "Service", "General"]
const PRODUCT_OPTIONS = ["Big Bull Defender", "Big Bull Loader", "Big Bull Glider", "Not sure yet"]

interface FormState {
  name: string
  phone: string
  city: string
  product: string
  type: string
  message: string
}

export default function Dealership() {
  const { ref, inView } = useInView(0.1)
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    city: "",
    product: "",
    type: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="dealership" className="section-light" style={{ borderTop: "1px solid var(--color-border-primary)" }}>
      <div
        ref={ref}
        className={`container py-16 lg:py-24 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="section-label-accent mb-4">Dealership & Enquiries</div>
            <h2 className="display-2xl mb-4">
              BUILD YOUR<br />
              BUSINESS WITH<br />
              PRAKRITI.
            </h2>
            <p className="body-base text-neutral-400 mb-8" style={{ maxWidth: "420px", lineHeight: 1.7 }}>
              Whether you are a prospective buyer, fleet operator, or interested in a dealership partnership — fill in the form and our team will respond within 24 hours.
            </p>

            <div className="card mb-8" style={{ padding: "24px", background: "rgba(220, 38, 38, 0.08)", borderColor: "rgba(220, 38, 38, 0.2)" }}>
              <p className="display-md text-[var(--color-accent-primary)] mb-2">Become a Dealer</p>
              <p className="body-sm text-neutral-400 mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                Prakriti is expanding its authorised dealer network across India. Select "Dealership" in the enquiry type to begin the conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#enquiry" className="btn btn-primary" style={{ fontSize: "13px" }}>
                  Dealer Application
                </a>
                <a href="#" className="btn btn-secondary" style={{ fontSize: "13px" }}>
                  Download Brochure
                </a>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--color-border-primary)" }}>
              {[
                { label: "Dealership enquiries", value: "dealership@bigbullev.in" },
                { label: "Customer support", value: "support@bigbullev.in" },
                { label: "Headquarters", value: "India" },
              ].map((item) => (
                <div key={item.label} className="spec-row">
                  <span className="spec-label">{item.label}</span>
                  <span className="spec-value" style={{ fontSize: "14px" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="card" style={{ padding: "40px", textAlign: "center", background: "rgba(220, 38, 38, 0.08)", borderColor: "rgba(220, 38, 38, 0.2)" }}>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ background: "var(--color-accent-primary)", borderRadius: "var(--radius-lg)" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10.5L8 14.5L16 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="display-xl mb-2">Enquiry received.</h3>
                <p className="body-base text-neutral-400">We will respond within 24 hours.</p>
              </div>
            ) : (
              <form
                id="enquiry"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                noValidate
              >
                <datalist id="indian-cities">
                  {INDIAN_CITIES.map((city) => <option key={city} value={city} />)}
                </datalist>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="input-label" htmlFor="enq-name">Full Name *</label>
                    <input
                      id="enq-name"
                      className="input"
                      type="text"
                      required
                      placeholder="Rajesh Kumar"
                      value={form.name}
                      onChange={set("name")}
                    />
                  </div>
                  <div>
                    <label className="input-label" htmlFor="enq-phone">Mobile Number *</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500 font-medium select-none">
                        +91
                      </span>
                      <input
                        id="enq-phone"
                        className="input"
                        style={{ paddingLeft: "44px" }}
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={set("phone")}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="input-label" htmlFor="enq-city">City</label>
                    <input
                      id="enq-city"
                      className="input"
                      type="text"
                      placeholder="Delhi"
                      value={form.city}
                      onChange={set("city")}
                      list="indian-cities"
                    />
                  </div>
                  <div>
                    <label className="input-label" htmlFor="enq-product">Model of Interest</label>
                    <select id="enq-product" className="input" value={form.product} onChange={set("product")}>
                      <option value="">Select model</option>
                      {PRODUCT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="input-label" htmlFor="enq-type">Enquiry Type *</label>
                  <select id="enq-type" className="input" required value={form.type} onChange={set("type")}>
                    <option value="">Select type</option>
                    {ENQUIRY_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="input-label" htmlFor="enq-message">Message</label>
                  <textarea
                    id="enq-message"
                    className="input"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={set("message")}
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  Submit Enquiry
                </button>
                <p className="text-center text-neutral-500 text-xs">
                  We do not share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}