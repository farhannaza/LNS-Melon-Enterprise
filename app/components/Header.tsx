'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MilkIcon as Melon } from 'lucide-react'
import CartDisplay from './CartDisplay'
import { Button } from "@/components/ui/button"
import { smoothScroll } from '../utils/smoothScroll'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Melon size={32} className={`${isScrolled ? 'text-green-700' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-green-700' : 'text-white'}`}>LNS Melon</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="link" asChild>
              <Link href="#features" onClick={smoothScroll} className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-green-600`}>Features</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#products" onClick={smoothScroll} className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-green-600`}>Products</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#testimonials" onClick={smoothScroll} className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-green-600`}>Testimonials</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#faq" onClick={smoothScroll} className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-green-600`}>FAQ</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#contact" onClick={smoothScroll} className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-green-600`}>Contact</Link>
            </Button>
          </nav>
          <CartDisplay />
        </div>
      </div>
    </header>
  )
}

