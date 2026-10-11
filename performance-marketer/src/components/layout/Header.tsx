"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      subLinks: [
        {
          name: "Performance Marketing",
          href: "/services/performance-marketing",
        },
        { name: "Search Engine Ads", href: "/services/search-engine-ads" },
        { name: "Social Media Ads", href: "/services/social-media-ads" },
        { name: "Display Advertising", href: "/services/display-advertising" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      subLinks: [
        { name: "Packages", href: "/packages" },
        { name: "FAQs", href: "/faq" },
        { name: "About", href: "/about" },
      ],
    },
    {
      name: "Projects",
      href: "/projects",
      subLinks: [
        { name: "Project List", href: "/projects" },
        { name: "Project Details", href: "/project-details" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-[40] w-full transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1680px] mx-auto">
        <div className="flex items-start lg:items-center justify-between relative">
          {/* Logo Section */}
          <div className="relative z-[1] bg-transparent lg:bg-brand-base py-[20px] lg:pt-[30px] lg:pb-[6px] px-[16px] lg:px-4 flex items-center justify-between w-full lg:w-auto before:content-[''] before:w-[999999px] before:top-0 before:bg-brand-base before:absolute before:right-[99%] before:-z-10 before:bottom-[-24px] after:hidden lg:after:block after:content-[''] after:bg-brand-base after:absolute after:top-0 after:left-0 after:right-[-108px] after:bottom-[-24px] after:-z-10 max-lg:before:hidden">
            <Link href="/" className="shrink-0 flex items-center">
              <span className="text-[32px] font-extrabold text-brand-text-dark tracking-tight">
                BRAND
              </span>
              <div className="w-2 h-2 rounded-full bg-brand-secondary ml-1 mb-3"></div>
            </Link>

            {/* Mobile menu button (inside logo bar on mobile) */}
            <div className="flex lg:hidden items-center gap-4">
              <button className="text-brand-text-dark" aria-label="Search">
                <Search size={24} />
              </button>
              <button
                className="text-brand-text-dark focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Nav & Controls Wrapper */}
          <div className="hidden lg:flex w-full justify-between items-center relative z-[1] lg:before:content-[''] lg:before:absolute lg:before:bottom-[0px] lg:before:left-[141px] lg:before:w-[22px] lg:before:h-[12px] lg:before:bg-brand-secondary lg:before:[clip-path:polygon(50%_0%,0%_100%,100%_100%)] lg:after:content-[''] lg:after:absolute lg:after:bottom-[-37px] lg:after:left-[107px] lg:after:w-[46px] lg:after:h-[49px] lg:after:bg-brand-secondary lg:after:[clip-path:polygon(100%_0,0_0,0_100%)]">
            {/* Desktop Navigation */}
            <nav className="flex items-center ml-[209px] mr-auto">
              <ul className="flex m-0 p-0 items-center list-none">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group px-[19px]">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-brand-text-dark! font-semibold uppercase text-[16px] transition-colors py-[30.5px] group-hover:text-brand-base! group-[.current]:text-brand-base!"
                    >
                      {link.name}
                      {link.subLinks && (
                        <ChevronDown size={14} className="ml-1" />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {link.subLinks && (
                      <ul className="absolute top-[100%] left-[-25px] min-w-[232px] bg-white pt-[30px] pb-[30px] px-[20px] opacity-0 invisible origin-top scale-y-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 z-[99] shadow-xl flex flex-col items-start m-0 list-none">
                        {link.subLinks.map((subLink) => (
                          <li
                            key={subLink.name}
                            className="w-full mb-2.5 last:mb-0 relative"
                          >
                            <Link
                              href={subLink.href}
                              className="flex w-full py-[10px] px-[20px] transition-all duration-400 text-[#6A6A6A]! text-[14px] font-semibold uppercase hover:bg-brand-base! hover:text-brand-text-dark!"
                              style={{ textShadow: "0 0 0.1px currentColor" }}
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Right Controls */}
            <div className="flex items-center px-4">
              <div className="border-r border-[#DBDBDB] pr-[40px] mr-[30px]">
                <Link
                  href="/contact"
                  className="action-btn"
                  data-btn-text="Take Solution"
                >
                  <span className="relative z-10">Take Solution</span>
                </Link>
              </div>

              <button
                className="text-[#232429] hover:text-brand-base transition-colors text-[20px]"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}
