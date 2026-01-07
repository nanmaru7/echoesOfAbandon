export default function Footer() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="pt-16 pb-8 bg-bg-primary border-t border-border">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-flex flex-col mb-4 no-underline"
              onClick={e => scrollToSection(e, 'hero')}
            >
              <span className="font-serif text-xl font-medium text-text-primary tracking-wider">
                Echoes
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-accent-cyan -mt-1">
                of Abandon
              </span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-[280px]">
              Capturing the haunting beauty of liminal spaces and abandoned
              places through art.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-text-muted hover:text-accent-cyan transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-text-muted hover:text-accent-cyan transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-text-muted hover:text-accent-cyan transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"></path>
                  <path d="M10 16l-1 4"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-[0.1em] mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#prints"
                  onClick={e => scrollToSection(e, 'prints')}
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Art Prints
                </a>
              </li>
              <li>
                <a
                  href="#canvas"
                  onClick={e => scrollToSection(e, 'canvas')}
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Canvas Art
                </a>
              </li>
              <li>
                <a
                  href="#drinkware"
                  onClick={e => scrollToSection(e, 'drinkware')}
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Drinkware
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-[0.1em] mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-[0.1em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={e => scrollToSection(e, 'about')}
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted text-sm no-underline hover:text-text-primary transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-text-muted text-sm">
            &copy; 2026 Echoes of Abandon. All rights reserved.
          </p>
          <div className="flex gap-3">
            <span className="px-3 py-1.5 bg-bg-secondary border border-border rounded text-[0.7rem] font-semibold text-text-muted uppercase">
              Visa
            </span>
            <span className="px-3 py-1.5 bg-bg-secondary border border-border rounded text-[0.7rem] font-semibold text-text-muted uppercase">
              MC
            </span>
            <span className="px-3 py-1.5 bg-bg-secondary border border-border rounded text-[0.7rem] font-semibold text-text-muted uppercase">
              Amex
            </span>
            <span className="px-3 py-1.5 bg-bg-secondary border border-border rounded text-[0.7rem] font-semibold text-text-muted uppercase">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
