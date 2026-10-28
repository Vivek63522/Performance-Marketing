"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import Button from "../ui/Button";

const services = [
  {
    letter: "P",
    title: "Performance Marketing",
    description:
      "Targeted Meta and Google ad campaigns optimized for high-intent lead generation, lower client acquisition costs, and scalable ROAS.",
    image: "/assets/resources/project-6.jpg",
    href: "/services/performance-marketing",
  },
  {
    letter: "S",
    title: "Social Media Marketing",
    description:
      "Build consistent brand authority and organic reach through high-impact Reels, engaging carousels, strategic content, and active community management.",
    image: "/assets/resources/project-7.jpg",
    href: "/services/social-media-marketing",
  },
  {
    letter: "O",
    title: "SEO & Online Visibility",
    description:
      "Data-driven keyword strategy, on-page optimization, and Google Business Profile (GMB) management to rank higher on search engines and attract local leads.",
    image: "/assets/resources/project-8.jpg",
    href: "/services/seo-online-visibility",
  },
  {
    letter: "E",
    title: "Email Marketing & Automation",
    description:
      "Nurture leads, re-engage inactive subscribers, and drive consistent conversions with automated lifecycle email sequences and segmented newsletters.",
    image: "/assets/resources/project-5.jpg",
    href: "/services/email-marketing",
  },
  {
    letter: "L",
    title: "LinkedIn Personal Branding",
    description:
      "Position founders, consultants, and leaders as trusted industry voices with strategic thought leadership, profile optimization, and organic inbound reach.",
    image: "/assets/resources/project-6.jpg",
    href: "/services/linkedin-branding",
  },
  {
    letter: "A",
    title: "AI Marketing Automation",
    description:
      "Streamline your marketing workflows, automated lead qualification, smart CRM integration, and customer journeys with intelligent AI-powered business tools.",
    image: "/assets/resources/project-7.jpg",
    href: "/services/ai-automation",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="flex flex-col md:flex-row w-[calc(100vw-40px)] md:w-180 h-auto md:h-82 xl:h-87.75 bg-white shadow-sm transition-shadow duration-300 relative group shrink-0 overflow-visible">
      {/* Left Image Section (~38% on desktop, 100% on mobile) */}
      <div className="w-full h-56 md:h-full md:w-[38%] relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* 3D Orange Ribbon Tag (Outside image wrapper so fold isn't clipped) */}
      <div className="absolute top-28 md:top-1/4 -translate-y-1/2 -left-2 bg-brand-secondary text-white w-15 h-17.5 xl:w-18 xl:h-20 flex items-center justify-center font-bold text-[24px] xl:text-[30px] z-20 shadow-sm">
        {service.letter}
        {/* Folded ribbon shadow/corner at the bottom left */}
        <div className="absolute top-full left-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-brand-secondary"></div>
      </div>

      {/* Right Content Section (~62% on desktop, 100% on mobile) */}
      <div className="w-full md:w-[62%] px-6 py-8 md:px-10 xl:px-12.5 relative flex flex-col justify-center bg-white z-10 overflow-hidden md:h-full">
        {/* CSS halftone dotted pattern in the bottom right */}
        <div
          className="absolute bottom-4 right-0 w-32 h-30 sm:w-32 sm:h-30 pointer-events-none"
          style={{
            backgroundImage: "url(/assets/shapes/dots-4.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
        />

        <h3 className="text-[24px]! font-bold md:text-[28px]! xl:text-[34px]! mb-3 md:mb-4 leading-snug! transition-colors! duration-300! group-hover:text-brand-base! font-heading text-brand-text-dark">
          {service.title}
        </h3>
        <p className="text-[15px]! sm:text-[16px]! text-brand-text leading-relaxed mb-6 xl:mb-8 max-w-[95%]">
          {service.description}
        </p>
        <div>
          <Button
            variant="base"
            href={service.href}
            className="relative group inline-flex items-center gap-4 px-7 py-3.5 font-bold text-sm uppercase tracking-wider overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Button Text */}
            <span className="relative z-10 font-bold tracking-wider">
              Read More
            </span>
          </Button>
        </div>

        {/* Border at bottom only */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-brand-base"></div>
      </div>
    </div>
  );
}

export default function OurServices() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Section className="relative overflow-hidden" aria-label="Our Services">
      <div className="absolute w-full h-[610px] bg-brand-gray top-0 left-0 z-0"></div>
      {/* Upper Gray Backdrop matching template specification */}
      <div className="absolute inset-x-0 top-0 h-[480px] sm:h-[540px] lg:h-[610px] bg-brand-gray -z-10 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Header Section */}
          <div className="text-center relative max-w-3xl mx-auto mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-3"
            >
              <img
                src="/assets/shapes/sec-title-s-1.png"
                alt="Section Icon"
                className="w-auto h-auto"
              />
              <h6 className="text-brand-text! text-[14px] font-semibold! uppercase tracking-wider m-0">
                Our Services
              </h6>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl! sm:text-4xl! lg:text-[44px]! font-bold text-brand-text-dark! leading-[1.2] font-heading mb-5 uppercase"
            >
              High-Impact Marketing Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-text text-[15px] sm:text-[16px] max-w-2xl mx-auto"
            >
              We help businesses build online visibility, generate qualified
              leads, and create sustainable growth by combining human
              creativity, performance marketing, and AI automation.
            </motion.p>
          </div>
        </motion.div>
      </Container>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full pb-8 px-3 lg:px-4 xl:px-6"
      >
        <Suspense fallback={<div className="h-96 w-full" />}>
          {isMounted ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView="auto"
              breakpoints={{
                1024: {
                  spaceBetween: 36,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={services.length >= 6}
              className="w-full"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="w-auto! pb-0 pt-4">
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex gap-6 overflow-hidden pt-4">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          )}
        </Suspense>
      </motion.div>
    </Section>
  );
}
