'use client'

import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const products = [
  { 
    id: 1, 
    name: 'Sweet Honeydew', 
    price: 5.99, 
    image: '/honeydew.jpg',
    description: 'Indulge in the lush sweetness of our Sweet Honeydew, grown to perfection for a juicy delight.'
  },
  { 
    id: 2, 
    name: 'Juicy Watermelon', 
    price: 7.99, 
    image: '/juicy.jpg',
    description: 'Refresh your senses with our Juicy Watermelon, bursting with crisp, hydrating flavors.'
  },
  { 
    id: 3, 
    name: 'Fragrant Cantaloupe', 
    price: 6.99, 
    image: '/cantalop.jpg',
    description: 'Delight in the fragrant aroma and smooth taste of our premium Cantaloupe.'
  },
]

export default function Products() {
  const { addToCart } = useCart()
  const [activeProduct, setActiveProduct] = useState(products[0])

  return (
    <section id="products" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Our Melons</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <Image 
              src={activeProduct.image} 
              alt={activeProduct.name} 
              className="rounded-lg shadow-xl"
              width={600}
              height={600}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">{activeProduct.name}</h3>
            <p className="text-xl mb-4">RM{activeProduct.price.toFixed(2)}</p>
            <p className="mb-6">{activeProduct.description}</p>
            <Button onClick={() => addToCart({ ...activeProduct, quantity: 1 })} className="bg-green-600 text-white hover:bg-green-700">
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {products.map((product) => (
            <Button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              variant={activeProduct.id === product.id ? "default" : "outline"}
              className={activeProduct.id === product.id ? "bg-green-600 text-white" : "text-green-600 border-green-600"}
            >
              {product.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
