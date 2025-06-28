// src/components/Footer.tsx
import React from 'react';
// REMOVE: import { InstagramIcon, FacebookIcon, TwitterIcon } from '@heroicons/react/24/outline';
// These imports are incorrect as Heroicons do not provide brand-specific social icons.
// We are using inline SVGs now.

const Footer: React.FC = () => {
  return (
    <footer className="bg-arova-green-dark text-arova-beige-light py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="font-libre-baskerville text-2xl font-bold mb-4">Arova</h3>
          <p className="text-sm opacity-90 mb-4">
            From Earth to Essence: Premium fragrance oils crafted with intention for your wellness and luxury rituals.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-arova-beige-light hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Facebook Icon */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-arova-beige-light hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* Twitter Icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-arova-beige-light hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Categories Section */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul>
            <li className="mb-2"><a href="/shop/pure-essences" className="text-sm hover:text-white transition-colors duration-200">Pure Essences</a></li>
            <li className="mb-2"><a href="/shop/blended-oils" className="text-sm hover:text-white transition-colors duration-200">Blended Oils</a></li>
            <li className="mb-2"><a href="/shop/aromatherapy-diffusers" className="text-sm hover:text-white transition-colors duration-200">Aromatherapy Diffusers</a></li>
            <li className="mb-2"><a href="/shop/gift-sets" className="text-sm hover:text-white transition-colors duration-200">Gift Sets</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/about" className="text-sm hover:text-white transition-colors duration-200">About Us</a></li>
            <li className="mb-2"><a href="/contact" className="text-sm hover:text-white transition-colors duration-200">Contact Us</a></li>
            <li className="mb-2"><a href="/faq" className="text-sm hover:text-white transition-colors duration-200">FAQs</a></li>
            <li className="mb-2"><a href="/shipping-returns" className="text-sm hover:text-white transition-colors duration-200">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
          <p className="text-sm opacity-90 mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full text-arova-green-dark focus:outline-none focus:ring-2 focus:ring-arova-green-light"
            />
            <button
              type="submit"
              className="bg-arova-green-light text-white px-5 py-2 rounded-full hover:bg-arova-green-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-arova-green-light/30 text-center text-sm opacity-70">
        <p>&copy; {new Date().getFullYear()} Arova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;