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
    <section
      id="dealership"
      className="bg-white"
      style={{ borderTop: "1px solid #E3E7E3" }}
    >
      <div
        ref={ref}
        className={`container-bb py-24 lg:py-32 transition-all duration-700 motion-safe:transition-all ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Dealership info */}
          <div>
            <div className="label-mono-green mb-6">Dealership & Enquiries</div>
            <h2
              className="display-xl text-[#111111] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.0, letterSpacing: "-0.02em" }}
            >
              BUILD YOUR<br />
              BUSINESS WITH<br />
              PRAKRITI.
            </h2>
            <p
              className="body-copy text-[#555B56] mb-10"
              style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "420px" }}
            >
              Whether you are a prospective buyer, fleet operator, or interested in a
              dealership partnership — fill in the form and our team will respond within
              24 hours.
            </p>

            {/* Dealer CTA block */}
            <div
              className="mb-10 p-6"
              style={{
                background: "#EAF5EC",
                border: "1px solid rgba(27,143,58,0.2)",
                borderRadius: "6px",
              }}
            >
              <p
                className="display-xl text-[#12652A] mb-2"
                style={{ fontSize: "18px", lineHeight: 1.2 }}
              >
                Become a Dealer
              </p>
              <p
                className="body-copy text-[#555B56] mb-5"
                style={{ fontSize: "14px", lineHeight: 1.6 }}
              >
                Prakriti is expanding its authorised dealer network across India. Select
                "Dealership" in the enquiry type to begin the conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#enquiry" className="btn btn-green" style={{ fontSize: "13px" }}>
                  Dealer Application
                </a>
                <a href="#" className="btn btn-outline" style={{ fontSize: "13px" }}>
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Contact rows */}
            <div style={{ borderTop: "1px solid #E3E7E3" }}>
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

          {/* Right — Enquiry form */}
          <div>
            {submitted ? (
              <div
                className="text-center p-10"
                style={{
                  background: "#EAF5EC",
                  border: "1px solid rgba(27,143,58,0.25)",
                  borderRadius: "6px",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#1B8F3A", borderRadius: "4px" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10.5L8 14.5L16 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="display-xl text-[#111111] mb-2" style={{ fontSize: "22px" }}>
                  Enquiry received.
                </h3>
                <p className="body-copy text-[#555B56]" style={{ fontSize: "15px" }}>
                  We will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form
                id="enquiry"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <datalist id="indian-cities">
                  {INDIAN_CITIES.map((city) => <option key={city} value={city} />)}
                </datalist>
                <div className="grid sm:grid-cols-2 gap-5">
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
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[14px] text-[#555B56] font-medium select-none">
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
                <div className="grid sm:grid-cols-2 gap-5">
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
                  className="btn btn-green w-full justify-center cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  Submit Enquiry
                </button>
                <p className="text-center text-[#93939F]" style={{ fontSize: "12px" }}>
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
