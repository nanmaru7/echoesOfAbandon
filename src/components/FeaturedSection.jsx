import ProductCard from './ProductCard'

export default function FeaturedSection({ products }) {
  return (
    <section className="py-24 sm:py-16 bg-bg-primary" id="shop">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-4">
        <div className="text-center mb-16">
          <span className="font-accent text-xs text-accent uppercase tracking-[0.3em] block mb-4">
            Featured
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium uppercase leading-tight tracking-wide text-text-primary mb-4">
            Bestselling Pieces
          </h2>
          <p className="text-sm text-text-secondary max-w-[650px] mx-auto leading-relaxed">
            Our most haunting works, chosen by collectors who understand the
            beauty in abandonment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
