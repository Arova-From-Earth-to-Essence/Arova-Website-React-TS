// src/components/CategoriesGrid.tsx
import React from 'react'
import CategoryCard from './CategoryCard'
import Button from './Button'
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE

const CategoriesGrid: React.FC = () => {
  const categories = [
    {
      name: 'Timeless Oudh',
      image: '/category-oudh.jpg', // Path to image in public folder
      description: 'Discover the rich and mystical allure of Oudh.',
      link: '/shop/oudh',
    },
    {
      name: 'Dreamscape Essences',
      image: '/category-dreamscape.jpg', // Path to image in public folder
      description: 'Find your tranquility with calming and serene blends.',
      link: '/shop/dreamscape',
    },
  ]

  return (
    <section id="categories-section" className="py-16 md:py-24 bg-arova-beige-medium">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-libre-baskerville font-bold text-arova-green-dark mb-4">
            SHOP BY CATEGORIES
          </h2>
          <p className="text-arova-green-dark text-lg max-w-2xl mx-auto opacity-90">
            Discover our carefully curated collection of premium essential oils, each blend crafted to
            enhance your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button as={Link} to="/shop" variant="primary" size="md">
            Discover Our Blends
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CategoriesGrid;