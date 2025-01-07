import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">LNS Melon Enterprise</h3>
            <p>Delivering sweetness since 2023</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-200"><Facebook /></a>
            <a href="#" className="hover:text-green-200"><Twitter /></a>
            <a href="#" className="hover:text-green-200"><Instagram /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} LNS Melon Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

