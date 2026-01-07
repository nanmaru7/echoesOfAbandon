import { useCart } from '../hooks/useCart'
import './CartSidebar.css'

export default function CartSidebar() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 z-1100 transition-opacity duration-300 ${
          isCartOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <aside className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl font-medium text-text-primary">
            Your Cart
          </h2>
          <button
            className="bg-transparent border-none text-text-secondary cursor-pointer p-2 hover:text-text-primary transition-colors duration-300"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <svg
              className="text-text-muted mb-6 opacity-50"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <p className="font-serif text-xl text-text-primary mb-2">
              Your cart is empty
            </p>
            <span className="text-sm text-text-muted">
              Add some haunting pieces to get started
            </span>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 py-4 border-b border-border last:border-b-0"
                >
                  <div
                    className="cart-item-image"
                    style={{ '--hue': item.hue }}
                  >
                    <span className="font-serif text-2xl text-white/20">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base font-medium text-text-primary mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.name}
                    </h4>
                    <p className="text-xs text-text-muted mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border border-border rounded">
                        <button
                          className="bg-transparent border-none text-text-secondary py-1 px-2 cursor-pointer text-base hover:text-text-primary transition-colors duration-300"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="text-sm text-text-primary min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="bg-transparent border-none text-text-secondary py-1 px-2 cursor-pointer text-base hover:text-text-primary transition-colors duration-300"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="bg-transparent border-none text-text-muted text-xs cursor-pointer hover:text-red-500 transition-colors duration-300"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-mono text-[0.95rem] font-bold text-text-primary shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border bg-bg-secondary">
              <div className="flex justify-between mb-2">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-mono text-xl font-bold text-text-primary">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-text-muted mb-6">
                Shipping calculated at checkout
              </p>
              <button className="w-full mb-3 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-accent-cyan text-bg-primary rounded-none hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300">
                Proceed to Checkout
              </button>
              <button
                className="w-full inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-transparent text-text-primary border border-border rounded hover:border-text-secondary hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
