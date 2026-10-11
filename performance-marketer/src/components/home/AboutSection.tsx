"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-[80px] md:py-[100px] lg:py-[120px] bg-white relative overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-[15px]">
        <div className="flex flex-wrap -mx-[15px] -mt-[30px] items-center">
          {/* Left Column: Image Collage & Animated Elements */}
          <motion.div 
            className="w-full lg:w-1/2 px-[15px] pt-[30px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-1 xl:mr-[50px] lg:mr-[20px] mr-0">
              {/* Top Image */}
              <div className="w-full h-full max-w-[228px] max-h-[228px] sm:max-w-[328px] sm:max-h-[328px] overflow-hidden ml-0 sm:-ml-[100px]">
                <img
                  className="object-cover w-full h-full"
                  src="/assets/about/about-s-3-1.png"
                  alt="about image"
                />
              </div>

              {/* Bottom Masked Image */}
              <div
                className="-mt-[125px] w-auto h-[300px] sm:h-[400px] lg:h-[470px] bg-brand-base ml-0 sm:-ml-[20px]"
                style={{
                  WebkitMaskImage: "url('/assets/mask1.svg')",
                  maskImage: "url('/assets/mask1.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "top center",
                  maskPosition: "top center",
                  WebkitMaskSize: "auto",
                  maskSize: "auto",
                }}
              >
                <img
                  className="object-cover w-full h-full"
                  src="/assets/about/about-3-1.png"
                  alt="about image"
                />
              </div>

              {/* Call-to-action Badge */}
              <div className="absolute top-[40px] lg:top-[60px] right-0 inline-flex justify-center items-center gap-[15px] lg:gap-[30px] bg-brand-secondary py-[10px] px-[15px] sm:px-[20px] lg:py-[20px] lg:px-[40px] group">
                <div className="w-[40px] h-[40px] text-[20px] sm:w-[60px] sm:h-[60px] sm:text-[30px] lg:w-[87px] lg:h-[87px] lg:text-[40px] bg-brand-base rounded-full text-brand-secondary flex justify-center items-center transition-all duration-500 ease-in-out group-hover:bg-white group-hover:text-brand-base">
                  <i className="flaticon-discuss"></i>
                </div>
                <div>
                  <span className="text-[14px] sm:text-[16px] lg:text-[20px] text-brand-text-gray block font-semibold leading-normal">
                    Call to anytime
                  </span>
                  <h5 className="font-bold text-brand-base text-[18px] leading-[30px] sm:text-[24px] sm:leading-[40px] lg:text-[30px] lg:leading-[50px] m-0 p-0">
                    <a
                      href="tel:+92-3080-808"
                      className="text-brand-base hover:text-brand-base bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px]"
                    >
                      +92 3080 808
                    </a>
                  </h5>
                </div>
              </div>

              {/* Animated Decorative Yellow Outline Frame */}
              <div className="absolute bottom-[40px] right-0 sm:right-[100px] h-[250px] w-full bg-transparent border-[30px] border-brand-base -z-10 left-to-right pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Performance Marketing Content */}
          <motion.div 
            className="w-full lg:w-1/2 px-[15px] pt-[30px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Section Tag / Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Section Icon"
                  className="w-auto h-auto"
                />
                <h6 className="text-brand-text! text-[14px] font-medium! uppercase tracking-wider m-0">
                  ABOUT US
                </h6>
              </div>

              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-brand-text-dark leading-[1.2] font-['Barlow',sans-serif] mb-5">
                Provide High-Impact Performance Solutions to Scale Your Revenue
              </h2>

              {/* Description Paragraph */}
              <p className="text-brand-text text-[16px] leading-[1.8] mb-8">
                We are a dedicated performance marketing agency engineered to
                scale ambitious businesses profitably. By uniting data-driven
                paid advertising, high-velocity creative testing, and end-to-end
                conversion rate optimization, we transform ad spend into
                predictable revenue.
              </p>

              {/* 2 Feature Columns with Separator */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pb-7">
                {/* Feature 1 */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-secondary text-brand-base flex items-center justify-center flex-shrink-0 text-xl transition-all duration-300 hover:bg-brand-base hover:text-brand-secondary cursor-pointer shadow-sm">
                      <i className="flaticon-advertising text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-brand-text-dark font-bold text-lg sm:text-[19px] leading-snug font-['Barlow',sans-serif] mb-1">
                        Paid Media &<br />
                        Scale Strategy
                      </h4>
                    </div>
                  </div>
                  <p className="text-brand-text text-sm leading-relaxed mt-2">
                    Multi-channel PPC & social ad campaigns targeted for maximum
                    ROAS.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="sm:border-l sm:border-brand-border sm:pl-8">
                  <div className="flex items-start gap-4 ">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-secondary text-brand-base flex items-center justify-center flex-shrink-0 text-xl transition-all duration-300 hover:bg-brand-base hover:text-brand-secondary cursor-pointer shadow-sm">
                      <i className="flaticon-search-engine text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="text-brand-text-dark font-bold text-lg sm:text-[19px] leading-snug font-['Barlow',sans-serif] mb-1">
                        Conversion &<br />
                        CRO Solutions
                      </h4>
                    </div>
                  </div>
                  <p className="text-brand-text text-sm leading-relaxed mt-2">
                    High-converting sales funnels backed by deep attribution
                    models.
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-brand-border mb-6" />

              {/* Checklist Items */}
              <div className="space-y-3.5 mb-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 w-full">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-base text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-brand-text-dark font-semibold text-[15px] sm:text-[16px]">
                      Targeted Multi-Channel Ad Buying (Meta, Google, TikTok &
                      LinkedIn)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-base text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-brand-text-dark font-semibold text-[15px] sm:text-[16px]">
                      Full-Funnel CRO Architecture & High-Converting Landing
                      Pages
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-base text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-brand-text-dark font-semibold text-[15px] sm:text-[16px]">
                      Real-Time Attribution, ROAS Tracking & Advanced Analytics
                    </span>
                  </div>
                  {/* Bottom Actions: CTA Button + Animated Trophy Badge */}
                  <div className="mt-6">
                    <Button href="/about" variant="secondary">
                      Discover More
                    </Button>
                  </div>
                </div>
                {/* Floating Trophy Badge with top-to-bottom animation */}
                <div className="top-to-bottom w-[150px] sm:w-[165px] shadow-sm overflow-hidden flex flex-col items-center flex-shrink-0">
                  <div className="bg-brand-base w-full py-4 sm:py-5 flex items-center justify-center">
                    <i className="flaticon-trophy text-[60px] sm:text-[70px] text-brand-secondary leading-none"></i>
                  </div>
                  <div className="bg-brand-secondary w-full py-3 px-2 text-center">
                    <p className="text-white text-[13px] sm:text-[14px] font-bold leading-tight uppercase tracking-wider m-0">
                      Award Winning
                      <br />
                      Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
