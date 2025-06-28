// src/components/ProductCard.tsx
import React from 'react';
import { products, type Product } from '../data/products';
 // Import the Product interface
import { Link } from 'react-router-dom'; // For linking to individual product pages (optional, but good practice)
import Button from './Button'; // Assuming you want a button on each card

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Optional: Fallback for missing images
            (e.target as HTMLImageElement).src = '/placeholder.jpg'; // Create a placeholder.jpg in public
            (e.target as HTMLImageElement).alt = 'Image not available';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-libre-baskerville font-bold text-arova-green-dark mb-2">
            {product.name}
          </h3>
          <p className="text-arova-green-light text-sm italic mb-3">{product.tagline}</p>
          <p className="text-arova-green-dark text-base mb-4 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-arova-green-dark">
            ${product.price.toFixed(2)}
          </span>
          <Button as={Link} to={`/product/${product.id}`} variant="primary" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;