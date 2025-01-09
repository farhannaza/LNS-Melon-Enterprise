import { Truck, Award, Leaf } from 'lucide-react'

const features = [
  {
    icon: <Truck size={48} />,
    title: 'Swift Delivery',
    description: 'From our fields to your table in record time, ensuring peak freshness.'
  },
  {
    icon: <Award size={48} />,
    title: 'Unmatched Quality',
    description: 'Only the finest melons make the cut, guaranteeing a superior taste experience.'
  },
  {
    icon: <Leaf size={48} />,
    title: 'Eco-Friendly Farming',
    description: 'Sustainably grown with love for both you and the environment.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Why Choose LNS Melon?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105">
              <div className="text-green-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

