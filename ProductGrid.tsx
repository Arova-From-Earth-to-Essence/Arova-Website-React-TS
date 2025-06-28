// src/components/ProductGrid.tsx
import ProductCard from './ProductCard'

const products = [
  { name: 'Rose Oil', price: '₹499', image: 'https://source.unsplash.com/300x300/?rose,perfume' },
  { name: 'Oudh Essence', price: '₹599', image: 'https://source.unsplash.com/300x300/?oudh,perfume' },
  { name: 'Sandalwood Oil', price: '₹699', image: 'https://source.unsplash.com/300x300/?sandalwood,perfume' }
]

export default function ProductGrid() {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p, index) => (
          <ProductCard key={index} name={p.name} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  )
}
