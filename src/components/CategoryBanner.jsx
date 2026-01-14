import { categories } from '../data/products'
import './CategoryBanner.css'

export default function CategoryBanner() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-bg-secondary">
      <div className="max-w-350 mx-auto px-8 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4">
          {categories.map(category => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="category-card"
              onClick={e => scrollToSection(e, category.id)}
            >
              <div
                className="category-bg"
                style={{ '--hue': category.hue }}
              ></div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-medium uppercase tracking-wide text-text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-xs text-text-secondary mb-6 leading-relaxed">
                  {category.description}
                </p>
                <span className="category-link font-accent uppercase tracking-wider text-xs">Shop {category.name} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
