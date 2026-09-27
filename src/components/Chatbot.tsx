import { useState, useRef, useEffect } from 'react'

interface Message {
  from: 'bot' | 'user'
  text: string
}

interface ChatbotProps {
  onTestRide: () => void
}

type Flow = 'initial' | 'choose' | 'compare' | 'range' | 'dealer' | 'done'

const quickReplies: { label: string; flow: Flow }[] = [
  { label: 'Help me choose', flow: 'choose' },
  { label: 'Compare models', flow: 'compare' },
  { label: 'Range & charging', flow: 'range' },
  { label: 'Book a test ride', flow: 'done' },
  { label: 'Dealer enquiry', flow: 'dealer' },
]

const choiceReplies: { label: string; flow: Flow }[] = [
  { label: 'Maximum range', flow: 'done' },
  { label: 'Daily commuting', flow: 'done' },
  { label: 'Performance', flow: 'done' },
  { label: 'Budget', flow: 'done' },
]

const flowResponses: Record<string, { text: string; next?: 'choices' }> = {
  choose: {
    text: "Great! Let me help you find the right Prakriti EV. What matters most to you?",
    next: 'choices',
  },
  compare: {
    text: "Our models each serve a different rider. The Defender offers 140 km range, the Loader is built for cargo, the Glider is the urban choice at 100 km, and the Cruiser/Explorer/Phantom are our performance scooters. Which would you like to know more about?",
  },
  range: {
    text: "The Defender leads with 140 km per charge (4-hour full charge). The Loader achieves 120 km, and the Glider offers 100 km. All use lithium-ion battery systems with IP67 water resistance.",
  },
  dealer: {
    text: "We have authorised dealers across India. Visit our Dealership section above to find your nearest showroom or submit a dealer enquiry.",
  },
  done: {
    text: "Based on what you've shared, I would recommend booking a test ride at your nearest dealership — it's the best way to find your perfect EV. Shall I help you with that?",
  },
  'Maximum range': { text: "The Defender is your ideal choice — 140 km range, dual battery system, EABS braking. Built for riders who commute long distances daily without charging anxiety." },
  'Daily commuting': { text: "The Glider is a fantastic daily companion — nimble in city traffic, 100 km range (more than enough for most daily commutes), and a sleek design. Would you like to book a test ride?" },
  'Performance': { text: "The Defender leads on performance — EABS smart braking, 12-inch alloy wheels, hill assist, NFC lock and dual battery system. It is our most fully-featured model." },
  'Budget': { text: "All Prakriti EV models are competitively priced for the Indian market. I recommend visiting your nearest dealer for current pricing and finance options. Shall I help you find a dealer?" },
}

export default function Chatbot({ onTestRide }: ChatbotProps) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Hi! I'm Prakriti Assist 👋 Looking for the right electric vehicle?" },
  ])
  const [flow, setFlow] = useState<Flow>('initial')
  const [showChoices, setShowChoices] = useState(false)
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendBotMessage = (text: string, delay = 900) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { from: 'bot', text }])
    }, delay)
  }

  const handleQuickReply = (label: string, nextFlow: Flow) => {
    setMessages((prev) => [...prev, { from: 'user', text: label }])
    setShowChoices(false)

    if (nextFlow === 'done' || label === 'Book a test ride') {
      sendBotMessage("Perfect! I'm opening the test ride booking form for you now.", 700)
      setTimeout(() => {
        onTestRide()
        setFlow('done')
      }, 1200)
      return
    }

    const resp = flowResponses[nextFlow] || flowResponses[label]
    if (resp) {
      sendBotMessage(resp.text)
      if (resp.next === 'choices') {
        setTimeout(() => setShowChoices(true), 1200)
      }
    }
    setFlow(nextFlow)
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {!open && (
          <div className="card text-white text-xs font-medium px-3 py-1.5 pointer-events-none animate-pulse" style={{ background: "rgba(10,10,10,0.9)", borderColor: "var(--color-border-subtle)" }}>
            Need help choosing an EV?
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-icon btn-primary w-12 h-12 sm:w-13 sm:h-13"
          aria-label="Open Prakriti Assist"
          style={{ width: 52, height: 52 }}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed bottom-[68px] right-4 z-50 w-[calc(100vw-32px)] sm:w-[360px] card border-[var(--color-border-subtle)] shadow-2xl transition-all duration-300 origin-bottom-right ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        <div className="bg-[var(--color-bg-secondary)] px-4 py-3 flex items-center gap-3 border-b" style={{ borderColor: "var(--color-border-subtle)" }}>
          <div className="w-8 h-8 bg-[var(--color-accent-primary)] flex items-center justify-center rounded-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-white text-sm">Prakriti Assist</div>
            <div className="label-xs-accent">Your EV guide</div>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
        </div>

        <div className="h-64 sm:h-72 overflow-y-auto p-3 space-y-2 bg-[var(--color-bg-secondary)]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[82%] px-3 py-2 text-sm leading-relaxed ${msg.from === 'bot'
                  ? 'bg-[var(--color-bg-card)] border text-white'
                  : 'bg-[var(--color-accent-primary)] text-white'}`}
                style={{ borderColor: "var(--color-border-subtle)" }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-[var(--color-bg-card)] border px-3 py-2 flex gap-1" style={{ borderColor: "var(--color-border-subtle)" }}>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t p-2 bg-[var(--color-bg-secondary)]" style={{ borderColor: "var(--color-border-subtle)" }}>
          {flow === 'initial' && (
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((r) => (
                <button
                  key={r.label}
                  onClick={() => handleQuickReply(r.label, r.flow)}
                  className="btn btn-ghost btn-sm"
                >
                  {r.label}
                </button>
              ))}
            </div>
          )}

          {showChoices && (
            <div className="flex flex-wrap gap-2 mt-2">
              {choiceReplies.map((r) => (
                <button
                  key={r.label}
                  onClick={() => handleQuickReply(r.label, r.flow)}
                  className="btn btn-ghost btn-sm"
                >
                  {r.label}
                </button>
              ))}
            </div>
          )}

          {flow !== 'initial' && !showChoices && (
            <button
              onClick={() => {
                setFlow('initial')
                setShowChoices(false)
              }}
              className="label-xs-accent mt-2 block w-full text-left"
            >
              ← Back to menu
            </button>
          )}
        </div>
      </div>
    </>
  )
}