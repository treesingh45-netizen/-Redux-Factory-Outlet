import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, formatPrice } from '../data/mock';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="text-[var(--color-brand-red)] uppercase tracking-widest text-sm font-semibold hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8 uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden hide-scrollbar">
             <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-square bg-gray-100 cursor-pointer overflow-hidden border border-transparent hover:border-black transition-colors">
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 md:py-8">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
            {product.isSale && (
              <span className="bg-[#c11f25]/10 text-[var(--color-brand-red)] px-2 py-1 text-xs font-bold uppercase tracking-widest ml-2">Sale</span>
            )}
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-6">
            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-3">Color: <span className="text-gray-500 font-normal ml-1">{selectedColor}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border text-sm transition-colors ${
                        selectedColor === color 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 text-gray-700 hover:border-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Size</h3>
                  <button className="text-xs text-gray-500 underline hover:text-black">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border text-sm transition-colors ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 text-gray-700 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-4 text-center font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                  isAdded 
                    ? 'bg-green-600 text-white' 
                    : 'bg-[var(--color-brand-red)] hover:bg-black text-white'
                }`}
              >
                {isAdded ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <Check className="w-5 h-5" /> Added to Cart
                  </motion.div>
                ) : (
                  'Add to Cart'
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> In stock, ready to ship
              </p>
            </div>

            {/* Extra Info Accordions (Mocked visually) */}
            <div className="mt-10 border-t border-gray-200 divide-y divide-gray-200 text-sm">
              <div className="py-4">
                <h4 className="font-semibold uppercase tracking-wider mb-2">Delivery & Returns</h4>
                <p className="text-gray-500">Free delivery within Karachi for orders over PKR 5000. Easy 7-day returns.</p>
              </div>
              <div className="py-4">
                <h4 className="font-semibold uppercase tracking-wider mb-2">Materials & Care</h4>
                <p className="text-gray-500">Machine wash cold. Do not tumble dry. Always refer to the care label for specific instructions.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
