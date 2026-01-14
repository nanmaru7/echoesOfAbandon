import { useState, useEffect } from 'react'
import { useCart } from '../hooks/useCart'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setIsCartOpen, cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-350 mx-auto px-8 sm:px-4 flex items-center justify-between">
        <a
          href="#"
          className="flex flex-col no-underline leading-none"
          onClick={e => scrollToSection(e, 'hero')}
        >
          <span className="font-serif text-2xl font-semibold text-text-primary tracking-wide">
            Echoes
          </span>
          <span className="font-accent text-[0.65rem] text-accent uppercase tracking-[0.2em]">
            of Abandon
          </span>
        </a>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#shop" onClick={e => scrollToSection(e, 'shop')}>
              Shop
            </a>
          </li>
          <li>
            <a href="#prints" onClick={e => scrollToSection(e, 'prints')}>
              Prints
            </a>
          </li>
          <li>
            <a href="#canvas" onClick={e => scrollToSection(e, 'canvas')}>
              Canvas
            </a>
          </li>
          <li>
            <a href="#drinkware" onClick={e => scrollToSection(e, 'drinkware')}>
              Drinkware
            </a>
          </li>
          <li>
            <a href="#about" onClick={e => scrollToSection(e, 'about')}>
              About
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="cart-button relative bg-transparent border-none text-text-primary cursor-pointer p-2 transition-colors duration-300"
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && (
              <span className="cart-count absolute top-0 right-0 text-bg-primary text-[0.65rem] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
