"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import "./hero.css";

const slides = [
  {
    id: 1,
    image: "/assets/background/slider-1-1.jpg",
    eyebrow: "Data-Driven Growth Agency",
    titleLine1: "Performance Marketing",
    titleLine2: "That Scales ROI",
  },
  {
    id: 2,
    image: "/assets/background/slider-1-2.jpg",
    eyebrow: "Targeted Paid Advertising",
    titleLine1: "Maximize ROAS With",
    titleLine2: "High-Impact Ads",
  },
  {
    id: 3,
    image: "/assets/background/slider-1-3.jpg",
    eyebrow: "Full-Funnel Conversion Strategy",
    titleLine1: "Turn Ad Spend Into",
    titleLine2: "Predictable Revenue",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 7000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative z-20">
      <div
        className="main-slider-two main-slider-two__carousel overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex-[0_0_100%] min-w-0 relative h-full ${index === selectedIndex ? "active" : ""}`}
            >
              <div className="main-slider-two__item">
                <div
                  className="main-slider-two__bg"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
                  <div className="main-slider-two__content">
                    <h5 className="main-slider-two__sub-title">
                      {slide.eyebrow}
                    </h5>
                    <h2 className="main-slider-two__title">
                      {slide.titleLine1} <br /> {slide.titleLine2}
                      <span className="main-slider-two__title__overlay-group">
                        <span className="main-slider-two__title__overlay"></span>
                        <span className="main-slider-two__title__overlay"></span>
                        <span className="main-slider-two__title__overlay"></span>
                        <span className="main-slider-two__title__overlay"></span>
                        <span className="main-slider-two__title__overlay"></span>
                        <span className="main-slider-two__title__overlay"></span>
                      </span>
                    </h2>
                    <div className="main-slider-two__link flex gap-4">
                      <Button href="/services" variant="base">
                        Discover More
                      </Button>
                      <Button href="/contact" variant="secondary">
                        Take Service
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="main-slider-two__item__shape">
                  <img src="/assets/shapes/frame-hero-2-1.png" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="owl-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`owl-dot ${index === selectedIndex ? "active" : ""}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-30 hidden md:block">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex justify-end -mt-[185px]">
            <div className="group w-full max-w-[231px] h-auto bg-brand-base hover:bg-brand-secondary px-[40px] pb-[40px] pt-0 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl ">
              <div>
                <div className="w-[88px] h-[78px] flex items-center justify-center bg-black/10 group-hover:bg-white/10 mb-[16px] transition-all duration-500 ease-in-out">
                  <i className="flaticon-campaign text-[44px] text-brand-text-dark group-hover:text-brand-base  transition-transform duration-500 ease-in-out group-hover:transform-[scale(-1)_rotate(180deg)]" />
                </div>
                <h2 className="flex items-center text-[50px] font-bold leading-[1.2] text-brand-text-dark group-hover:text-brand-base! mb-0 pb-0 transition-colors duration-500 ease-in-out">
                  <span className="count-text">350</span>
                  <span>%</span>
                </h2>
                <p className="text-brand-text-dark group-hover:text-white font-medium text-[16px] leading-[1.2] -mb-[5px] pb-0 transition-colors duration-500 ease-in-out">
                  Average Growth
                </p>
              </div>
            </div>

            <div className="group w-full max-w-[231px] h-auto bg-brand-base hover:bg-brand-secondary px-[40px] pb-[40px] pt-0 transition-all duration-500 ease-in-out cursor-pointer hover:shadow-2xl ">
              <div>
                <div className="w-[88px] h-[78px] flex items-center justify-center bg-black/10 group-hover:bg-white/10 mb-[16px] transition-all duration-500 ease-in-out">
                  <i className="flaticon-satisfaction text-[44px] text-brand-text-dark group-hover:text-brand-base transition-transform duration-500 ease-in-out group-hover:transform-[scale(-1)_rotate(180deg)]" />
                </div>
                <h2 className="flex items-center text-[50px] font-bold leading-[1.2] text-brand-text-dark group-hover:text-brand-base! mb-0 pb-0 transition-colors duration-500 ease-in-out">
                  <span className="count-text">100</span>
                  <span>%</span>
                </h2>
                <p className="text-brand-text-dark group-hover:text-white font-medium text-[16px] leading-[1.2] -mb-[5px] pb-0 transition-colors duration-500 ease-in-out">
                  Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
