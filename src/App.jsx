import { CartProvider } from './context/CartProvider'
import { products } from './data/products'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedSection from './components/FeaturedSection'
import CategoryBanner from './components/CategoryBanner'
import ProductSection from './components/ProductSection'
import TrustSection from './components/TrustSection'
import AboutSection from './components/AboutSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import Toast from './components/Toast'

function App() {
  const featuredProducts = products.filter(p => p.featured)
  const printProducts = products.filter(
    p => p.category === 'prints' && !p.featured
  )
  const canvasProducts = products.filter(
    p => p.category === 'canvas' && !p.featured
  )
  const drinkwareProducts = products.filter(
    p => p.category === 'drinkware' && !p.featured
  )

  return (
    <CartProvider>
      <div className="grain-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection products={featuredProducts} />
        <CategoryBanner />
        <ProductSection
          id="prints"
          tag="Collection"
          title="Art Prints"
          subtitle="Museum-quality prints on archival paper. Each piece captures the eerie beauty of spaces between moments."
          products={printProducts}
        />
        <ProductSection
          id="canvas"
          tag="Collection"
          title="Canvas Art"
          subtitle="Gallery-wrapped canvas prints ready to transform your space. Each piece arrives ready to hang."
          products={canvasProducts}
          altBg
        />
        <ProductSection
          id="drinkware"
          tag="Collection"
          title="Drinkware"
          subtitle="Start your mornings with a touch of the uncanny. Premium ceramic mugs and cups featuring our signature liminal imagery."
          products={drinkwareProducts}
        />
        <TrustSection />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
      <CartSidebar />
      <Toast />
    </CartProvider>
  )
}

export default App
