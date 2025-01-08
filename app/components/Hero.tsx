'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'

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
    <section id="hero" className="relative bg-green-500 text-white min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('melon.png?/placeholder.svg?height=1080&width=1920')",
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Fresh Melons, Delivered to You</h1>
        <p className="text-xl mb-8">Experience the sweetness of our premium melons, grown with care and delivered with love.</p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">
          Explore Our Melons
        </Button>
      </div>
    </section>
  )
}

