"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`flex items-center w-auto h-[35px] bg-transparent fixed right-[-12px] z-[99] text-center -rotate-90 cursor-pointer transition-all duration-200 ease-in-out ${
        isVisible
          ? "opacity-100 visible bottom-[70px]"
          : "opacity-0 invisible bottom-[60px]"
      }`}
      aria-label="Back to top"
    >
      <span className="inline text-[12px] uppercase tracking-[0.1em] font-bold mr-[8px] text-brand-base">
        back top
      </span>
      <span className="inline-block w-[30px] h-[4px] bg-brand-base relative overflow-hidden">
        <span
          className="absolute left-0 top-0 h-full bg-[#171717]"
          style={{ width: `${scrollProgress}%` }}
        />
      </span>
    </a>
  );
}
