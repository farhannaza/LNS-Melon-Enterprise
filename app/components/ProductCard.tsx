'use client'

import { Button } from "@/components/ui/button"
import { useCart } from '../contexts/CartContext'
import Image from 'next/image'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover" 
        width={500} 
        height={192} // Set height to maintain aspect ratio based on the class styling
        objectFit="cover" // Ensure the image fits the design
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">RM{price.toFixed(2)}</p>
        <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
      </div>
    </div>
  )
}
