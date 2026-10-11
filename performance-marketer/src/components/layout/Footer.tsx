import Link from "next/link";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-secondary pt-24 pb-0 relative overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand-base" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" className="text-white" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Widget */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">BRAND</span>
              <div className="w-2 h-2 rounded-full bg-brand-base mb-2"></div>
            </div>
            <p className="text-brand-text-gray mb-8 leading-relaxed">
              We provide the best IT solutions for your business. Let's work together to grow your brand and reach new heights in the digital landscape.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-base hover:text-brand-text-dark transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-base hover:text-brand-text-dark transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-base hover:text-brand-text-dark transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-base hover:text-brand-text-dark transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </div>
          </div>

          {/* Links Widget */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              {['About Company', 'Meet Our Team', 'Latest Blog', 'Contact Us', 'Our Services'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-brand-text-gray hover:text-brand-base transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-base" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Widget */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">IT Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Digital Marketing', 'IT Management', 'Data Security', 'Cloud Computing'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-brand-text-gray hover:text-brand-base transition-colors flex items-center gap-2">
                    <ArrowRight size={14} className="text-brand-base" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Widget */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-brand-base flex-shrink-0 mt-1" size={20} />
                <span className="text-brand-text-gray">250 Main Street, New York, NY 10001, USA</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-brand-base flex-shrink-0" size={20} />
                <a href="tel:+11234567890" className="text-white hover:text-brand-base transition-colors font-semibold">+1 123 456 7890</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-brand-base flex-shrink-0" size={20} />
                <a href="mailto:support@brand.com" className="text-brand-text-gray hover:text-brand-base transition-colors">support@brand.com</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Copyright row */}
      <div className="bg-black/20 py-6">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-text-gray text-sm">
            &copy; 2026 Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-brand-text-gray">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
