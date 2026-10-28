"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import PinwheelLoader from "./PinwheelLoader";

/**
 * PageLoader Component
 * Full-screen preloader featuring the pinwheel animation.
 * Active on initial page load as well as on every route navigation (e.g. Home to Blog, Contact, etc.).
 */
export default function PageLoader() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const navStartTime = useRef(Date.now());
  const safetyTimerRef = useRef(null);
  const dismissTimerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  // Trigger loader start
  const startLoading = () => {
    navStartTime.current = Date.now();
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);

    setIsMounted(true);
    setIsLoading(true);

    // Fallback safety timeout (4s) so loader is never permanently stuck
    safetyTimerRef.current = setTimeout(() => {
      stopLoading();
    }, 4000);
  };

  // Trigger smooth loader dismissal
  const stopLoading = () => {
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);

    const elapsed = Date.now() - navStartTime.current;
    // Guarantee a minimum display duration (450ms) so the animation feels smooth and intentional
    const minDisplay = 450;
    const remaining = Math.max(0, minDisplay - elapsed);

    dismissTimerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, remaining);
  };

  // 1. Initial Page Load (first time landing on or refreshing the website)
  useEffect(() => {
    const handleInitialComplete = () => {
      stopLoading();
    };

    if (document.readyState === "complete") {
      handleInitialComplete();
    } else {
      window.addEventListener("load", handleInitialComplete);
    }

    const initialSafety = setTimeout(handleInitialComplete, 2500);

    return () => {
      window.removeEventListener("load", handleInitialComplete);
      clearTimeout(initialSafety);
    };
  }, []);

  // 2. Client-side Route Changes: Detect when Next.js finishes navigating to the new pathname
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // New page route has mounted, fade out smoothly
      stopLoading();
    }
  }, [pathname]);

  // 3. Intercept Link clicks across the page for seamless route transitions
  useEffect(() => {
    const handleLinkClick = (e) => {
      // Don't intercept if non-primary click or modifier keys are pressed
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore hash anchors (#), javascript:, mailto:, tel:
      if (
        href.startsWith("#") ||
        href.startsWith("javascript:") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Ignore external tabs or file downloads
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      try {
        const targetUrl = new URL(anchor.href, window.location.href);

        // Only handle internal links on same origin
        if (targetUrl.origin !== window.location.origin) return;

        // Ignore if clicking the exact current page
        if (
          targetUrl.pathname === window.location.pathname &&
          targetUrl.search === window.location.search
        ) {
          return;
        }

        // Show page loader on navigation start!
        startLoading();
      } catch (err) {
        // Ignore URL parsing errors
      }
    };

    // Listen for browser Back/Forward navigation
    const handlePopState = () => {
      if (window.location.pathname !== prevPathname.current) {
        startLoading();
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // 4. Handle fade-out transition completion and body scroll locking
  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = "";
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 500); // matches duration-500
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isLoading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {/* Ambient background glow matching brand palette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,170,23,0.12)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center select-none">
        {/* Pinwheel with soft radiant glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -m-3 bg-brand-base/20 rounded-full blur-xl animate-pulse pointer-events-none" />
          <PinwheelLoader
            size={54}
            lineWeight={4.5}
            color="#ffaa17"
            speed="0.8s"
          />
        </div>

        {/* Agency Brand Text & Loading Indicator */}
        <div className="flex flex-col items-center gap-2.5 mt-6">
          <h5 className="font-bold tracking-[0.28em] text-brand-secondary uppercase font-heading">
            Performance Marketer
          </h5>

          {/* Minimalist animated progress track */}
          <div className="w-28 h-[2.5px] bg-brand-border rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-full bg-brand-base rounded-full animate-loader-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
