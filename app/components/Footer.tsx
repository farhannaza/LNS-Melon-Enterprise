import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">LNS Melon</h3>
            <p>Delivering sweetness since 2012</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#products" className="hover:underline">Products</Link></li>
              <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            {/* <a href="#" className="hover:text-green-200"><Facebook /></a> */}
            {/* <a href="#" className="hover:text-green-200"><Twitter /></a> */}
            <a href="https://www.instagram.com/lnsmelon666?igsh=YWE4dmdpbWkxczJr&utm_source=qr" className="hover:text-green-200"><Instagram /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} LNS Melon. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

