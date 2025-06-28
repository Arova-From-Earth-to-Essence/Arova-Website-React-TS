// src/pages/OrderConfirmationPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import type { CartItem } from '../types'; // Re-use CartItem for order details

// Define a type for your stored order
interface OrderDetails {
  id: string;
  date: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    email: string;
  };
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
}

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    if (!orderId) {
      navigate('/'); // Redirect to home if no orderId
      return;
    }

    const storedOrders: OrderDetails[] = JSON.parse(localStorage.getItem('arova_orders') || '[]');
    const foundOrder = storedOrders.find(o => o.id === orderId);

    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      // Order not found, redirect or show error
      navigate('/'); // Or navigate to a "order not found" page
    }
  }, [orderId, navigate]);

  if (!order) {
    return (
      <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 flex items-center justify-center">
        <p className="text-xl">Loading order details or order not found...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 my-8 text-center">
        <CheckCircleIcon className="w-20 h-20 text-green-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-libre-baskerville font-bold mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-xl text-gray-700 mb-8">Thank you for your purchase!</p>

        <div className="text-left max-w-2xl mx-auto mb-10 p-6 bg-arova-beige-medium rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-arova-green-dark mb-4">Order Details</h2>
          <p className="text-lg mb-2"><strong>Order ID:</strong> {order.id}</p>
          <p className="text-lg mb-2"><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
          <p className="text-lg mb-2"><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          <p className="text-lg mb-2"><strong>Status:</strong> {order.status}</p>

          <h3 className="text-xl font-bold text-arova-green-dark mt-6 mb-3">Shipping To:</h3>
          <p className="text-lg">{order.customerInfo.firstName} {order.customerInfo.lastName}</p>
          <p className="text-lg">{order.customerInfo.address}</p>
          <p className="text-lg">{order.customerInfo.city}, {order.customerInfo.state} {order.customerInfo.zip}</p>
          <p className="text-lg">{order.customerInfo.country}</p>
          <p className="text-lg">Phone: {order.customerInfo.phone}</p>
          <p className="text-lg">Email: {order.customerInfo.email}</p>

          <h3 className="text-xl font-bold text-arova-green-dark mt-6 mb-3">Items Purchased:</h3>
          <ul className="list-disc list-inside space-y-2">
            {order.items.map(item => (
              <li key={item.id} className="flex justify-between text-lg">
                <span>{item.name} (x{item.quantity})</span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/shop"
          className="bg-arova-green-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-arova-green-light transition-colors duration-300 shadow-md"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;