// src/pages/CollectionPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CollectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-libre-baskerville font-bold text-center mb-12 animate-fadeIn">
        Shop by Collection
      </h1>
      <p className="text-xl text-center max-w-3xl mx-auto opacity-90 mb-12 animate-fadeIn animation-delay-200">
        Discover fragrances crafted for every essence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Men's Collection Card */}
        <Link to="/shop?category=men" className="block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src="/collection-men.jpg" // Placeholder image for men's collection
                alt="Men's Fragrances"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  (e.target as HTMLImageElement).alt = 'Image not available';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-4xl font-libre-baskerville font-bold">Men's</h2>
              </div>
            </div>
          </div>
        </Link>

        {/* Women's Collection Card */}
        <Link to="/shop?category=women" className="block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-80 overflow-hidden">
              <img
                src="/collection-women.jpg" // Placeholder image for women's collection
                alt="Women's Fragrances"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  (e.target as HTMLImageElement).alt = 'Image not available';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-4xl font-libre-baskerville font-bold">Women's</h2>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <Link to="/shop" className="text-arova-green-dark text-lg underline hover:text-arova-green-light transition-colors duration-200">
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default CollectionPage;