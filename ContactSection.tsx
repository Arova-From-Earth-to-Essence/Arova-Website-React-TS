// src/components/ContactSection.tsx
import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactSection: React.FC = () => {
  return (
    // UPDATED: Gradient direction to 'to-b' (to bottom) and colors for beige-to-deep-green transition
    <section id="contact-us" className="bg-gradient-to-b from-arova-beige-light to-arova-green-dark py-20 md:py-32 text-arova-green-dark">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-libre-baskerville font-bold mb-6 animate-fadeIn">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 opacity-90 animate-fadeIn animation-delay-200">
          We'd love to hear from you! Reach out to us with any questions, feedback, or inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 max-w-3xl mx-auto">
          {/* Email Card */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <EnvelopeIcon className="w-16 h-16 text-arova-green-dark mb-6 drop-shadow-md" />
            <h3 className="text-2xl font-libre-baskerville font-bold mb-3 text-arova-green-dark">Email Us</h3>
            <p className="text-base text-gray-700 mb-4">info@arova.com</p>
            <a
              href="mailto:info@arova.com"
              className="mt-2 inline-flex items-center justify-center px-6 py-3 border border-arova-green-dark text-base font-medium rounded-full text-arova-green-dark bg-transparent hover:bg-arova-green-dark hover:text-white transition-colors duration-300"
            >
              Send an Email
            </a>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <PhoneIcon className="w-16 h-16 text-arova-green-dark mb-6 drop-shadow-md" />
            <h3 className="text-2xl font-libre-baskerville font-bold mb-3 text-arova-green-dark">Call Us</h3>
            <p className="text-base text-gray-700 mb-4">+1 (234) 567-890</p>
            <a
              href="tel:+1234567890"
              className="mt-2 inline-flex items-center justify-center px-6 py-3 border border-arova-green-dark text-base font-medium rounded-full text-arova-green-dark bg-transparent hover:bg-arova-green-dark hover:text-white transition-colors duration-300"
            >
              Give us a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;