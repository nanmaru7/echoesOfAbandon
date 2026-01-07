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
          <span className="font-mono text-[0.7rem] text-accent-cyan uppercase tracking-widest">
            {getCategoryLabel(product.category)}
          </span>
        )}
        <h3 className="font-serif text-lg sm:text-base font-medium text-text-primary my-2">
          {product.name}
        </h3>
        <p className="text-sm text-text-muted mb-4">{product.description}</p>
        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-stretch sm:gap-3">
          <span className="font-mono text-lg font-bold text-text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="bg-transparent border-2 border-accent-cyan text-text-secondary px-4 py-2 text-xs font-semibold cursor-pointer hover:bg-accent-cyan hover:border-accent-cyan hover:text-bg-primary transition-all duration-300 sm:w-full sm:text-center rounded-none"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
