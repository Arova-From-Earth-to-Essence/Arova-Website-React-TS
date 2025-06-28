// src/components/OfferMarquee.tsx
import React from 'react';
import '../index.css'; // Ensure this CSS is applied for the animation

const OfferMarquee: React.FC = () => {
  const offers = [
    "✨ Exclusive Offer: Get 15% off your first order with code AROVA15! ",
    "🚚 Free Shipping on all orders over $75! ",
    "🎁 Limited Time: Receive a complimentary sample with every purchase! ",
    "🌿 New Summer Collection - Explore now! ",
    "💚 Loyalty Program: Earn points with every purchase! "
  ];

  // Repeat the offers string multiple times to ensure it's long enough to scroll continuously
  const marqueeContent = offers.join(' • '); // Join with a separator
  const repeatedContent = Array(5).fill(marqueeContent).join(' • '); // Repeat the entire string 5 times

  return (
    <div className="bg-arova-green-light py-3 px-0 overflow-hidden relative border-y border-arova-green-dark/20 my-16">
      <div className="marquee whitespace-nowrap text-white text-lg font-medium py-1">
        <span>{repeatedContent}</span>
      </div>
    </div>
  );
};

export default OfferMarquee;