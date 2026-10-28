"use client";
import React from "react";
import Link from "next/link";

export default function Logo({
  variant = "header",
  iconClassName = "h-10 sm:h-11 md:h-12 w-auto",
  className = "",
  onClick,
}) {
  const isLightText = variant === "light";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`shrink-0 flex items-center gap-2.5 sm:gap-3 group select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="Manish Verma Consulting - Home"
    >
      {/* Skyscraper & Growth Emblem from logo.jpeg */}
      <img
        src={isLightText ? "/assets/logo-icon-white.png" : "/assets/logo-icon.png"}
        alt="Manish Verma Consulting Logo"
        className={`${iconClassName} object-contain transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Responsive Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-heading font-extrabold uppercase tracking-tight text-[17px] sm:text-[20px] lg:text-[22px] leading-tight ${
            isLightText ? "text-white" : "text-brand-text-dark"
          }`}
          style={{ letterSpacing: "0.02em" }}
        >
          Manish Verma
        </span>
        <span
          className={`font-sans font-bold uppercase text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.25em] sm:tracking-[0.28em] mt-0.5 sm:mt-1 ${
            isLightText ? "text-[#d4a340]" : "text-brand-base"
          }`}
        >
          Consulting
        </span>
      </div>
    </Link>
  );
}
