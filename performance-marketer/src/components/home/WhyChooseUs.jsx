"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";

const chooseUsServices = [
  {
    id: 1,
    title: "Strategy First",
    description:
      "We build marketing strategies around your business goals, audience and offer.",
    iconClass: "flaticon-concept",
    href: "/services",
  },
  {
    id: 2,
    title: "Multi-Channel Marketing",
    description:
      "Social media, paid ads, email, SEO and personal branding working together.",
    iconClass: "flaticon-campaign",
    href: "/services",
  },
  {
    id: 3,
    title: "AI-Powered",
    description:
      "We use AI to improve marketing workflows, research, content and efficiency",
    iconClass: "flaticon-brain",
    href: "/services",
  },
  {
    id: 4,
    title: "Data-Driven",
    description:
      "We track meaningful metrics to understand what is working and where to improve.",
    iconClass: "flaticon-search-engine",
    href: "/services",
  },
  {
    id: 5,
    title: "Customized Solutions",
    description:
      "Every business is different. Your marketing strategy should be too.",
    iconClass: "flaticon-design-2",
    href: "/services",
  },
  {
    id: 6,
    title: "Growth & ROI Focused",
    description:
      "We optimize ad spend and funnels to maximize return on investment and revenue.",
    iconClass: "flaticon-advertising",
    href: "/services",
  },
];

export default function WhyChooseUs() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smoothly advance 1 item at a time in a continuous loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % chooseUsServices.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Show exactly 2 items at any given moment
  const visibleItems = [
    chooseUsServices[startIndex],
    chooseUsServices[(startIndex + 1) % chooseUsServices.length],
  ];

  return (
    <Section variant="gray" className="relative  overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:max-w-[570px] xl:max-w-[620px] relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <img
                src="/assets/shapes/sec-title-s-1.png"
                alt="Section Icon"
                className="w-auto h-auto"
              />
              <span className="text-brand-text! font-body! text-[14px]! font-semibold  uppercase tracking-wider! m-0">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold leading-[1.25] text-brand-text-dark font-heading m-0">
              Why You should Choose Our Technology Company?
            </h3>

            {/* Ultra-Smooth 1-by-1 Animated Features List (2 items visible) */}
            <div
              className="mt-8 min-h-[210px] sm:min-h-[225px] overflow-hidden relative flex flex-col justify-start"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 35, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -35, scale: 0.98 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-4 sm:gap-5 py-4 sm:py-5 border-b border-[#e2e4e8] transition-all duration-300"
                    >
                      {/* Left Dark Icon Box */}
                      <div className="w-[70px] h-[70px] sm:w-[86px] sm:h-[86px]  bg-[#1a1b20] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 ml-2">
                        <i
                          className={`${item.iconClass} text-[34px] sm:text-[38px] text-brand-base leading-none transition-transform duration-500 group-hover:scale-110 ease-in-out group-hover:transform-[scale(-1)_rotate(180deg)]`}
                        />
                      </div>

                      {/* Middle Content */}
                      <div className="flex-1 min-w-0 pr-1">
                        <h4 className="text-[18px] sm:text-[20px] font-bold text-brand-text-dark leading-[1.3] font-heading m-0 transition-colors duration-300 group-hover:text-brand-base">
                          {item.title}
                        </h4>
                        <p className="text-[14px] sm:text-[15px] text-brand-text leading-[1.55] mt-1 m-0">
                          {item.description}
                        </p>
                      </div>

                      {/* Right Circular Arrow Button */}
                      <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-brand-base flex items-center justify-center text-brand-text-dark shrink-0 transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-white shadow-sm ml-2 sm:ml-4">
                        <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Get In Touch CTA */}
            <div className="mt-8">
              <Button href="/contact" variant="base">
                Get In Touch
              </Button>
            </div>

            {/* Mobile / Tablet Image fallback */}
            <div className="block lg:hidden mt-10 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/assets/resources/why-choos-us-3-1.png"
                alt="Why Choose Us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Desktop Right Side Image */}
          <div className="absolute top-0 right-0 w-[42%] h-full z-1 hidden lg:block pointer-events-none">
            <img
              src="/assets/resources/why-choos-us-3-1.png"
              alt="Why Choose Us"
              className="w-full h-full object-cover object-center pointer-events-auto"
            />
          </div>
        </div>
      </Container>

      {/* Decorative Geometric Shape */}
      <div className="absolute top-0 right-0 w-[63%]   z-0 pointer-events-none hidden lg:block">
        <img
          src="/assets/shapes/why-choose-2-1.png"
          alt="shape"
          className="w-full h-auto object-cover"
        />
      </div>
    </Section>
  );
}
