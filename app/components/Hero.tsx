'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { smoothScroll } from '../utils/smoothScroll'

const textShadowStyle = `
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative bg-green-500 text-white h-screen scroll-mt-16 flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/melon.png?height=1080&width=1920')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 1 - (scrollY * 0.002),
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">Fresh Melons, Delivered to You</h1>
        <p className="text-xl mb-8 text-shadow">Experience the sweetness of our premium melons, grown with care and delivered with love.</p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100" asChild>
          <Link href="#features" onClick={smoothScroll}>Explore Our Melons</Link>
        </Button>
      </div>
      <style jsx>{textShadowStyle}</style>
    </section>
  )
}

