import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Izwani Husainani",
    role: "Melon Enthusiast",
    content: "LNS Melon delivers the sweetest, juiciest melons I've ever tasted. Their commitment to quality is unmatched!",
    rating: 5
  },
  {
    name: "C'hng Jun Bin",
    role: "Restaurant Owner",
    content: "As a restaurant owner, I rely on fresh, high-quality produce. LNS Melon never disappoints with their consistent quality and timely deliveries.",
    rating: 5
  },
  {
    name: "Abu Kasim",
    role: "Health Coach",
    content: "I always recommend LNS Melon to my clients. Their melons are not only delicious but also packed with nutrients. A great addition to any healthy diet!",
    rating: 4
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="mb-4 italic">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

