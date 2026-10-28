import Link from "next/link";
import React from "react";

export default function Button({
  children,
  href,
  variant = "base",
  isActive = false,
  className = "",
  ...props
}) {
  // Shared base styles matching   specification
  const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center align-middle text-center " +
    "font-semibold text-[16px] leading-[112.5%] font-heading " +
    "transition-all duration-500 outline-none border-none select-none z-[1] cursor-pointer " +
    "focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-60 " +
    // ::before animation: starts top-left with 0 width, expands to 100% on hover or when isActive is true
    "before:content-[''] before:absolute before:top-0 before:left-0 before:h-[50%] " +
    "before:transition-all before:duration-300 before:ease-[cubic-bezier(0.785,0.135,0.15,0.86)] before:z-0 " +
    (isActive ? "before:w-full " : "before:w-0 hover:before:w-full ") +
    // ::after animation: starts bottom-right with 0 width, expands to 100% on hover or when isActive is true
    "after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-[50%] " +
    "after:transition-all after:duration-300 after:ease-[cubic-bezier(0.785,0.135,0.15,0.86)] after:z-0 " +
    (isActive ? "after:w-full" : "after:w-0 hover:after:w-full");

  // Variant color definitions
  const variants = {
    // Primary / Base: Orange background, dark text -> dark background slides in, text turns white
    base: "bg-brand-base text-brand-text-dark! hover:text-white! before:bg-brand-secondary after:bg-brand-secondary px-[40px] py-[19px]",

    // Secondary: Dark background, white text -> orange background slides in, text turns dark
    secondary:
      "bg-brand-secondary text-white! hover:text-brand-text-dark! before:bg-brand-base after:bg-brand-base px-[40px] py-[19px]",
    white:
      "bg-white! text-brand-text-dark! hover:text-white! before:bg-brand-secondary after:bg-brand-secondary px-[40px] py-[19px]",
    dark: "bg-brand-text-dark! text-white! hover:text-brand-text-dark! before:bg-white after:bg-white px-[40px] py-[19px]",

    // Tab / Toggle: Light background, dark text -> orange background slides in on hover or when active
    tab: "bg-[#f4f5f8] text-brand-text-dark! before:bg-brand-base after:bg-brand-base px-[36px] py-[14px]",

    // Outline: Bordered style with sliding brand background on hover
    outline:
      "border-2 border-brand-base bg-transparent text-brand-text-dark! hover:text-white! before:bg-brand-base after:bg-brand-base px-[38px] py-[17px]",

    // Icon button: Circular icon container
    icon: "bg-brand-base text-brand-text-dark! hover:text-white! before:bg-brand-secondary after:bg-brand-secondary w-12 h-12 rounded-full p-0 flex-shrink-0",
  };

  const classes =
    `${baseStyles} ${variants[variant] || variants.base} ${className}`.trim();

  // Content wrapped in relative z-10 so it cleanly stays above the animated pseudo-elements
  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2 text-inherit transition-colors duration-300">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
