'use client'

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { smoothScroll } from '../utils/smoothScroll'

export default function Hero() {
  return (
    <section id="hero" className="relative bg-cover bg-center min-h-screen flex items-center" style={{backgroundImage: "url('/melon.png?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-yellow-500/80"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">Savor the Sweetness of Nature's Candy</h1>
          <p className="text-xl mb-8 text-white">Indulge in our premium, hand-picked melons delivered fresh to your doorstep.</p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-green-100" asChild>
            <Link href="#products" onClick={smoothScroll}>Discover Our Melons</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

