import { useCart } from '../hooks/useCart'
import './ProductCard.css'

export default function ProductCard({ product, featured = false }) {
  const { addToCart } = useCart()

  const getCategoryLabel = category => {
    switch (category) {
      case 'canvas':
        return 'Canvas Print'
      case 'prints':
        return 'Art Print'
      case 'drinkware':
        return 'Ceramic'
      default:
        return category
    }
  }

  return (
    <article className={`product-card ${featured ? 'featured-card' : ''}`}>
      <div className="product-image">
        <div className="product-placeholder" style={{ '--hue': product.hue }}>
          <span className="font-serif text-xl text-white/15 text-center whitespace-pre-line leading-tight z-10">
            {product.name.split(' ').slice(0, 2).join('\n')}
          </span>
        </div>
        <div className="product-overlay">
          <button className="quick-add" onClick={() => addToCart(product)}>
            Quick Add
          </button>
        </div>
        {product.badge && (
          <span className={`product-badge ${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-4">
        {featured && (
          <span className="font-accent text-[0.65rem] text-accent uppercase tracking-[0.25em]">
            {getCategoryLabel(product.category)}
          </span>
        )}
        <h3 className="font-display text-xl sm:text-lg font-medium text-text-primary my-2 uppercase tracking-wide">
          {product.name}
        </h3>
        <p className="text-xs text-text-muted mb-4 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-stretch sm:gap-3">
          <span className="font-accent text-lg font-bold text-text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="bg-transparent border-2 border-border text-text-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-accent hover:border-accent hover:text-bg-primary transition-all duration-300 sm:w-full sm:text-center"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
