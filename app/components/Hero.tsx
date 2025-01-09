'use client'

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { smoothScroll } from '../utils/smoothScroll'

export default function Hero() {
  return (
    <section id="hero" className="relative bg-cover bg-center min-h-screen flex items-center" style={{backgroundImage: "url('/melon.png?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/60 to-yellow-500/60"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">Fresh Melons, Delivered to You</h1>
          <p className="text-xl mb-8 text-white text-shadow-md">Experience the sweetness of our premium melons, grown with care and delivered with love.</p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-green-100" asChild>
            <Link href="#products" onClick={smoothScroll}>Discover Our Melons</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Add these classes to your global CSS file
/*
.text-shadow-lg {
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.text-shadow-md {
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
*/

