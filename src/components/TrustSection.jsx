export default function TrustSection() {
  const trustItems = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      ),
      title: 'Secure Checkout',
      description: '256-bit SSL encryption for safe payments',
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      title: 'Free Shipping',
      description: 'On all orders over $50 within the US',
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-3.87a3 3 0 0 1 6 0V19z"></path>
          <line x1="12" y1="12" x2="12" y2="15"></line>
        </svg>
      ),
      title: 'Quality Guarantee',
      description: "30-day returns if you're not satisfied",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: 'Support',
      description: 'Questions? We respond within 24 hours',
    },
  ]

  return (
    <section className="py-16 bg-bg-primary border-y border-border">
      <div className="max-w-350 mx-auto px-8 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center p-6 md:p-4">
              <div className="mb-4 text-accent flex justify-center">{item.icon}</div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
