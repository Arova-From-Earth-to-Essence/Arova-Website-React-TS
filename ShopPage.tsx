// src/pages/ShopPage.tsx
import React, { useMemo } from 'react'; // Import useMemo
import { useSearchParams } from 'react-router-dom'; // Import useSearchParams
import ProductCard from '../components/ProductCard';
import { products } from '../data/products'; // Make sure products is imported

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category'); // Get the 'category' query param

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) {
      return products; // If no category filter, show all products
    }
    // Filter products based on the gender property
    return products.filter(product => product.gender === categoryFilter);
  }, [products, categoryFilter]); // Re-filter when products or categoryFilter changes

  // Determine the title based on the filter
  const pageTitle = categoryFilter
    ? `Shop ${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}'s Collection`
    : 'All Products';

  return (
    <div className="min-h-screen bg-arova-beige-light text-arova-green-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-libre-baskerville font-bold text-center mb-12 animate-fadeIn">
          {pageTitle}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-xl mt-10">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;