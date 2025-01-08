import { Truck, Award, Leaf } from 'lucide-react'
import ProductCard from './ProductCard'

const features = [
  {
    icon: <Truck size={48} />,
    title: 'Fast Delivery',
    description: 'We ensure our melons reach you at peak freshness with our efficient delivery system.'
  },
  {
    icon: <Award size={48} />,
    title: 'Premium Quality',
    description: 'Our melons are carefully selected to meet the highest standards of quality and taste.'
  },
  {
    icon: <Leaf size={48} />,
    title: 'Sustainable Farming',
    description: 'We use eco-friendly farming practices to grow our melons, ensuring sustainability.'
  }
]

const products = [
  { id: 1, name: 'Sweet Honeydew', price: 5.99, image: '/honeydew.jpg?height=200&width=200' },
  { id: 2, name: 'Juicy Watermelon', price: 7.99, image: '/juicy.jpg?height=200&width=200' },
  { id: 3, name: 'Fragrant Cantaloupe', price: 6.99, image: '/cantaloupe.png?height=200&width=200' },
]

export default function Features() {
  return (
    <section id="features" className="min-h-screen flex flex-col justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose LNS Melon Enterprise?</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-green-500 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

