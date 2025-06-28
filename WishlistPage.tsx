// src/pages/WishlistPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, addToCart } = useAppContext();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
    alert(`${product.name} moved to cart!`);
  };

  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 my-8">
        <h1 className="text-4xl md:text-5xl font-libre-baskerville font-bold text-center mb-10">
          Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-xl text-gray-700 mb-6">Your wishlist is currently empty.</p>
            <Link
              to="/shop"
              className="bg-arova-green-dark text-white px-6 py-3 rounded-full font-medium hover:bg-arova-green-light transition-colors duration-300"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="relative bg-arova-beige-medium rounded-lg shadow-md overflow-hidden group">
                <Link to={`/product/${item.id}`} className="block">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-4 flex flex-col items-center text-center">
                  <h2 className="text-lg font-semibold text-arova-green-dark mb-1">{item.name}</h2>
                  <p className="text-arova-green-light italic text-sm mb-3">"{item.tagline}"</p>
                  <p className="text-xl font-bold text-arova-green-dark mb-4">${item.price.toFixed(2)}</p>
                  <div className="flex space-x-3 mt-auto">
                    <button
                      onClick={() => handleMoveToCart(item)}
                      className="flex items-center space-x-1 bg-arova-green-dark text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-arova-green-light transition-colors duration-300"
                      aria-label="Move to cart"
                    >
                      <ShoppingBagIcon className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 rounded-full text-arova-green-dark hover:bg-red-100 hover:text-red-600 transition-colors duration-300"
                      aria-label="Remove from wishlist"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;