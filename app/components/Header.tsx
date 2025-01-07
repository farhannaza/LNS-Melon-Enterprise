import Link from 'next/link'
import { MilkIcon as Melon } from 'lucide-react'
import CartDisplay from './CartDisplay'

export default function Header() {
  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Melon size={32} />
          <span className="text-xl font-bold">LNS Melon Enterprise</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#products" className="hover:underline">Products</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
          <CartDisplay />
        </nav>
      </div>
    </header>
  )
}

