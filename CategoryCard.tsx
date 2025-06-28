// src/components/CategoryCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; // Assuming you want a button on each card

interface CategoryCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.jpg'; // Ensure you have a placeholder.jpg in public
            (e.target as HTMLImageElement).alt = 'Image not available';
          }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-libre-baskerville font-bold text-arova-green-dark mb-2">{name}</h3>
          <p className="text-arova-green-dark text-base mb-4 line-clamp-3">{description}</p>
        </div>
        <div className="mt-4">
          <Button as={Link} to={link} variant="outline" size="sm"> {/* Using outline variant for category card */}
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;