import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[400px] w-full bg-gray-900 overflow-hidden flex items-center justify-center text-center px-4">
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80" 
          alt="About Redux Factory Outlet" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl font-light text-gray-200">Bringing premium fashion directly to you.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-16">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Redux Factory Outlet was established with a simple mission: to make high-quality, trendy fashion accessible to everyone in Karachi without breaking the bank. Located in the heart of Gulistan-e-Johar, we've carefully curated collections for men, women, and kids.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that style is a way to say who you are without having to speak. That's why our dedicated team works tirelessly to bring you the latest designs constructed from premium materials.
              </p>
            </div>
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-xl">
               <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80" alt="Store Interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/5] bg-gray-100 overflow-hidden shadow-xl">
               <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80" alt="Fashion Design" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Why Choose Us</h2>
              <ul className="space-y-6">
                <li>
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-brand-red)] rounded-full"></span> Uncompromised Quality
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Every piece in our store goes through rigorous quality checks to ensure it meets our high standards before it reaches your wardrobe.</p>
                </li>
                <li>
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-brand-red)] rounded-full"></span> Exceptional Value
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">By operating as a factory outlet, we cut out the middlemen, passing the savings directly to you without sacrificing style.</p>
                </li>
                <li>
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-brand-red)] rounded-full"></span> Customer First
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Our dedicated support team and easy return policies ensure that your shopping experience is always smooth and satisfying.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
