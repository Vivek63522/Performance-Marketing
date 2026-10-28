"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { FaPlus } from "react-icons/fa6";

const services = [
  {
    id: 1,
    title: (
      <>
        Performance <br /> Marketing
      </>
    ),
    rawTitle: "Performance Marketing",
    iconClass: "flaticon-advertising",
    image: "/assets/services/service-3-1.png",
    href: "/services/performance-marketing",
  },
  {
    id: 2,
    title: (
      <>
        Social Media <br /> Marketing
      </>
    ),
    rawTitle: "Social Media Marketing",
    iconClass: "flaticon-campaign",
    image: "/assets/services/service-3-3.png",
    href: "/services/social-media-marketing",
  },
  {
    id: 3,
    title: (
      <>
        SEO & Online <br /> Visibility
      </>
    ),
    rawTitle: "SEO & Online Visibility",
    iconClass: "flaticon-search-engine",
    image: "/assets/services/service-3-2.png",
    href: "/services/seo-online-visibility",
  },
  {
    id: 4,
    title: (
      <>
        Email <br /> Marketing
      </>
    ),
    rawTitle: "Email Marketing",
    iconClass: "flaticon-concept",
    image: "/assets/services/service-1-6.png",
    href: "/services/email-marketing",
  },
  {
    id: 5,
    title: (
      <>
        AI Marketing <br /> Automation
      </>
    ),
    rawTitle: "AI Marketing Automation",
    iconClass: "flaticon-brain-1",
    image: "/assets/services/service-1-4.png",
    href: "/services/ai-automation",
  },
  {
    id: 6,
    title: (
      <>
        LinkedIn Personal <br /> Branding
      </>
    ),
    rawTitle: "LinkedIn Personal Branding",
    iconClass: "flaticon-instructor",
    image: "/assets/services/service-1-5.png",
    href: "/services/linkedin-branding",
  },
];

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
  {
    id: 6,
    name: "Instagram Ads",
    image: "/assets/logo/instagram.png",
  },
  { id: 7, name: "SEO", image: "/assets/logo/SEO.png" },
  { id: 8, name: "Ai Automation", image: "/assets/logo/Automation.png" },
];

