import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products, formatPrice } from '../data/mock';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80" 
          alt="Fashion Collection" 
          className="absolute inset-0 w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white mix-blend-auto"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 drop-shadow-lg">
              Redefining Style
            </h1>
            <p className="text-lg md:text-2xl mb-10 font-light drop-shadow-md">
              Discover the latest trends at Karachi's premium factory outlet. Expect quality, embrace style.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-[var(--color-brand-red)] hover:bg-red-700 text-white px-10 py-4 font-medium uppercase tracking-wider transition-colors duration-300 rounded shadow-lg"
            >
              Shop New Arrivals
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Link to="/shop?category=men" className="group relative h-96 overflow-hidden block">
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80" 
              alt="Men's Collection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-serif font-bold mb-2">Men</h3>
              <span className="text-sm uppercase tracking-widest border-b border-white pb-1 group-hover:text-[var(--color-brand-red)] group-hover:border-[var(--color-brand-red)] transition-colors">Discover</span>
            </div>
          </Link>
          <Link to="/shop?category=women" className="group relative h-96 overflow-hidden block">
            <img 
              src="https://images.pexels.com/photos/18999070/pexels-photo-18999070.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Women's Collection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-8 right-8 text-white text-right">
              <h3 className="text-3xl font-serif font-bold mb-2">Women</h3>
              <span className="text-sm uppercase tracking-widest border-b border-white pb-1 group-hover:text-[var(--color-brand-red)] group-hover:border-[var(--color-brand-red)] transition-colors">Shop Now</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Trending Now</h2>
              <p className="text-gray-500 max-w-2xl">Our most popular pieces chosen by you. Experience the perfect blend of comfort and style.</p>
            </div>
            <Link to="/shop" className="hidden md:inline-block text-sm uppercase tracking-wider font-semibold text-gray-900 border-b-2 border-black pb-1 hover:text-[var(--color-brand-red)] hover:border-[var(--color-brand-red)] transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/shop/${product.id}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-200 mb-4 rounded-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {product.isSale && (
                    <div className="absolute top-3 left-3 bg-[var(--color-brand-red)] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                      Sale
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
                      New
                    </div>
                  )}
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-center text-sm font-semibold uppercase tracking-wider">Quick View</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-[var(--color-brand-red)] transition-colors">{product.name}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
             <Link to="/shop" className="inline-block border border-black text-black px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
               Explore Collection
             </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-brand-dark)] text-white flex flex-col md:flex-row shadow-2xl">
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="text-[var(--color-brand-red)] font-bold tracking-widest uppercase text-sm mb-4">Limited Time Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Winter Clearance Sale</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Upgrade your wardrobe with up to 50% off on selected items. Don't miss out on this season's biggest drops.
            </p>
            <Link to="/shop" className="inline-block bg-white text-black text-center px-8 py-4 font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors w-fit">
              Shop The Sale
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=80" 
               alt="Sale Promotion" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t border-b border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          <div className="p-4">
             <h4 className="text-lg font-serif font-bold mb-2">Premium Quality</h4>
             <p className="text-gray-500 text-sm">Finest materials used</p>
          </div>
          <div className="p-4">
             <h4 className="text-lg font-serif font-bold mb-2">Secure Payments</h4>
             <p className="text-gray-500 text-sm">Cash on delivery available</p>
          </div>
          <div className="p-4">
             <h4 className="text-lg font-serif font-bold mb-2">Fast Delivery</h4>
             <p className="text-gray-500 text-sm">Nationwide shipping</p>
          </div>
          <div className="p-4">
             <h4 className="text-lg font-serif font-bold mb-2">24/7 Support</h4>
             <p className="text-gray-500 text-sm">Via WhatsApp & Email</p>
          </div>
        </div>
      </section>
    </div>
  );
};
