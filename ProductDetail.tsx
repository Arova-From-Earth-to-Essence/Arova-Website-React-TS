// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useAppContext } from '../context/AppContext'; // Import useAppContext
import { HeartIcon as OutlineHeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'; // For buttons
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid'; // For filled wishlist icon

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart, addToWishlist, removeFromWishlist, isItemInWishlist } = useAppContext(); // Use context actions

  const inWishlist = product ? isItemInWishlist(product.id) : false;

  if (!product) {
    return (
      <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-xl">The product you are looking for does not exist.</p>
        <p className="text-xl">Please check the URL or browse our <a href="/shop" className="text-arova-green-dark underline hover:text-arova-green-light">shop page</a>.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Add a confirmation message or animation
    alert(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      alert(`${product.name} removed from wishlist.`);
    } else {
      addToWishlist(product);
      alert(`${product.name} added to wishlist!`);
    }
  };

  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row my-8">

        {/* Product Image Section */}
        <div className="lg:w-1/2 p-4 flex items-center justify-center bg-arova-beige-medium">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.jpg';
              (e.target as HTMLImageElement).alt = 'Image not available';
            }}
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-libre-baskerville font-bold text-arova-green-dark mb-2">
              {product.name}
            </h1>
            <p className="text-arova-green-light text-xl italic mb-6">
              "{product.tagline}"
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-arova-green-dark mb-2">Vibe:</h3>
              <div className="flex flex-wrap gap-2">
                {product.vibe.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-arova-beige-medium text-arova-green-dark text-sm px-3 py-1 rounded-full border border-arova-green-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price and Add to Cart Section */}
          <div className="mt-auto pt-6 border-t border-gray-200 flex items-center justify-between">
            <span className="text-4xl font-libre-baskerville font-bold text-arova-green-dark">
              ${product.price.toFixed(2)}
            </span>

            <div className="flex items-center space-x-4">
              {/* Wishlist Button */}
              <button
                onClick={handleToggleWishlist}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  inWishlist ? 'bg-arova-beige-medium text-arova-green-dark' : 'text-gray-500 hover:bg-arova-beige-medium hover:text-arova-green-dark'
                }`}
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                {inWishlist ? (
                  <SolidHeartIcon className="w-7 h-7" />
                ) : (
                  <OutlineHeartIcon className="w-7 h-7" />
                )}
              </button>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center space-x-2 bg-arova-green-dark text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-arova-green-light transition-colors duration-300 shadow-md"
              >
                <ShoppingBagIcon className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;