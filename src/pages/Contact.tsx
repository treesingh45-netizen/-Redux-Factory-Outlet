import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 max-w-xl mx-auto">We'd love to hear from you. Please fill out this form or shoot us an email if you have any questions or feedback.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Details & Map */}
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Our Store</h2>
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p>W458+X4X, Badar St, Block 16-A,<br />Gulistan-e-Johar, Karachi, Pakistan</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone / WhatsApp</h4>
                    <a href="https://wa.me/923453052662" className="hover:text-[var(--color-brand-red)] transition-colors">03453052662</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@reduxoutlet.com" className="hover:text-[var(--color-brand-red)] transition-colors">info@reduxoutlet.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-brand-red)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Store Hours</h4>
                    <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embed Map (Placeholder using iframe) */}
            <div className="aspect-video lg:aspect-square bg-gray-200 w-full overflow-hidden relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.326880816047!2d67.12642105151525!3d24.91223933256086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338525b6a37eb%3A0xcda8d01d4a6de14!2sGulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714561021456!5m2!1sen!2s" 
                 className="absolute inset-0 w-full h-full border-0" 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Map location"
               ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12 bg-white lg:p-8 lg:border lg:border-gray-100 lg:shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you soon.") }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" id="firstName" required className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" id="email" required className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" required rows={6} className="w-full p-3 border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[var(--color-brand-dark)] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-brand-red)] transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
