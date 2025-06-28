// src/pages/BenefitsPage.tsx
import React from 'react';

const benefitsData = [
  {
    title: 'Pure & Natural',
    description: 'Our fragrances are crafted from the finest botanical extracts, free from harsh chemicals and synthetic additives.',
    image: '/benefit-pure.png', // Add this image to your public folder
  },
  {
    title: 'Long-Lasting Aroma',
    description: 'Experience scents that linger beautifully throughout the day, leaving a memorable impression.',
    image: '/benefit-lasting.png', // Add this image to your public folder
  },
  {
    title: 'Ethically Sourced',
    description: 'We are committed to sustainable and responsible sourcing, ensuring fair practices and environmental care.',
    image: '/benefit-ethical.png', // Add this image to your public folder
  },
  {
    title: 'Wellness Benefits',
    description: 'Beyond fragrance, our essential oil blends are known for their therapeutic properties, enhancing mood and well-being.',
    image: '/benefit-wellness.png', // Add this image to your public folder
  },
];

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-libre-baskerville font-bold text-center mb-8 animate-fadeIn">
          The Arova Difference
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto opacity-90 mb-12 animate-fadeIn animation-delay-200">
          Discover why Arova stands apart. Our commitment to quality, purity, and ethical practices shines through every bottle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-24 h-24 object-contain mb-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  (e.target as HTMLImageElement).alt = 'Image not available';
                }}
              />
              <h2 className="text-2xl font-libre-baskerville font-bold text-arova-green-dark mb-3">
                {benefit.title}
              </h2>
              <p className="text-arova-green-dark text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;