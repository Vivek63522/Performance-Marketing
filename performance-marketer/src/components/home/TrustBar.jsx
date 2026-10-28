"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Container from "../ui/Container";
import Button from "../ui/Button";

const brandLogos = [
  { id: 1, name: "Google Ads", image: "/assets/logo/GoogleAds.png" },
  { id: 2, name: "Meta Ads", image: "/assets/logo/Meta.png" },
  { id: 3, name: "LinkedIn Ads", image: "/assets/logo/LI-Logo.png" },
  {
    id: 4,
    name: "Google Analytics",
    image: "/assets/logo/GoogleAnalytics.png",
  },
  { id: 5, name: "Real States", image: "/assets/logo/RealStates.png" },
  { id: 6, name: "Instagram Ads", image: "/assets/logo/instagram.png" },
  { id: 7, name: "AI Automation", image: "/assets/logo/Automation.png" },
  { id: 8, name: "SEO", image: "/assets/logo/SEO.png" },
];

function PerformanceMarketingIcon({ className = "w-11 h-11" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label="A chart screen"
      viewBox="-0.0 -16.0 330.0 330.0"
      width="60"
      height="60"
    >
      <g transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)">
        <path
          d="M325 2755 c-47 -16 -91 -65 -105 -115 -6 -21 -10 -359 -10 -874 l0
-840 26 -37 c49 -71 -44 -67 1409 -67 1466 0 1364 -5 1413 72 l26 41 -3 855
-3 855 -26 39 c-15 22 -43 49 -62 60 -35 21 -43 21 -1330 23 -1096 2 -1301 0
-1335 -12z m2241 -300 c8 -21 -26 -297 -38 -312 -18 -22 -43 -14 -83 27 -21
22 -46 40 -53 40 -8 0 -38 -15 -66 -33 -28 -19 -79 -51 -114 -73 -34 -21 -104
-65 -155 -98 -50 -32 -117 -74 -147 -94 -30 -19 -74 -48 -97 -63 -23 -16 -46
-29 -51 -29 -5 0 -15 -7 -22 -15 -21 -26 -52 -17 -189 51 l-133 66 -42 -22
c-50 -28 -98 -57 -197 -119 -41 -27 -90 -56 -109 -66 -18 -9 -38 -21 -44 -26
-6 -5 -60 -41 -120 -79 -115 -74 -153 -85 -188 -53 -18 16 -24 59 -10 78 7 11
106 76 132 88 8 4 42 25 75 46 33 22 96 61 140 87 44 26 82 51 85 54 4 5 57
38 208 127 20 13 47 23 60 23 19 0 151 -59 202 -90 69 -43 86 -43 150 0 26 18
180 117 240 155 19 12 73 47 120 77 47 31 99 63 116 71 57 29 61 44 26 80 -55
56 -36 86 55 88 37 0 177 17 236 28 4 0 10 -6 13 -14z m-16 -494 c11 -21 15
-768 4 -809 -6 -22 -9 -23 -133 -20 l-126 3 -3 400 c-1 220 0 410 3 423 5 21
9 22 125 22 108 0 120 -2 130 -19z m-385 -213 c3 -13 4 -156 3 -318 l-3 -295
-124 -3 c-93 -2 -126 1 -133 10 -13 22 -10 602 4 616 8 8 52 12 130 12 114 0
118 -1 123 -22z m-396 -102 c8 -9 11 -87 9 -262 l-3 -249 -124 -3 c-93 -2
-126 1 -133 10 -12 19 -10 476 2 499 10 17 22 19 124 19 84 0 117 -4 125 -14z
m-391 -84 c9 -7 12 -57 10 -218 l-3 -209 -119 -3 c-66 -1 -123 1 -128 6 -10
10 -14 405 -4 421 8 13 224 15 244 3z m-398 -150 c20 -17 23 -27 24 -123 0
-57 -2 -117 -7 -132 l-8 -28 -122 3 -122 3 -3 129 c-3 166 -4 166 123 166 75
0 97 -4 115 -18z M1332 738 c-5 -7 -12 -49 -16 -93 -4 -44 -9 -106 -12 -137
l-6 -58 -149 0 c-138 0 -153 -2 -197 -24 -26 -13 -55 -38 -64 -54 -24 -40 -23
-113 1 -140 l18 -22 741 0 741 0 20 26 c27 34 26 66 -1 121 -37 74 -73 87
-258 93 l-155 5 -6 60 c-13 125 -20 191 -25 213 l-4 22 -309 0 c-235 0 -311
-3 -319 -12z"
        ></path>
      </g>
    </svg>
  );
}

