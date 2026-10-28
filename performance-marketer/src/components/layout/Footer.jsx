"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaGlobe,
  FaLocationDot,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa6";
import Container from "../ui/Container";

const galleryImages = [
  "/assets/instagram/1.jpg",
  "/assets/instagram/2.jpg",
  "/assets/instagram/3.jpg",
  "/assets/instagram/4.jpg",
  "/assets/instagram/5.jpg",
  "/assets/instagram/6.jpg",
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/packages" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-[#18191e] text-white relative overflow-hidden ">
      <Container>
        {/* Background Shapes: Earth Dotted Sphere (Left) & Network Constellations (Full) */}
        <img
          src="/assets/shapes/earth-footer.png"
          alt="Earth Graphic"
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-[440px] lg:w-[520px] pointer-events-none opacity-25 select-none -z-0 left-to-right"
        />
        <img
          src="/assets/shapes/footer-shape.png"
          alt="Network Constellation Graphic"
          className="absolute  w-full h-full mix-blend-overlay pointer-events-none select-none opacity-[0.8] scaleFooter z-1  ease-out"
        />

        {/* Top Bar: Brand Logo + Line Separator + Social Circles */}
        <div className="bg-black relative z-10">
          <div className="max-w-[1600px] mx-auto p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo with Orange Connected Badge */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-brand-base flex items-center justify-center shadow-md">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Brand Mark"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-[26px] font-extrabold tracking-tight text-white uppercase font-heading">
                Brand
              </span>
            </Link>

            {/* Dividing Horizontal Line across middle */}
            <div className="hidden md:block flex-1 h-[1px] bg-white/10 mx-8 lg:mx-12" />

            {/* 4 Social Circular Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              {[
                {
                  icon: <FaFacebookF size={14} />,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  icon: <FaXTwitter size={14} />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  icon: <FaLinkedinIn size={14} />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <FaYoutube size={14} />,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-base! text-white! hover:text-brand-secondary! transition-all duration-300 flex items-center justify-center border border-white/5 hover:border-brand-base"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="max-w-[1600px] mx-auto  mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
            {/* Column 1: ABOUT (with Newsletter) */}
            <div className="lg:col-span-4 pr-0 lg:pr-4">
              <h4 className="text-[19px] sm:text-[20px] font-bold text-white! uppercase tracking-wider mb-6">
                ABOUT
              </h4>
              <p className="text-[#9ea1aa] text-[14px] sm:text-[15px] leading-[1.8] mb-7 font-normal">
                We help businesses build online visibility, generate qualified
                leads and create stronger customer journeys through modern
                performance marketing and AI automation.
              </p>

              {/* Newsletter Input + Orange Submit Button */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-stretch max-w-[360px]"
              >
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-[#202228] text-white placeholder-[#787b84] text-[14px] px-4 py-3.5 outline-none border border-white/10 focus:border-brand-base flex-1 transition-colors font-sans"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-[52px] bg-brand-base hover:bg-white text-brand-secondary hover:text-brand-base transition-colors duration-300 flex items-center justify-center shrink-0 cursor-pointer shadow-md"
                >
                  <FaArrowRight className="w-4 h-4 text-inherit" />
                </button>
              </form>
            </div>

            {/* Column 2: LINKS */}
            <div className="lg:col-span-2">
              <h4 className="text-[19px] sm:text-[20px] font-bold text-white! uppercase tracking-wider mb-6">
                LINKS
              </h4>
              <ul className="space-y-3.5 p-0 m-0 list-none">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-brand-text-gray! hover:text-brand-base! transition-colors duration-300 text-[15px] inline-flex items-center gap-2 group font-normal"
                    >
                      <span className="w-0 h-[2px] absolute top-1/2 left-0 group-hover:-translate-y-1/2 rounded-full bg-transparent group-hover:w-full transition-all  duration-400 ease-in-out" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: GALLERY (6 Thumbnails Grid) */}
            <div className="lg:col-span-3">
              <h4 className="text-[19px] sm:text-[20px] font-bold text-white! uppercase tracking-wider mb-6">
                GALLERY
              </h4>
              <div className="grid grid-cols-3 gap-2.5 max-w-[240px]">
                {galleryImages.map((src, idx) => (
                  <Link
                    key={idx}
                    href="/projects"
                    className="relative group overflow-hidden block aspect-square bg-[#202228]"
                  >
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    {/* Subtle Orange Hover Overlay with Plus */}
                    <div className="absolute inset-0 bg-brand-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <FaPlus className="w-3.5 h-3.5 text-brand-secondary" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: CONTACT (Featured Dark Box with Details & Bottom Banner) */}
            <div className="lg:col-span-3">
              <div className="bg-black relative">
                <div className="p-[30px]">
                  <h4 className="text-[19px] sm:text-[20px] font-bold text-white! uppercase tracking-wider mb-6">
                    CONTACT
                  </h4>

                  <div className="space-y-5 ">
                    {/* Phone */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary group-hover:bg-brand-base transition-all duration-300 group-hover:text-brand-text-dark flex items-center justify-center shrink-0 text-brand-base mt-0.5">
                        <FaPhone className="w-4 h-4 text-brand-base group-hover:text-brand-text-dark transition-all duration-300" />
                      </div>
                      <div>
                        <a
                          href="tel:+917984473600"
                          className="text-brand-gray! hover:text-brand-base! transition-colors text-[14px] font-semibold block leading-tight mb-1"
                        >
                          +91 7984473600
                        </a>
                        <span className="text-[#9ea1aa] text-[12px] block">
                          Mon - Sat (9am - 7pm)
                        </span>
                      </div>
                    </div>

                    {/* Email / Web */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary group-hover:bg-brand-base transition-all duration-300 flex items-center justify-center shrink-0 text-brand-base mt-0.5">
                        <FaGlobe className="w-4 h-4 text-brand-base group-hover:text-brand-text-dark transition-all duration-300" />
                      </div>
                      <div>
                        <a
                          href="mailto:imanishhere07@gmail.com"
                          className="text-brand-gray! hover:text-brand-base! transition-colors text-[14px] font-semibold block leading-tight mb-1 break-all"
                        >
                          imanishhere07@gmail.com
                        </a>
                        <span className="text-[#9ea1aa] text-[12px] block">
                          Greater Noida, India
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-brand-secondary group-hover:bg-brand-base transition-all duration-300 flex items-center justify-center shrink-0 text-brand-base mt-0.5">
                        <FaLocationDot className="w-4 h-4 text-brand-base group-hover:text-brand-text-dark transition-all duration-300" />
                      </div>
                      <div>
                        <span className="text-[#9ea1aa] text-[13px] leading-relaxed block">
                          Greater Noida, Uttar Pradesh, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom Image Banner matching screenshot */}
                <div className="overflow-hidden">
                  <img
                    src="/assets/resources/footer-1-1.png"
                    alt="Marketing & Tech Consulting"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        {/* <div className="bg-[#131418] border-t border-white/5 py-6 relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[#8e919a] text-[14px] m-0">
            &copy; 2026 <span className="text-white font-semibold">Manish Verma Consulting</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[14px] text-[#8e919a]">
            <Link href="/contact" className="hover:text-brand-base transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-brand-base transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-brand-base transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div> */}
      </Container>
    </footer>
  );
}
