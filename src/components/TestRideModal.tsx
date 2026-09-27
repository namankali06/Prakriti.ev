import { useState, useEffect } from "react"
import { PRODUCTS } from "../data/products"
import { INDIAN_CITIES } from "../data/cities"
interface TestRideModalProps { onClose: () => void }
export default function TestRideModal({ onClose }: TestRideModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", city: "", model: "", date: "" })
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])
  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-5"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog" aria-modal="true" aria-label="Book Test Ride">
      <div className="relative w-full max-w-md bg-white rounded-2xl max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#E5E7E8]">
          <div>
            <p className="label-mono-green mb-1">Test Ride</p>
            <h2 className="display-xl text-[22px] text-[#111111]">Book your ride.</h2>
          </div>
          <button onClick={onClose} className="btn-icon mt-1 flex-shrink-0" aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        {submitted ? (
          <div className="p-8 sm:p-10 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#1B8F3A] flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10.5L8 14.5L16 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="display-xl text-[20px] text-[#111111] mb-2">Request received.</h3>
            <p className="body-copy text-[14px] text-[#5F6368] mb-8 max-w-[280px]">A Prakriti representative will contact you within 24 hours.</p>
            <button onClick={onClose} className="btn btn-primary text-[14px] cursor-pointer px-8">Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <datalist id="indian-cities">
              {INDIAN_CITIES.map((city) => <option key={city} value={city} />)}
            </datalist>
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Rajesh Kumar", required: true },
              { name: "phone", label: "Mobile Number", type: "tel", placeholder: "+91 98765 43210", required: true },
              { name: "city", label: "City", type: "text", placeholder: "Delhi", required: true },
              { name: "date", label: "Preferred Date", type: "date", placeholder: "", required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="input-label" htmlFor={"tr-" + field.name}>{field.label}{field.required ? " *" : ""}</label>
                <input id={"tr-" + field.name} className="input" type={field.type} placeholder={field.placeholder}
                  required={field.required} value={form[field.name as keyof typeof form]} onChange={set(field.name)}
                  list={field.name === "city" ? "indian-cities" : undefined} />
              </div>
            ))}
            <div>
              <label className="input-label" htmlFor="tr-model">Preferred Model</label>
              <select id="tr-model" className="input" value={form.model} onChange={set("model")}>
                <option value="">Select a model</option>
                {PRODUCTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
            </div>
            <button type="submit" className="btn btn-green w-full justify-center text-[15px] font-medium cursor-pointer">Request Test Ride</button>
            <p className="text-center text-[12px] text-[#93939F]">No obligation. Confirmation within 24 hours.</p>
          </form>
        )}
      </div>
    </div>
  )
}
