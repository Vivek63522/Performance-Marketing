"use client";

import React from "react";

/**
 * PinwheelLoader Component
 * Inspired by Uiverse.io (by dovatgabriel)
 * Re-architected with Tailwind CSS & CSS variables for high performance & flexibility.
 *
 * @param {number|string} size - Size of the loader (width & height in px or css string). Default 48.
 * @param {number|string} lineWeight - Thickness of each rotating line. Default 4.
 * @param {string} speed - Duration of the rotation animation. Default "0.8s".
 * @param {string} color - Color of the pinwheel lines. Defaults to brand base (#ffaa17) or custom color.
 * @param {string} className - Additional CSS classes.
 */
export default function PinwheelLoader({
  size = 48,
  lineWeight = 4,
  speed = "0.8s",
  color = "var(--color-brand-base, #ffaa17)",
  className = "",
}) {
  const lineDelays = [
    { delay: "0s", opacity: 1 },
    { delay: `calc(${speed} * 0.075)`, opacity: 0.8 },
    { delay: `calc(${speed} * 0.15)`, opacity: 0.6 },
    { delay: `calc(${speed} * 0.225)`, opacity: 0.4 },
    { delay: `calc(${speed} * 0.3)`, opacity: 0.2 },
    { delay: `calc(${speed} * 0.375)`, opacity: 0.1 },
  ];

  const formattedSize = typeof size === "number" ? `${size}px` : size;
  const formattedWeight =
    typeof lineWeight === "number" ? `${lineWeight}px` : lineWeight;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        width: formattedSize,
        height: formattedSize,
        "--uib-size": formattedSize,
        "--uib-speed": speed,
        "--uib-color": color,
        "--uib-line-weight": formattedWeight,
      }}
      role="status"
      aria-label="Loading..."
    >
      {lineDelays.map((line, idx) => (
        <span
          key={idx}
          className="absolute left-0 w-full animate-pinwheel pointer-events-none"
          style={{
            top: `calc(50% - (${formattedWeight} / 2))`,
            height: formattedWeight,
            borderRadius: `calc(${formattedWeight} / 2)`,
            backgroundColor: color,
            animationDelay: line.delay,
            opacity: line.opacity,
          }}
        />
      ))}
    </div>
  );
}
