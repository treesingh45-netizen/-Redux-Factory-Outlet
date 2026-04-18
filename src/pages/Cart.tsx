import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/mock';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-50 p-12 rounded-lg border border-green-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Thank you for shopping with Redux Factory Outlet. Your order has been received and is being processed. You will receive an SMS confirmation shortly.
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="inline-block bg-[var(--color-brand-dark)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-brand-red)] transition-colors"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
        <Link 
          to="/shop"
          className="bg-[var(--color-brand-dark)] text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-brand-red)] transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-10">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="w-full lg:w-2/3">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-6">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total</div>
          </div>

          <div className="divide-y divide-gray-100">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div 
                  key={item.cartId}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  className="py-6 flex flex-col md:grid md:grid-cols-12 md:items-center gap-4"
                >
                  <div className="col-span-6 flex gap-4">
                    <Link to={`/shop/${item.id}`} className="w-24 h-32 shrink-0 bg-gray-100 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </Link>
                    <div className="flex flex-col justify-between">
                      <div>
                        <Link to={`/shop/${item.id}`} className="font-medium text-gray-900 hover:text-[var(--color-brand-red)] transition-colors line-clamp-1">
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Color: {item.selectedColor}</p>
                        <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                      </div>
                      <div className="md:hidden mt-2 font-semibold">
                        {formatPrice(item.price)}
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3 flex md:justify-center items-center">
                    <div className="flex items-center border border-gray-300 w-fit">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="p-2 text-gray-500 hover:text-black transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-medium w-12 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="p-2 text-gray-500 hover:text-black transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="col-span-3 flex justify-between md:justify-end items-center mt-4 md:mt-0">
                    <span className="hidden md:inline font-semibold">{formatPrice(item.price * item.quantity)}</span>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Order Summary & Checkout */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 p-6 md:p-8">
            <h2 className="text-xl font-serif font-bold border-b border-gray-200 pb-4 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg text-gray-900">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>

            {!isCheckingOut ? (
              <button 
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-[var(--color-brand-red)] hover:bg-black text-white py-4 font-semibold uppercase tracking-widest transition-colors flex justify-center items-center gap-2"
              >
                Checkout <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <form onSubmit={handleCheckout} className="space-y-4 border-t border-gray-200 pt-6 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="font-serif font-bold text-lg mb-2">Delivery Details</h3>
                <input required type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm" />
                <input required type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm" />
                <input required type="email" placeholder="Email (Optional)" className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm" />
                <textarea required placeholder="Full Delivery Address" rows={3} className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm resize-none"></textarea>
                
                <div className="bg-white p-4 border border-gray-200 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="cod" checked readOnly className="text-black focus:ring-black" />
                    <label htmlFor="cod" className="font-semibold text-gray-900">Cash on Delivery</label>
                  </div>
                  <p className="text-gray-500 mt-1 pl-6 text-xs">Pay with cash upon delivery.</p>
                </div>

                <div className="flex gap-4">
                   <button 
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-1/3 border border-gray-300 hover:bg-gray-100 text-gray-700 py-4 font-semibold uppercase tracking-widest transition-colors text-xs"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    className="w-2/3 bg-black hover:bg-[var(--color-brand-red)] text-white py-4 font-semibold uppercase tracking-widest transition-colors text-xs"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 flex items-center justify-center gap-4 border-t border-gray-200 pt-6">
              {/* Trust indicators */}
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
