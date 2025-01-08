'use client'

import Link from 'next/link'
import { MilkIcon as Melon } from 'lucide-react'
import CartDisplay from './CartDisplay'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { smoothScroll } from '../utils/smoothScroll'

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-green-600 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Melon size={32} className="text-white" />
            <span className="text-xl font-bold text-white">LNS Melon Enterprise</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><Button variant="link" asChild><Link href="#hero" onClick={smoothScroll} className="text-white hover:text-green-200">Home</Link></Button></li>
              <li><Button variant="link" asChild><Link href="#features" onClick={smoothScroll} className="text-white hover:text-green-200">Features</Link></Button></li>
              <li><Button variant="link" asChild><Link href="#testimonials" onClick={smoothScroll} className="text-white hover:text-green-200">Testimonials</Link></Button></li>
              <li><Button variant="link" asChild><Link href="#faq" onClick={smoothScroll} className="text-white hover:text-green-200">FAQ</Link></Button></li>
              <li><Button variant="link" asChild><Link href="#contact" onClick={smoothScroll} className="text-white hover:text-green-200">Contact</Link></Button></li>
            </ul>
            <CartDisplay />
          </nav>
        </div>
      </div>
    </header>
  )
}

