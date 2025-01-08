import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