function AiAutomationIcon({ className = "w-11 h-11" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label="An agent robot"
      viewBox="-12.0 -0.0 283.0 283.0"
      width="60"
      height="60"
    >
      <g transform="translate(0.000000,283.000000) scale(0.100000,-0.100000)">
        <path
          d="M1129 2641 c-48 -16 -80 -44 -112 -100 l-33 -55 -89 -12 c-122 -15
-190 -36 -260 -82 -109 -71 -180 -167 -220 -295 l-22 -72 -59 -7 c-32 -5 -70
-16 -84 -26 -46 -35 -51 -55 -48 -229 3 -160 3 -163 29 -188 20 -20 43 -29 98
-37 l71 -12 35 -72 c37 -76 97 -139 168 -175 101 -52 292 -72 687 -73 324 -1
529 14 625 46 119 39 201 112 250 221 l23 54 56 7 c77 9 103 21 126 58 18 29
20 51 20 183 0 99 -4 158 -13 174 -20 39 -58 61 -122 69 -57 7 -60 8 -68 42
-41 155 -105 254 -212 325 -71 47 -145 72 -253 86 -115 14 -126 19 -152 74
-14 29 -38 56 -63 73 -39 26 -46 27 -196 29 -86 1 -168 -1 -182 -6z m-102
-622 c49 -30 90 -91 104 -153 34 -152 -99 -301 -253 -283 -172 21 -263 223
-165 368 67 100 212 131 314 68z m774 8 c89 -47 140 -156 119 -253 -15 -65
-34 -97 -82 -138 -125 -108 -310 -51 -366 113 -36 103 19 230 123 284 48 25
152 22 206 -6z M505 1157 c-39 -28 -61 -54 -84 -97 -11 -19 -58 -69 -105 -110
-55 -49 -94 -92 -110 -124 -26 -49 -26 -54 -26 -262 0 -117 4 -224 10 -238 5
-14 24 -35 42 -47 43 -27 120 -22 151 10 20 20 22 30 19 141 -3 119 4 144 31
121 7 -5 19 -34 26 -63 29 -116 111 -221 209 -266 50 -23 76 -27 207 -33 198
-10 685 -10 855 0 102 6 146 13 181 28 93 42 172 136 210 254 23 69 41 95 58
85 8 -5 9 -43 5 -121 l-7 -114 31 -30 c24 -25 39 -31 72 -31 56 0 99 24 116
65 17 42 20 407 3 470 -8 31 -35 64 -122 150 -62 61 -119 125 -129 142 -24 47
-93 93 -139 93 -21 0 -50 -5 -64 -10 -53 -20 -209 -39 -412 -51 -312 -17 -790
10 -898 51 -43 16 -97 11 -130 -13z m1191 -309 c44 -24 54 -55 54 -176 0 -121
-14 -165 -65 -194 -59 -33 -383 -48 -620 -27 -200 17 -226 42 -228 217 -2 113
11 160 50 178 39 17 151 22 458 20 276 -1 324 -4 351 -18z"
        ></path>
      </g>
    </svg>
  );
}

export default function TrustBar() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white pt-10 sm:pt-14 overflow-hidden relative z-10">
      <Container>
        {/* Top Navigation Arrows Centered on Subtle Divider */}
        <div className="relative mb-8 sm:mb-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-[#e8eaed]" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-3 flex items-center gap-2">
              <button
                onClick={scrollPrev}
                aria-label="Previous partners"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-secondary text-white hover:bg-brand-base hover:text-brand-secondary flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <FaChevronLeft className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next partners"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-secondary text-white hover:bg-brand-base hover:text-brand-secondary flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <FaChevronRight className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Brand Logos Swiper (5 in a row on desktop) */}
        <div className="mb-14 sm:mb-20">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            ref={emblaRef}
          >
            <div className="flex items-center -ml-6 touch-pan-y">
              {brandLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] pl-6 min-w-0"
                >
                  <div className="flex items-center justify-center py-4 px-2 opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-300">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-8 sm:h-10 w-auto max-w-[140px] sm:max-w-[160px] object-contain pointer-events-none transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2 Big Orange Feature CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Performance Marketing & Paid Advertising */}
          <div className="relative group bg-brand-base p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-center transition-all duration-300">
            {/* Background Corner Wave Texture - attached seamlessly to top, right, and bottom */}
            <div className="absolute top-0 right-0 bottom-0 h-full pointer-events-none overflow-hidden select-none">
              <img
                src="/assets/shapes/cta-shape.png"
                alt="CTA Shape"
                className="h-full w-auto object-cover object-right"
              />
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
              {/* Dark Charcoal Icon Circle (No shadow) */}
              <div className="w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-full bg-brand-secondary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <PerformanceMarketingIcon className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
              </div>
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-[28px]! font-bold text-brand-text-dark uppercase tracking-normal leading-[1.25] m-0 font-heading">
                  Performance Marketing <br className="hidden sm:inline" />&
                  Paid Ad Campaigns
                </h3>
                {/* Discover More Button */}
                <div className="mt-4">
                  <Button
                    href="/services/performance-marketing"
                    variant="white"
                    className="w-fit"
                  >
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Marketing Automation & Workflows */}
          <div className="relative group bg-brand-base p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-center transition-all duration-300">
            {/* Background Corner Wave Texture - attached seamlessly to top, right, and bottom */}
            <div className="absolute top-0 right-0 bottom-0 h-full pointer-events-none overflow-hidden select-none">
              <img
                src="/assets/shapes/cta-shape.png"
                alt="CTA Shape"
                className="h-full w-auto object-cover object-right"
              />
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
              {/* Dark Charcoal Icon Circle (No shadow) */}
              <div className="w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-full bg-brand-secondary text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <AiAutomationIcon className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
              </div>
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-[28px]! font-bold text-brand-text-dark uppercase tracking-normal leading-[1.25] m-0 font-heading">
                  AI Marketing & <br className="hidden sm:inline" />
                  Workflow Automation
                </h3>
                {/* Discover More Button */}
                <div className="mt-4">
                  <Button
                    href="/services/ai-automation"
                    variant="white"
                    className="w-fit"
                  >
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
