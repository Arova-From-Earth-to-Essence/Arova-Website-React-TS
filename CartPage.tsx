// src/pages/CartPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useAppContext();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 my-8">
        <h1 className="text-4xl md:text-5xl font-libre-baskerville font-bold text-center mb-10">
          Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-xl text-gray-700 mb-6">Your cart is currently empty.</p>
            <Link
              to="/shop"
              className="bg-arova-green-dark text-white px-6 py-3 rounded-full font-medium hover:bg-arova-green-light transition-colors duration-300"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-sm">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-arova-green-dark">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="p-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="mx-2 text-lg font-medium">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="p-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-xl font-bold text-arova-green-dark mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                      aria-label="Remove item"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1 bg-arova-beige-medium p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-arova-green-dark">Order Summary</h2>
                <div className="flex justify-between text-lg mb-2">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg mb-4 border-b pb-4 border-gray-300">
                  <span>Shipping:</span>
                  <span>Free</span> {/* Placeholder */}
                </div>
                <div className="flex justify-between text-2xl font-bold text-arova-green-dark">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-6 w-full bg-arova-green-dark text-white px-6 py-3 rounded-full text-lg font-semibold text-center hover:bg-arova-green-light transition-colors duration-300 shadow-md"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;