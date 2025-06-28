// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  ShoppingBagIcon,
  HeartIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useAppContext } from '../context/AppContext'; // Import useAppContext

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart, wishlist } = useAppContext(); // Use the context

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      window.location.href = '/#contact-us';
    } else {
      const element = document.getElementById('contact-us');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white text-arova-green-dark sticky top-0 z-50 shadow-sm py-3 md:py-5">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo only */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/">
            <img
              src="/logo1.jfif" // Path to your logo in the public folder
              alt="Arova Logo"
              className="h-16 w-auto" // Adjust height as needed
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-10 lg:space-x-12">
          <Link to="/" className="text-lg font-medium hover:text-arova-green-light transition-colors duration-200">
            Home
          </Link>
          <Link to="/collection" className="text-lg font-medium hover:text-arova-green-light transition-colors duration-200">
            Collection
          </Link>
          <Link to="/benefits" className="text-lg font-medium hover:text-arova-green-light transition-colors duration-200">
            Benefits
          </Link>
          <a
            href="#contact-us"
            onClick={handleScrollToContact}
            className="text-lg font-medium hover:text-arova-green-light transition-colors duration-200 cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Right section - Icons and Call to Action */}
        <div className="flex items-center space-x-4">
          {/* Wishlist Icon */}
          <Link to="/wishlist" className="p-2 rounded-full hover:bg-arova-beige-medium transition-colors duration-200 relative">
            <HeartIcon className="w-6 h-6" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-arova-green-dark text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="p-2 rounded-full hover:bg-arova-beige-medium transition-colors duration-200 relative">
            <ShoppingBagIcon className="w-6 h-6" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-arova-green-dark text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* Shop Luxury Oils Button - Desktop */}
          <Link
            to="/shop"
            className="hidden md:inline-flex bg-arova-green-dark text-white px-5 py-2 rounded-full font-medium hover:bg-arova-green-light transition-colors duration-300 ml-4"
          >
            Shop Luxury Oils
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-arova-beige-medium transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 transition-transform duration-300 ease-in-out transform origin-top animate-slideInDown">
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-lg font-medium hover:text-arova-green-light" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/collection" className="text-lg font-medium hover:text-arova-green-light" onClick={() => setIsMobileMenuOpen(false)}>
              Collection
            </Link>
            <Link to="/benefits" className="text-lg font-medium hover:text-arova-green-light" onClick={() => setIsMobileMenuOpen(false)}>
              Benefits
            </Link>
            <a
              href="#contact-us"
              onClick={handleScrollToContact}
              className="text-lg font-medium hover:text-arova-green-light cursor-pointer"
            >
              Contact
            </a>
            <Link
              to="/shop"
              className="bg-arova-green-dark text-white px-5 py-2 rounded-full font-medium hover:bg-arova-green-light transition-colors duration-300 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Luxury Oils
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;