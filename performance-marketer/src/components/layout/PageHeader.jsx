"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoSearch } from "react-icons/go";
import Container from "../ui/Container";
import { ChevronDown, PhoneRing, Menu, X } from "reicon-react";
import MobileNav from "./MobileNav";
import Logo from "../ui/Logo";

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  bgImage = "/assets/background/page-header-bg-1-1.jpg",
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky header after 30% viewport scroll
      const threshold = window.innerHeight * 0.3;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      subLinks: [
        { name: "All Services", href: "/services" },
        {
          name: "Performance Marketing",
          href: "/services/performance-marketing",
        },
        {
          name: "Social Media Marketing",
          href: "/services/social-media-marketing",
        },
        {
          name: "SEO & Online Visibility",
          href: "/services/seo-online-visibility",
        },
        {
          name: "Email Marketing",
          href: "/services/email-marketing",
        },
        {
          name: "LinkedIn Personal Branding",
          href: "/services/linkedin-branding",
        },
        {
          name: "AI Marketing Automation",
          href: "/services/ai-automation",
        },
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

  const isLinkActive = (link) => {
    if (link.href === "/" && pathname === "/") return true;
    if (
      link.href !== "/" &&
      link.href !== "#" &&
      pathname.startsWith(link.href)
    )
      return true;
    if (link.subLinks) {
      return link.subLinks.some((sub) => pathname === sub.href);
    }
    return false;
  };

  /* Auto-generate breadcrumbs from pathname if not provided */
  const crumbs =
    breadcrumbs ??
    (() => {
      const segments = pathname.split("/").filter(Boolean);
      const items = [{ label: "Home", href: "/" }];
      let acc = "";
      segments.forEach((seg, i) => {
        acc += `/${seg}`;
        const label = seg
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        items.push({ label, href: i < segments.length - 1 ? acc : undefined });
      });
      return items;
    })();

  return (
    <>
      <div className="relative my-0 mx-auto w-full min-w-75 overflow-hidden ">
        {/* Transparent Main Header (Overlaid on Hero) */}
        <header className="z-20 bg-transparent absolute top-0 left-0 w-full border-b border-[rgba(255,255,255,0.2)]">
          <Container>
            <div className="flex items-center justify-between relative w-full py-3.5 sm:py-4 lg:py-0">
              {/* Logo */}
              <Logo variant="light" iconClassName="h-9 sm:h-11 lg:h-12 w-auto" />

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center mx-auto">
                <ul className="flex m-0 p-0 items-center list-none gap-1 xl:gap-2">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);
                    return (
                      <li
                        key={link.name}
                        className="relative group px-3 xl:px-4"
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 font-semibold uppercase text-[15px] xl:text-[16px] transition-colors py-[30px]  ${
                            active
                              ? "text-brand-base!"
                              : "text-white! group-hover:text-brand-base!"
                          }`}
                        >
                          {link.name}
                          {link.subLinks && (
                            <ChevronDown size={14} className="ml-1" />
                          )}
                        </Link>

                        {/* Dropdown */}
                        {link.subLinks && (
                          <ul className="absolute top-[100%] left-[-25px] min-w-[232px] bg-white py-[30px] px-[20px] opacity-0 invisible origin-top scale-y-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 z-[99] shadow-xl flex flex-col items-start m-0 list-none">
                            {link.subLinks.map((subLink) => {
                              const subActive = pathname === subLink.href;
                              return (
                                <li
                                  key={subLink.name}
                                  className="w-full mb-1.5 last:mb-0 relative"
                                >
                                  <Link
                                    href={subLink.href}
                                    className={`flex w-full py-[10px] px-[20px] transition-all duration-400 text-[#6A6A6A]! text-[14px] font-semibold uppercase hover:bg-brand-base! hover:text-brand-text-dark!  ${
                                      subActive
                                        ? "bg-brand-base text-brand-text-dark!"
                                        : "text-brand-secondary hover:bg-brand-base hover:text-brand-text-dark!"
                                    }`}
                                  >
                                    {subLink.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Desktop Right Controls (Phone + Search) */}
              <div className="hidden lg:flex items-center gap-6 shrink-0">
                <Link
                  href="tel:+917984473600"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-11 h-11 bg-brand-base text-brand-secondary flex justify-center items-center text-[20px] rounded-full shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <PhoneRing size={24} weight="Filled" />
                  </div>
                  <div className="flex flex-col">
                    <span className="block text-white/70 text-[12px] font-medium leading-tight">
                      Call to Anytime
                    </span>
                    <h6 className="text-white! group-hover:text-brand-base! text-[16px] xl:text-[17px] font-bold leading-tight m-0 bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px]">
                      +91 7984473600
                    </h6>
                  </div>
                </Link>

                <div className="h-8 w-px bg-white/20 mx-1" />

                <button
                  type="button"
                  aria-label="Search"
                  className="text-white hover:text-brand-base transition-colors duration-300 p-2 text-[20px]"
                >
                  <GoSearch />
                </button>
              </div>

              {/* Mobile Controls */}
              <div className="flex lg:hidden items-center gap-4">
                <button
                  type="button"
                  aria-label="Search"
                  className="text-white hover:text-brand-base transition-colors p-1"
                >
                  <GoSearch size={22} />
                </button>
                <button
                  type="button"
                  className="text-white hover:text-brand-base focus:outline-none p-1 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </Container>
        </header>

        {/* Sticky Header (Revealed with smooth slide-down after 30% scroll) */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 bg-brand-secondary shadow-[0px_4px_25px_rgba(0,0,0,0.35)] transition-all duration-500 ease-in-out w-full ${
            isScrolled
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <Container>
            <div className="flex items-center justify-between py-3">
              {/* Logo */}
              <Logo variant="light" iconClassName="h-9 sm:h-10 lg:h-11 w-auto" />

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center mx-auto">
                <ul className="flex m-0 p-0 items-center list-none gap-1 xl:gap-2">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);
                    return (
                      <li
                        key={link.name}
                        className="relative group px-3 xl:px-4"
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 font-heading font-semibold uppercase text-[17px] xl:text-[18px] tracking-wider transition-colors py-4 ${
                            active
                              ? "text-brand-base!"
                              : "text-white! group-hover:text-brand-base!"
                          }`}
                        >
                          {link.name}
                          {link.subLinks && (
                            <ChevronDown size={14} className="ml-1" />
                          )}
                        </Link>

                        {/* Dropdown */}
                        {link.subLinks && (
                          <ul className="absolute top-full mt-3 left-[-25px] min-w-[232px] bg-white py-[30px] px-[20px] opacity-0 invisible origin-top scale-y-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 z-[99] shadow-xl flex flex-col items-start m-0 list-none">
                            {link.subLinks.map((subLink) => {
                              const subActive = pathname === subLink.href;
                              return (
                                <li
                                  key={subLink.name}
                                  className="w-full mb-1.5 last:mb-0 relative"
                                >
                                  <Link
                                    href={subLink.href}
                                    className="flex w-full py-[10px] px-[20px] transition-all duration-400 text-[#6A6A6A]! text-[15px] font-heading font-medium tracking-wide uppercase hover:bg-brand-base! hover:text-brand-text-dark!"
                                    style={{
                                      textShadow: "0 0 0.1px currentColor",
                                    }}
                                  >
                                    {subLink.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Sticky Right Controls (Phone + Search) */}
              <div className="hidden lg:flex items-center gap-6 shrink-0">
                <Link
                  href="tel:+917984473600"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-brand-base text-brand-secondary group-hover flex justify-center items-center text-[18px] rounded-full shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <PhoneRing weight="Filled" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="block text-white/70 text-[11px] font-medium leading-tight">
                      Call to Anytime
                    </span>
                    <h6 className="text-white! group-hover:text-brand-base! text-[15px] font-bold leading-tight m-0 bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px]">
                      +91 7984473600
                    </h6>
                  </div>
                </Link>

                <div className="h-7 w-px bg-white/20 mx-1" />

                <button
                  type="button"
                  aria-label="Search"
                  className="text-white hover:text-brand-base transition-colors duration-300 p-2 text-[18px]"
                >
                  <GoSearch />
                </button>
              </div>

              {/* Mobile Toggle Button */}
              <div className="flex lg:hidden items-center gap-4">
                <button
                  type="button"
                  aria-label="Search"
                  className="text-white hover:text-brand-base transition-colors p-1"
                >
                  <GoSearch size={22} />
                </button>
                <button
                  type="button"
                  className="text-white hover:text-brand-base focus:outline-none p-1 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navLinks={navLinks}
        />

        {/* Hero Banner Section */}
        <div className="relative pt-[105px] sm:pt-[130px] md:pt-[160px] lg:pt-[220px] xl:pt-[240px] pb-[45px] sm:pb-[65px] md:pb-[85px] lg:pb-[120px] xl:pb-[140px] z-1 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          {/* Dark Contrast Overlay */}
          <div className="absolute inset-0 bg-black/60 z-1" />

          {/* Hero Content */}
          <Container className="relative z-10 text-center">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Optional Subtitle / Eyebrow */}
              {subtitle && (
                <p className="text-brand-base text-[11px] sm:text-[13px] md:text-[14px] font-heading font-bold uppercase tracking-[2px] sm:tracking-[3px] mb-2 sm:mb-3">
                  {subtitle}
                </p>
              )}

              {/* Main Title */}
              <h1 className="text-white! text-[28px]! sm:text-[38px]! md:text-[48px]! lg:text-[58px]! font-extrabold uppercase leading-[1.1]! sm:leading-[1.08]! tracking-wide! mb-3 sm:mb-4 max-w-4xl! drop-shadow-lg! font-heading">
                {title ?? crumbs[crumbs.length - 1]?.label ?? "Page"}
              </h1>
              {/* Animated Orange Divider */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3.5 sm:mb-5">
                <span className="w-7 sm:w-10 h-[2px] bg-brand-base rounded-full" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-brand-base inline-block" />
                <span className="w-7 sm:w-10 h-[2px] bg-brand-base rounded-full" />
              </div>
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center justify-center flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-1 m-0 p-0 list-none">
                  {crumbs.map((crumb, i) => {
                    const isLast = i === crumbs.length - 1;
                    return (
                      <li key={i} className="flex items-center gap-1.5 sm:gap-2">
                        {!isLast ? (
                          <>
                            <Link
                              href={crumb.href}
                              className="text-white/80! hover:text-brand-base! transition-colors duration-300 text-[12px] sm:text-[14px] font-semibold uppercase tracking-wider"
                            >
                              {crumb.label}
                            </Link>
                            <span className="text-white font-bold text-[12px] sm:text-[13px]">
                              /
                            </span>
                          </>
                        ) : (
                          <span className="text-brand-base text-[12px] sm:text-[14px] font-bold uppercase tracking-wider">
                            {crumb.label}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
