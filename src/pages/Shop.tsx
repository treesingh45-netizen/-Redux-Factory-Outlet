import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, formatPrice } from '../data/mock';
import { Filter, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const CATEGORIES = ['all', 'men', 'women', 'kids', 'accessories'];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (currentCategory === 'all') return products;
    return products.filter(p => p.category === currentCategory);
  }, [currentCategory]);

  const handleCategoryChange = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center pb-4 border-b">
          <h1 className="text-2xl font-serif font-bold">Collection</h1>
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-28">
            <h2 className="text-xl font-serif font-bold mb-6">Categories</h2>
            <ul className="space-y-4">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left text-sm uppercase tracking-wider transition-colors ${
                      currentCategory === cat 
                        ? 'text-[var(--color-brand-red)] font-semibold' 
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 p-6 flex flex-col md:hidden"
              >
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                  <h2 className="text-xl font-serif font-bold">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6 text-gray-500" /></button>
                </div>
                <ul className="space-y-6">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`block w-full text-left text-lg font-medium transition-colors ${
                          currentCategory === cat 
                            ? 'text-[var(--color-brand-red)]' 
                            : 'text-gray-900'
                        }`}
                      >
                        <span className="capitalize">{cat}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-bold capitalize">{currentCategory === 'all' ? 'All Collection' : `${currentCategory}'s Collection`}</h1>
            <span className="text-sm text-gray-500">{filteredProducts.length} Results</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No products found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/shop/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-sm">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {product.isSale && (
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[var(--color-brand-red)] text-white text-[10px] sm:text-xs font-bold px-2 py-1 uppercase tracking-wider z-10">
                        Sale
                      </div>
                    )}
                    {/* Quick View Button for Desktop */}
                    <div className="hidden md:flex absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 justify-center">
                      <span className="text-sm font-semibold uppercase tracking-wider">Details</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-[var(--color-brand-red)] transition-colors line-clamp-2">{product.name}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-xs sm:text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
