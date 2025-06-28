// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OfferMarquee from './components/OfferMarquee';
import CategoriesGrid from './components/CategoriesGrid';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import CollectionPage from './pages/CollectionPage';
import BenefitsPage from './pages/BenefitsPage';
import ContactSection from './components/ContactSection';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage'; // Import new page
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="min-h-screen flex flex-col bg-arova-beige-light font-inter text-arova-green-dark antialiased">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <OfferMarquee />
                  <CategoriesGrid />
                </>
              } />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/benefits" element={<BenefitsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} /> {/* New Route */}
            </Routes>
          </main>
          <ContactSection />
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;