"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorDotWrapperRef = useRef<HTMLDivElement>(null);
  const cursorOutlineWrapperRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const endX = useRef(0);
  const endY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let isActive = true;
    
    // Smooth lerp function for trailing effect
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const onMouseMove = (e: MouseEvent) => {
      endX.current = e.clientX;
      endY.current = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Dot follows exactly with the mouse instantly
      if (cursorDotWrapperRef.current) {
        cursorDotWrapperRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const animate = () => {
      if (!isActive) return;
      currentX = lerp(currentX, endX.current, 0.2);
      currentY = lerp(currentY, endY.current, 0.2);

      // Outline follows with a slight delay
      if (cursorOutlineWrapperRef.current) {
        cursorOutlineWrapperRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      isActive = false;
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible]);

  // Hover states for links and buttons, and dynamic color based on background
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Determine background color of the target or its closest ancestor
      let bgColor = "rgba(0, 0, 0, 0)";
      let currentElem: HTMLElement | null = target;
      
      while (currentElem) {
        const style = window.getComputedStyle(currentElem);
        if (style.backgroundColor !== "rgba(0, 0, 0, 0)" && style.backgroundColor !== "transparent") {
          bgColor = style.backgroundColor;
          break;
        }
        currentElem = currentElem.parentElement;
      }

      // Check if background is yellow (brand-base #ffaa17 -> rgb(255, 170, 23))
      const isYellowBg = bgColor === "rgb(255, 170, 23)" || bgColor === "rgba(255, 170, 23, 1)" || (currentElem && currentElem.classList.contains("bg-brand-base"));

      const isClickable = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable");

      // Reset classes
      cursorOutlineRef.current?.className.split(" ").forEach(cls => {
        if (cls.startsWith("border-") || cls.startsWith("bg-") || cls.startsWith("scale-")) {
          // keep some base classes
        }
      });
      // A cleaner way is to toggle specific classes:
      if (isYellowBg) {
        cursorOutlineRef.current?.classList.remove("border-brand-base");
        cursorOutlineRef.current?.classList.add("border-[#232429]");
        cursorDotRef.current?.classList.remove("bg-brand-base");
        cursorDotRef.current?.classList.add("bg-[#232429]");
      } else {
        cursorOutlineRef.current?.classList.remove("border-[#232429]");
        cursorOutlineRef.current?.classList.add("border-brand-base");
        cursorDotRef.current?.classList.remove("bg-[#232429]");
        cursorDotRef.current?.classList.add("bg-brand-base");
      }

      if (isClickable) {
        cursorDotRef.current?.classList.add("scale-0");
        cursorOutlineRef.current?.classList.add("scale-[1.8]", "border-transparent");
        
        if (isYellowBg) {
          cursorOutlineRef.current?.classList.add("bg-[#232429]/20");
          cursorOutlineRef.current?.classList.remove("bg-brand-base/10");
        } else {
          cursorOutlineRef.current?.classList.add("bg-brand-base/10");
          cursorOutlineRef.current?.classList.remove("bg-[#232429]/20");
        }
      } else {
        cursorDotRef.current?.classList.remove("scale-0");
        cursorOutlineRef.current?.classList.remove("scale-[1.8]", "border-transparent", "bg-brand-base/10", "bg-[#232429]/20");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOutlineWrapperRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden lg:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={cursorOutlineRef}
          className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-[1.5px] border-brand-base rounded-full transition-[background-color,border-color,opacity,transform] duration-300 ease-out will-change-transform ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <div
        ref={cursorDotWrapperRef}
        className="fixed top-0 left-0 pointer-events-none z-[100000] hidden lg:block"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={cursorDotRef}
          className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-brand-base rounded-full transition-[transform,opacity] duration-300 ease-out will-change-transform ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </>
  );
}
