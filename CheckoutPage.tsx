// src/pages/CheckoutPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import type { CartItem } from '../types';

const CheckoutPage: React.FC = () => {
  const { cart, removeFromCart } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'India', // Default country
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 0 ? 0.00 : 0.00; // Free shipping for simplicity, adjust as needed
  const total = subtotal + shippingCost;

  useEffect(() => {
    // If cart is empty, redirect to cart page
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being typed into
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    if (!formData.city) newErrors.city = 'City is required.';
    if (!formData.state) newErrors.state = 'State/Province is required.';
    if (!formData.zip) newErrors.zip = 'Zip/Postal Code is required.';
    if (!formData.country) newErrors.country = 'Country is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && cart.length > 0) {
      // Simulate order placement
      const orderDetails = {
        id: `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Unique order ID
        date: new Date().toISOString(),
        customerInfo: formData,
        items: cart,
        subtotal: subtotal,
        shipping: shippingCost,
        total: total,
        status: 'Pending',
      };

      // Save order to localStorage (for a simple "order history" simulation)
      const existingOrders = JSON.parse(localStorage.getItem('arova_orders') || '[]');
      localStorage.setItem('arova_orders', JSON.stringify([...existingOrders, orderDetails]));

      // Clear the cart
      cart.forEach(item => removeFromCart(item.id)); // Dispatch individual remove actions

      // Redirect to order confirmation page
      navigate(`/order-confirmation/${orderDetails.id}`);
    } else if (cart.length === 0) {
      alert("Your cart is empty. Please add items before checking out.");
      navigate('/shop');
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 my-8">
        <h1 className="text-4xl md:text-5xl font-libre-baskerville font-bold text-center mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Information Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-arova-green-dark">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Zip/Postal Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-arova-green-light focus:border-arova-green-light"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Payment Section - Simplified */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-arova-green-dark">Payment Method</h2>
                <div className="bg-arova-beige-medium p-4 rounded-lg text-gray-800">
                  <p className="font-semibold mb-2">Payment Gateway (Simulated)</p>
                  <p className="text-sm">
                    In a real application, this section would integrate with a payment gateway (e.g., Stripe, PayPal). For now, clicking "Place Order" will simulate a successful transaction.
                  </p>
                </div>
              </div>
            </form> {/* The form needs to wrap the submit button too */}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-arova-beige-medium p-6 rounded-lg shadow-md flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-arova-green-dark">Order Summary</h2>
            <div className="flex-grow">
              {cart.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between items-center mb-2 pb-2 border-b border-gray-300 last:border-b-0">
                  <span className="text-gray-700">{item.name} (x{item.quantity})</span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-400">
              <div className="flex justify-between text-lg mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg mb-2">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-arova-green-dark mt-4">
                <span>Order Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit" // Set type to submit for the form
              onClick={handleSubmit} // Attach onClick to call handleSubmit
              className="mt-8 w-full bg-arova-green-dark text-white px-6 py-3 rounded-full text-lg font-semibold text-center hover:bg-arova-green-light transition-colors duration-300 shadow-md"
              disabled={cart.length === 0} // Disable if cart is empty
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;