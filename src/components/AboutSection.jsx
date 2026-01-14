import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="py-24 md:py-16 bg-bg-secondary" id="about">
      <div className="max-w-350 mx-auto px-8 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="relative order-first lg:order-0">
            <div className="about-placeholder aspect-4/5 md:aspect-video rounded-xl flex items-center justify-center relative overflow-hidden">
              <span className="font-serif text-2xl text-white/10 z-10">
                The Artist
              </span>
            </div>
          </div>
          <div>
            <span className="font-accent text-xs text-accent uppercase tracking-[0.3em] block mb-4">
              Our Story
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium uppercase leading-tight tracking-wide text-text-primary mb-6">
              Finding Beauty in the In-Between
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Echoes of Abandon was born from a fascination with the spaces we
              pass through but rarely pause to observe. The empty hallways after
              hours, the parking garage at 2am, the mall that time forgot.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Each piece in our collection captures that uncanny feeling of
              familiarity mixed with unease—the sensation of being somewhere
              you've been before, yet never quite like this.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              We're a small, independent studio dedicated to bringing these
              liminal moments to life through premium quality prints, canvas
              art, and everyday items that remind you to appreciate the beauty
              in abandonment.
            </p>
            <div className="mt-8 pt-8 border-t border-border">
              <span className="font-serif italic text-lg text-accent">
                — The Echoes Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
