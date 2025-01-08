import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Testimonials/>
          <FAQ/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

