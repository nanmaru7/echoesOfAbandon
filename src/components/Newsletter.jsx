import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-4">
        <div className="relative z-10 text-center max-w-[500px] mx-auto">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium text-text-primary mb-4">
            Enter the Void
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Subscribe for exclusive drops, early access, and a 10% discount on
            your first order.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded mb-4">
              <svg
                className="text-emerald-500 shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-emerald-500 text-[0.95rem]">
                Welcome to the void. Check your inbox.
              </span>
            </div>
          ) : (
            <form
              className="flex gap-3 mb-4 sm:flex-col"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 bg-bg-primary border border-border rounded-none text-text-primary text-base focus:outline-none focus:border-accent-cyan transition-colors duration-300 placeholder:text-text-muted"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-accent-cyan text-bg-primary rounded-none hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300 sm:w-full"
              >
                Subscribe
              </button>
            </form>
          )}
          <span className="text-sm text-text-muted">
            No spam. Unsubscribe anytime.
          </span>
        </div>
      </div>
    </section>
  )
}
