"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { RxStarFilled } from "react-icons/rx";
import { IoMdQuote } from "react-icons/io";
const testimonials = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Customer",
    content:
      "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
    image: "/assets/resources/testi-1-5.jpg",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Customer",
    content:
      "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
    image: "/assets/resources/testi-1-6.jpg",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Customer",
    content:
      "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
    image: "/assets/resources/testi-1-1.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Customer",
    content:
      "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
    image: "/assets/resources/testi-1-3.jpg",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Customer",
    content:
      "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
    image: "/assets/resources/testi-1-4.jpg",
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Customer",
    content:
      "There are many variations of passages lorem ipsum available, but the majority have suffered alteration in some form,",
    image: "/assets/resources/testi-1-2.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
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
    <Section className="relative bg-white py-[90px] md:py-[110px] lg:py-[125px] overflow-hidden">
      {/* 4 Floating Background Avatars matching reference screenshot */}
      <div className="pointer-events-none select-none">
        {/* Top-Left Avatar */}
        <div className="absolute top-[13%] left-[2%] xl:left-[4%] hidden md:block z-0">
          <img
            src="/assets/resources/testi-1-3.jpg"
            alt="Customer avatar"
            className="w-[84px] h-[84px] lg:w-[150px] lg:h-[150px] rounded-full object-cover animate-pulse"
          />
        </div>

        {/* Bottom-Left Avatar */}
        <div className="absolute bottom-[13%] left-[1.5%] xl:left-[3.5%] hidden md:block z-0">
          <img
            src="/assets/resources/testi-1-1.jpg"
            alt="Customer avatar"
            className="w-[78px] h-[78px] lg:w-[96px] lg:h-[96px] rounded-full object-cover animate-pulse"
          />
        </div>

        {/* Top-Right Avatar */}
        <div className="absolute top-[13%] right-[2%] xl:right-[4%] hidden md:block z-0">
          <img
            src="/assets/resources/testi-1-4.jpg"
            alt="Customer avatar"
            className="w-[84px] h-[84px] lg:w-[140px] lg:h-[140px] rounded-full object-cover animate-pulse"
          />
        </div>

        {/* Bottom-Right Avatar */}
        <div className="absolute bottom-[13%] right-[1.5%] xl:right-[3.5%] hidden md:block z-0">
          <img
            src="/assets/resources/testi-1-2.jpg"
            alt="Customer avatar"
            className="w-[78px] h-[78px] lg:w-[94px] lg:h-[94px] rounded-full object-cover animate-pulse"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-[45px] lg:mb-[60px]">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <img
              src="/assets/shapes/sec-title-s-1.png"
              alt="Section Icon"
              className="w-auto h-auto"
            />
            <span className="text-brand-text! font-body! text-[14px]! font-semibold  uppercase tracking-wider! m-0">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-brand-text-dark leading-[1.25] font-heading m-0">
            What Customers are <br className="hidden sm:block" /> Saying?
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden pb-14" ref={emblaRef}>
          <div className="flex -ml-2">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] pl-6 sm:pl-8 min-w-0"
              >
                <div className="group relative bg-white border border-border pt-12.5 px-10   transition-all duration-400 hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.08)] h-full flex flex-col justify-between">
                  <div>
                    {/* 5 Yellow Stars */}
                    <div className="flex items-center gap-1.5 mb-5 text-brand-base">
                      {[...Array(5)].map((_, i) => (
                        <RxStarFilled
                          key={i}
                          className="w-[36px] h-[36px] fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-brand-text text-[16px] sm:text-[22px] leading-[1.7] mb-8 font-normal ">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Author Row */}
                  <div className="flex items-center gap-4 relative z-10 mb-4 sm:mb-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-[18px] font-bold text-brand-text-dark font-heading m-0 leading-tight">
                        {testimonial.name}
                      </h4>
                      <span className="text-[13px] text-brand-text-gray font-medium block mt-0.5">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Right Quote Mark Box */}
                  <div className=" absolute bottom-0 right-0 w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] flex items-center justify-center transition-all duration-400 shadow-sm bg-brand-gray group-hover:bg-brand-base group-hover:text-brand-text-dark">
                    <IoMdQuote className="text-[32px] transition-transform duration-300 " />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 61 38"
                    className="w-[66px] h-[60px] fill-border absolute left-10 -bottom-[50px]"
                  >
                    <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
