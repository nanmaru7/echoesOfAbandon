import './Hero.css'

export default function Hero() {
  const scrollToShop = e => {
    e.preventDefault()
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = e => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-tagline">Where Memory Fades Into Art</p>
        <h1 className="hero-title">
          Capture the Beauty of
          <br />
          <span className="text-accent-cyan italic">Forgotten Spaces</span>
        </h1>
        <p className="hero-description">
          Hauntingly beautiful prints, canvas art, and drinkware inspired by
          liminal spaces, abandoned architecture, and the nostalgic aesthetics
          of places left behind.
        </p>
        <div className="hero-cta">
          <a
            href="#shop"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-accent-cyan text-bg-primary rounded-none hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300"
            style={{ boxShadow: '0 5px 20px rgba(120,201,207,0.3)' }}
            onClick={scrollToShop}
          >
            Explore Collection
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-transparent text-text-primary border-2 border-accent-cyan rounded-none hover:bg-accent-cyan/10 transition-all duration-300"
            onClick={scrollToAbout}
          >
            Our Story
          </a>
        </div>
        <div className="hero-features">
          <div className="flex items-center gap-2 text-text-muted text-sm md:text-xs">
            <svg
              className="text-accent-cyan opacity-80"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm md:text-xs">
            <svg
              className="text-accent-cyan opacity-80"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>Free Shipping $50+</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-sm md:text-xs">
            <svg
              className="text-accent-cyan opacity-80"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>US Based</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </header>
  )
}
