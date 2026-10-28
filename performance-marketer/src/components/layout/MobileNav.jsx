import Link from "next/link";
import { X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function MobileNav({ isOpen, onClose, navLinks }) {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Prevent body scroll when nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 w-[100vw] h-[100vh] z-[999] transition-all duration-500 ease-in-out ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-[#171717] transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-30 cursor-pointer" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div
        className={`w-[300px] bg-brand-secondary z-10 relative h-full overflow-y-auto py-[30px] px-[15px] transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 delay-100" : "-translate-x-full delay-0"
        }`}
      >
        <button
          className="absolute top-[20px] right-[15px] text-[18px] text-white hover:text-brand-base transition-colors"
          onClick={onClose}
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="mb-[40px] flex">
          <Link href="/" onClick={onClose}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                BRAND
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-base mb-2"></div>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="mb-[40px]">
          <ul className="m-0 p-0 list-none border-t border-white/10">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/10">
                <div className="flex justify-between items-center h-[46px] pl-[1em]">
                  <Link
                    href={link.href}
                    className={`leading-[30px] font-heading text-[18px] tracking-wider uppercase font-semibold transition-colors duration-500 ${
                      expandedMenus[link.name]
                        ? "text-brand-base!"
                        : "text-white! hover:text-brand-base!"
                    }`}
                    onClick={!link.subLinks ? onClose : undefined}
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <button
                      onClick={(e) => toggleMenu(link.name, e)}
                      className={`w-[30px] h-[30px] flex items-center justify-center transition-transform duration-500 border-none outline-none ${
                        expandedMenus[link.name]
                          ? "rotate-0 bg-white text-[#171717]"
                          : "-rotate-90 bg-brand-base text-white"
                      }`}
                      aria-label="dropdown toggler"
                    >
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>
                {link.subLinks && (
                  <ul
                    className={`bg-transparent overflow-hidden transition-all duration-300 ${
                      expandedMenus[link.name]
                        ? "max-h-[500px] border-t border-white/10"
                        : "max-h-0"
                    }`}
                  >
                    {link.subLinks.map((sub) => (
                      <li
                        key={sub.name}
                        className="border-b border-white/10 last:border-none"
                      >
                        <Link
                          href={sub.href}
                          className="flex justify-between leading-[30px] font-heading text-white! text-[16px] tracking-wide uppercase font-medium h-[46px] items-center pl-[2em] hover:text-brand-base! transition-colors duration-500"
                          onClick={onClose}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <ul className="mt-[20px] mb-[20px] list-none p-0">
          <li className="text-white text-[16px] font-semibold relative flex items-center mb-[15px]">
            <div className="w-[35px] h-[35px] rounded-full bg-brand-base flex justify-center items-center text-[16px] mr-[10px] text-white shrink-0">
              <FaEnvelope />
            </div>
            <a
              href="mailto:imanishhere07@gmail.com"
              className="hover:text-brand-base transition-colors duration-500"
            >
              imanishhere07@gmail.com
            </a>
          </li>
          <li className="text-white text-[16px] font-semibold relative flex items-center mb-[15px]">
            <div className="w-[35px] h-[35px] rounded-full bg-brand-base flex justify-center items-center text-[16px] mr-[10px] text-white shrink-0">
              <FaPhoneAlt />
            </div>
            <a
              href="tel:+91 7984473600"
              className="hover:text-brand-base transition-colors duration-500"
            >
              +91 7984473600
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-[20px]">
          <a
            href="#"
            className="text-[16px] text-white hover:text-brand-base transition-colors duration-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-[16px] text-white hover:text-brand-base transition-colors duration-500"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-[16px] text-white hover:text-brand-base transition-colors duration-500"
          >
            <FaPinterestP />
          </a>
          <a
            href="#"
            className="text-[16px] text-white hover:text-brand-base transition-colors duration-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
