// src/components/HeroSection.tsx
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE

const HeroSection: React.FC = () => {
  return (
    <section className="bg-arova-beige-light text-arova-green-dark py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 flex flex-col items-center text-center">
        <div className="relative z-10 w-full max-w-4xl mx-auto mb-12 animate-fadeIn">
          <p className="text-lg md:text-xl mb-3 font-semibold text-arova-green-dark">
            🌿 PREMIUM FRAGRANCE OILS
          </p>
          <h1 className="font-libre-baskerville text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="font-bold">Arova</span> - <em className="italic font-normal">From Earth to Essence</em>
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Crafted from the finest botanical ingredients and inspired by nature's purest rhythms, our fragrance oils are born from sustainable farms, refined through artisanal blending, and perfected through intentional curation. Each drop captures the luxurious essence of fine perfumery, designed to elevate your daily rituals and express your unique personality through scent.
          </p>
          <Button as={Link} to="/shop" variant="primary" size="md">
            Discover Our Blends
          </Button>
        </div>
      </div>

      <div className="relative z-10 w-full mt-8 overflow-hidden">
        <img
          src="/hero.jpg" // Confirm hero.jpg is in your public folder
          alt="Arova Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;