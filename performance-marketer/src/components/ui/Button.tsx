import Link from "next/link";
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonButtonProps = {
  children: React.ReactNode;
  variant?: "base" | "secondary" | "outline" | "icon";
  className?: string;
};

type ButtonAsButton = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  href,
  variant = "base",
  className = "",
  ...props
}: ButtonProps) {
  // Shared base styles matching ostech-btn specification
  const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center align-middle text-center " +
    "font-semibold text-[16px] leading-[112.5%] font-['Barlow',sans-serif] " +
    "transition-all duration-500 outline-none border-none select-none z-[1] group cursor-pointer " +
    "focus-visible:ring-2 focus-visible:ring-brand-base focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-60 " +
    // ::before animation: starts top-left with 0 width, expands to 100% on hover
    "before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-[50%] " +
    "before:transition-all before:duration-300 before:ease-[cubic-bezier(0.785,0.135,0.15,0.86)] before:z-0 " +
    "hover:before:w-full group-hover:before:w-full " +
    // ::after animation: starts bottom-right with 0 width, expands to 100% on hover
    "after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[50%] " +
    "after:transition-all after:duration-300 after:ease-[cubic-bezier(0.785,0.135,0.15,0.86)] after:z-0 " +
    "hover:after:w-full group-hover:after:w-full";

  // Variant color definitions
  const variants = {
    // Primary / Base: Orange background, dark text -> dark background slides in, text turns white
    base: "bg-brand-base text-brand-text-dark! hover:text-white! before:bg-brand-secondary after:bg-brand-secondary px-[40px] py-[19px]",

    // Secondary: Dark background, white text -> orange background slides in, text turns dark
    secondary:
      "bg-brand-secondary text-white! hover:text-brand-text-dark! before:bg-brand-base after:bg-brand-base px-[40px] py-[19px]",

    // Outline: Bordered style with sliding brand background on hover
    outline:
      "border-2 border-brand-base bg-transparent text-brand-text-dark! hover:text-white! before:bg-brand-base after:bg-brand-base px-[38px] py-[17px]",

    // Icon button: Circular icon container
    icon: "bg-brand-base text-brand-text-dark! hover:text-white! before:bg-brand-secondary after:bg-brand-secondary w-12 h-12 rounded-full p-0 flex-shrink-0",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  // Content wrapped in relative z-10 so it cleanly stays above the animated pseudo-elements
  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-300">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
