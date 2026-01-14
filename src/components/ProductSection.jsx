import ProductCard from './ProductCard'

export default function ProductSection({
  id,
  tag,
  title,
  subtitle,
  products,
  altBg = false,
}) {
  return (
    <section
      className={`py-24 md:py-16 ${altBg ? 'bg-bg-secondary' : ''}`}
      id={id}
    >
      <div className="max-w-350 mx-auto px-8 sm:px-4">
        <div className="text-center mb-16">
          <span className="font-accent text-xs text-accent uppercase tracking-[0.3em] block mb-4">
            {tag}
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium uppercase leading-tight tracking-wide text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-sm text-text-secondary max-w-[650px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider bg-transparent text-accent border-2 border-accent rounded hover:bg-accent hover:text-bg-primary transition-all duration-300"
          >
            View All {title}
          </a>
        </div>
      </div>
    </section>
  )
}