export default function ServicesGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4500, stopOnInteraction: false })],
  );

  const [brandEmblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  return (
    <>
      <Section variant="dark" className="relative overflow-hidden z-[1]">
        {/* Background Circuit/Tech Graphic */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20 bg-center bg-cover -z-10 bgslide"
          style={{
            backgroundImage: "url('/assets/shapes/service-shape-2-1.png')",
          }}
        />

        <Container>
          {/* Section Heading matching skill.md */}
          <div className="text-center mb-[50px] lg:mb-[70px]">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <img
                src="/assets/shapes/sec-title-s-1.png"
                alt="Section Icon"
                className="w-auto h-auto"
              />
              <span className="text-brand-base! font-body! text-[14px]! font-semibold uppercase tracking-wider! m-0">
                Our Core Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white! leading-[1.25] font-heading">
              Services We Provide to Scale <br className="hidden sm:inline" /> Your Brand & Revenue
            </h2>
          </div>

          {/* Embla Carousel Slider */}
          <div className="overflow-hidden pt-[55px]" ref={emblaRef}>
            <div className="flex -ml-[30px] touch-pan-y">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]  min-w-0"
                >
                  <div className="group relative block overflow-visible transition-all duration-500">
                    {/* Outer dark halo circle (122px) */}
                    <div className="absolute top-[-15px] left-0 ml-[45px] w-[122px] h-[122px] rounded-full bg-[#171717] -z-10 transition-colors duration-400 group-hover:bg-[#1a1b20]" />

                    <div className="relative z-10 select-none pointer-events-none">
                      {/* Inner icon circle (94px) */}
                      <div className="relative z-50 ml-[60px] -mb-[40px] w-[94px] h-[94px] rounded-full bg-brand-secondary flex items-center justify-center text-[45px] text-brand-base transition-all duration-500 ease-in-out group-hover:bg-brand-base group-hover:text-brand-secondary shadow-lg  ">
                        <i
                          className={`${service.iconClass} leading-none  [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[transform:rotateY(360deg)]`}
                        />
                      </div>
                    </div>

                    {/* Main Service Card Container */}
                    <div className="relative overflow-hidden  transition-all duration-500 ">
                      {/* Image Thumbnail Container */}
                      <div className="relative h-[280px] sm:h-[310px] w-full overflow-hidden group">
                        <img
                          src={service.image}
                          alt={service.rawTitle}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        {/* Vignette / dark overlay */}
                        <div className="absolute inset-0 bg-[#0d0e12]/30 transition-opacity  duration-500 group-hover:opacity-10" />
                      </div>

                      {/* Bottom Content Bar: Solid Gold on Card Hover, Dark Gradient by default */}
                      <div className="relative -mt-[35px] px-[30px] sm:px-[40px] py-[22px] z-1 flex items-center justify-between w-full overflow-hidden">
                        {/* Default Dark Gradient Layer */}
                        <div
                          className="absolute inset-0 transition-opacity duration-400 ease-in group-hover:opacity-0 -z-10"
                          style={{
                            background:
                              "linear-gradient(90deg, #171717 50%, rgba(23, 23, 23, 0) 126.12%)",
                          }}
                        />
                        {/* Hover Solid Yellow Layer */}
                        <div className="absolute inset-0 bg-brand-base opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100 -z-10" />

                        <h4 className="text-[24px] font-bold leading-[1.25] text-white! transition-colors duration-400 ease-in-out group-hover:text-[#171717] m-0 font-heading">
                          <Link
                            href={service.href}
                            className=" text-white! transition-colors duration-400 ease-in-out group-hover:text-brand-text-dark!"
                          >
                            {service.title}
                          </Link>
                        </h4>

                        {/* Clean Plus Icon: Pure White cross on Hover, Yellow cross with border by default */}
                        <Link
                          href={service.href}
                          className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] text-center rounded-full border border-brand-base/40 group-hover:border-transparent flex items-center justify-center transition-all duration-400 ease-in-out shrink-0 ml-4 group-hover:rotate-90  group-hover:text-brand-text-dark! hover:bg-white/90"
                          aria-label={`View ${service.rawTitle}`}
                        >
                          <FaPlus className="text-white! group-hover:text-brand-text-dark! text-center w-5 h-5 ease-in-out" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Owl Dots Pagination matching exact CSS */}
          <div className="mt-[60px]! -mb-[10px] flex items-center justify-center gap-[10px] mx-auto text-center">
            {(scrollSnaps.length > 0 ? scrollSnaps : services).map(
              (_, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="block my-[6px] mx-0 p-0 bg-transparent border-none outline-none cursor-pointer group"
                  >
                    <span
                      className={`w-[29.945px] h-[29.945px] flex justify-center items-center rounded-none transition-all duration-300 ${
                        isActive
                          ? "bg-[rgba(104,106,111,0.23)]"
                          : "bg-transparent group-hover:bg-[rgba(104,106,111,0.23)]"
                      }`}
                    >
                      <span
                        className={`block w-[10px] h-[10px] rounded-none transition-colors duration-300 ${
                          isActive
                            ? "bg-brand-base"
                            : "bg-brand-text-gray group-hover:bg-brand-base"
                        }`}
                      />
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </Container>
      </Section>

      {/* Brand Partners Swiper */}
      <div className="bg-brand-base py-[36px] lg:py-[46px] px-0 relative z-10 overflow-hidden shadow-inner">
        <Container>
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            ref={brandEmblaRef}
          >
            <div className="flex items-center -ml-6 touch-pan-y select-none">
              {brandLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] pl-6 min-w-0"
                >
                  <div className="flex items-center justify-center py-2 px-3 opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-9 sm:h-11 md:h-12 w-auto max-w-[140px] sm:max-w-[160px] object-contain pointer-events-none transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
