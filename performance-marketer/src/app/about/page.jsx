"use client";

import React from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp } from "react-icons/fi";
import TrustBar from "@/components/home/TrustBar";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import { BsArrowRight } from "react-icons/bs";
import OurServices from "@/components/home/OurServices";
export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Who We Are"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Main About Showcase Section (Matching Reference Specification) */}
      <Section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Multi-Image Collage with Badges (6 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative max-w-[620px] mx-auto lg:max-w-none">
                {/* 1. Top Main Image */}
                <div className="relative w-full max-w-[420px] sm:max-w-[500px] h-[300px] sm:h-[450px] overflow-hidden shadow-md bg-gray-100">
                  <img
                    src="/assets/about/project-2-4.png"
                    alt="Manish Verma Consulting Digital Strategy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* 2. Top-Left Floating Orange Trophy Badge */}
                <div className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-24 h-24 sm:w-28 sm:h-28 bg-brand-base! flex items-center justify-center z-20 top-to-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-label="trophy cup"
                    className="w-12 h-12 sm:w-18 sm:h-18 text-brand-secondary"
                    viewBox="-11.5 -0.0 266.1 266.1"
                  >
                    <g transform="translate(0.000000,266.000000) scale(0.100000,-0.100000)">
                      <path
                        d="M747 2471 c-125 -5 -160 -9 -167 -21 -13 -20 -12 -34 2 -65 16 -36 5
-40 -49 -17 -130 55 -273 29 -319 -60 -41 -79 -32 -219 21 -335 79 -173 253
-353 448 -463 67 -38 83 -59 62 -86 -31 -41 -14 -74 39 -74 22 0 60 32 68 59
3 9 18 -3 46 -35 22 -27 72 -75 111 -107 92 -77 104 -105 104 -232 -1 -165
-34 -230 -145 -286 -41 -21 -59 -36 -64 -54 -13 -54 -8 -55 327 -55 329 0 344
2 332 49 -7 26 -15 33 -93 73 -56 29 -68 40 -92 88 -32 63 -46 178 -33 275 l7
58 119 116 119 116 20 -27 c24 -33 60 -44 89 -28 25 13 27 32 4 67 -17 25 -16
26 13 50 16 14 67 50 114 80 120 78 193 145 267 243 105 139 153 262 153 390
-1 109 -55 191 -136 206 -57 11 -155 -1 -212 -26 -29 -13 -55 -20 -58 -17 -3
3 2 17 11 31 20 30 14 70 -12 82 -21 10 -867 13 -1096 5z m1316 -182 c161 -44
54 -388 -184 -590 -57 -48 -176 -129 -191 -129 -5 0 0 17 10 38 22 43 64 169
86 257 13 50 56 333 56 365 0 19 113 65 170 69 8 0 32 -4 53 -10z m-1511 -30
c46 -22 47 -24 53 -78 25 -220 65 -393 121 -529 19 -46 34 -86 32 -88 -2 -1
-41 23 -88 54 -218 145 -370 367 -370 542 0 61 22 103 64 121 35 15 137 3 188
-22z M800 618 c-36 -13 -42 -44 -39 -185 l4 -134 -25 -12 c-13 -7 -29 -25 -34
-40 -20 -56 -29 -55 532 -59 447 -3 514 -1 522 12 18 28 11 59 -19 81 -28 20
-28 22 -35 160 -4 77 -9 146 -12 154 -3 8 -20 19 -37 24 -36 12 -826 11 -857
-1z"
                      ></path>
                    </g>
                  </svg>
                  {/* <i className="flaticon-trophy text-[42px] sm:text-[50px] text-brand-text-dark leading-none"></i> */}
                </div>

                {/* 3. Vertical Orange Accent Bar (Right side of top image) */}
                <div className="absolute top-3 right-20 w-3 sm:w-3.5 h-[270px] sm:h-[300px] bg-brand-base top-to-bottom" />

                {/* 4. Bottom Overlapping Image */}
                <div className="relative -mt-20 sm:-mt-28 ml-10 sm:ml-20 w-[82%] sm:w-[85%] max-w-[480px] h-[250px] sm:h-[310px] overflow-hidden shadow-2xl z-10">
                  <img
                    src="/assets/about/rental1.jpg"
                    alt="Collaborative Client Consultation"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* 5. Circular Network Node Badge (Floating at intersection) */}
                <div className="absolute bottom-12 sm:bottom-16 -left-3 sm:left-4 w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-full border border-brand-base flex items-center justify-center p-2 z-30 bg-transparent">
                  <div className="w-full h-full rounded-full bg-brand-secondary shadow-xl flex items-center justify-center">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-brand-base animate-[spin_20s_linear_infinite]"
                    >
                      <circle cx="12" cy="12" r="3.2" fill="#FFAA17" />
                      <circle cx="12" cy="4" r="2.2" fill="#FFAA17" />
                      <circle cx="12" cy="20" r="2.2" fill="#FFAA17" />
                      <circle cx="4" cy="12" r="2.2" fill="#FFAA17" />
                      <circle cx="20" cy="12" r="2.2" fill="#FFAA17" />
                      <path
                        d="M12 6.5V8.8M12 15.2V17.5M6.5 12H8.8M15.2 12H17.5"
                        stroke="#FFAA17"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="9.5"
                        stroke="#FFAA17"
                        strokeWidth="1.2"
                        strokeDasharray="3 3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content Body & Solutions (6 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6"
            >
              {/* Eyebrow Tag */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Section Icon"
                  className="w-auto h-auto"
                />
                <h6 className="text-brand-text! text-[14px] font-semibold! uppercase tracking-wider m-0">
                  ABOUT US
                </h6>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-text-dark font-heading leading-[1.2] mb-5">
                Provide the Best Strategic Solution for Your Business Growth
              </h2>

              {/* Intro Paragraph */}
              <p className="text-brand-text text-[15px] sm:text-[16px] leading-[1.8] mb-7">
                Manish Verma Consulting is a registered digital marketing agency
                operating with MSME and GST compliance in India, helping
                businesses build visibility, authority, and measurable growth
                online through modern digital strategies.
              </p>

              {/* Middle Banner with Orange Overlay Card (Deliver Perfect Solution) */}
              <div className="relative w-full h-[155px] sm:h-[165px] overflow-hidden rounded-xs mb-8 flex items-center shadow-md">
                {/* Background collaborative image */}
                <img
                  src="/assets/resources/contact-1-2.png"
                  alt="Team Solution"
                  className="absolute inset-0 w-full h-full object-cover object-center filter grayscale opacity-40"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Orange Content Box */}
                <div className="relative z-10 w-full mx-3 sm:mx-5 bg-brand-base p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-lg">
                  {/* Round Dark Icon */}
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 shadow-md">
                    <i className="flaticon-lamp text-[26px] text-brand-base leading-none" />
                  </div>

                  {/* Text Details */}
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-brand-text-dark font-heading mb-1 leading-snug">
                      Deliver Perfect Solution
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-brand-text-dark/90 font-medium leading-relaxed m-0">
                      Tailored multi-channel strategies designed around your
                      business goals, high-intent audience, and high-converting
                      commercial offers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Two-Column Feature Highlights (Side by Side) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start mb-9 pt-1">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <i className="flaticon-advertising text-[22px] text-brand-base leading-none" />
                  </div>
                  <div>
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-brand-text-dark font-heading mb-1 leading-snug">
                      Performance Marketing & Ads
                    </h4>
                    <p className="text-[14px] text-brand-text leading-relaxed m-0">
                      Targeted Meta and Google ad campaigns optimized for
                      maximum ROAS and lower client acquisition costs.
                    </p>
                  </div>
                </div>

                {/* Feature 2 (with vertical divider on sm+) */}
                <div className="flex items-start gap-4 sm:border-l sm:border-gray-200 sm:pl-6">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <i className="flaticon-concept text-[22px] text-brand-base leading-none" />
                  </div>
                  <div>
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-brand-text-dark font-heading mb-1 leading-snug">
                      Growth Consulting & AI
                    </h4>
                    <p className="text-[14px] text-brand-text leading-relaxed m-0">
                      Cohesive omnichannel roadmaps integrating technical SEO,
                      social reach, and automated lifecycle email funnels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <Button
                  variant="base"
                  href="/services"
                  className="font-semibold text-[15px] uppercase tracking-wider px-8 py-3.5 sm:px-9 sm:py-4 cursor-pointer"
                >
                  More Details
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <OurServices />

      {/* Why Choose Us Section */}
      <section className="relative z-1 bg-white overflow-x-clip">
        {/* Dark Background covering top 82.5% */}
        <div className="absolute left-0 top-0 w-full h-[82.5%] bg-[url('/assets/background/why-choose-bg-1-1.png')] bg-top-left bg-no-repeat bg-cover pointer-events-none bg-fixed z-0">
          <div className="absolute inset-0 bg-brand-secondary/96" />
        </div>

        {/* 1. Top 4 Counter Strip */}
        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "150+",
                label: (
                  <>
                    Satisfied <br /> Clients
                  </>
                ),
                iconClass: "flaticon-satisfaction",
              },
              {
                value: "350+",
                label: (
                  <>
                    Campaigns <br /> Completed
                  </>
                ),
                iconClass: "flaticon-campaign",
              },
              {
                value: "5.0",
                label: (
                  <>
                    Five Star <br /> Review
                  </>
                ),
                iconClass: "flaticon-reputation",
              },
              {
                value: "4.2x",
                label: (
                  <>
                    Average Client <br /> ROAS
                  </>
                ),
                iconClass: "flaticon-brain-1",
              },
            ].map((counter, idx) => (
              <div
                key={idx}
                className="group relative z-1 bg-black hover:bg-brand-base pb-[30px] mb-[30px] transition-all duration-400 ease-in-out overflow-hidden shadow-xl"
              >
                {/* Background Hover Watermark Shape */}
                <div className="absolute bottom-0 left-0 w-full -z-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 ease-in-out pointer-events-none select-none">
                  <img
                    src="/assets/shapes/cards-1.png"
                    alt="Funfact shape"
                    className="w-full object-cover text-center"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  {/* Top Icon Box */}
                  <div className="mx-auto w-[137px] h-[118px] bg-brand-secondary group-hover:bg-white/10 flex items-center justify-center text-[70px] text-brand-base group-hover:text-brand-secondary mb-[14px] transition-all duration-400 ease-in-out shadow-sm">
                    <i
                      className={`${counter.iconClass} leading-none group-hover:animate-[bounceIn_1s_linear]`}
                    />
                  </div>

                  {/* Count Text */}
                  <h3 className="text-white! group-hover:text-black! text-center text-[40px] font-bold font-heading leading-[150%] flex items-center justify-center transition-all duration-400 ease-in-out m-0">
                    {counter.value}
                  </h3>

                  {/* Label Text */}
                  <p className="text-white! group-hover:text-black! text-center text-[24px] font-semibold leading-[145.833%] capitalize mb-[-1px] pb-0 transition-all duration-400 ease-in-out">
                    {counter.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Inner Section */}
          <div className="relative z-1 pt-[50px] md:pt-[70px] lg:pt-[90px]">
            {/* Top Heading Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="max-w-2xl max-[991px]:pb-[18px]">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/assets/shapes/sec-title-s-1.png"
                    alt="Section Icon"
                    className="w-auto h-auto"
                  />
                  <span className="text-[14px] font-bold uppercase text-brand-base tracking-wider">
                    WHY CHOOSE US
                  </span>
                </div>

                {/* Heading */}
                <h2 className="sec-title text-3xl sm:text-4xl lg:text-[44px] font-bold text-white! font-heading leading-[1.2] m-0">
                  Why Our Performance Marketing{" "}
                  <br className="hidden sm:block" /> Agency Stands Out?
                </h2>
              </div>

              {/* Paragraph on the right */}
              <div className="max-w-md max-[991px]:mb-[35px] text-brand-text-gray text-[16px] font-semibold leading-[187.5%]">
                <p className="m-0">
                  Manish Verma Consulting combines human creative strategy, MSME
                  & GST compliant execution, and AI-powered automation to scale
                  online visibility, generate qualified leads, and deliver
                  predictable revenue growth.
                </p>
              </div>
            </div>

            {/* Main Content Split: Left Features + Overlapping CTA, Right Stretched Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch min-h-[500px] lg:min-h-[660px] xl:min-h-[680px]">
              {/* Left Column */}
              <div className="lg:col-span-6 relative min-h-[500px] lg:min-h-[660px] xl:min-h-[680px]">
                <div className="relative h-full lg:mr-[40px] max-[1199px]:mr-0 max-[991px]:mb-[30px] pb-0 lg:pb-[240px]">
                  {/* Feature Row 1 */}
                  <div className="relative z-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pb-6 sm:pb-7 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full sm:after:w-[75%] after:h-[1px] after:bg-white/10 group">
                    <div className="flex items-center gap-6 sm:gap-7 w-full">
                      <div className="w-[88px] h-[105px] sm:w-[100px] sm:h-[115px] bg-black px-4 text-[42px] sm:text-[48px] text-brand-base flex items-center justify-center transition-all duration-400 group-hover:bg-brand-base group-hover:text-black shrink-0">
                        <i className="flaticon-advertising leading-none group-hover:animate-[bounceIn_1s_linear]" />
                      </div>
                      <h4 className="text-white! text-[18px] sm:text-[20px] font-semibold leading-[160%] max-w-[280px] w-full m-0 font-heading">
                        Targeted Meta &amp; Google Ad Funnels with Precision and
                        High ROAS
                      </h4>
                    </div>
                    <div className="sm:ml-4 shrink-0 max-sm:ml-[110px] max-sm:mb-3">
                      <Link
                        href="/services"
                        className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-brand-base flex items-center justify-center text-[18px] sm:text-[20px] text-brand-secondary hover:bg-white transition-colors duration-400 shadow-md"
                      >
                        <BsArrowRight className="w-5 h-5 text-brand-secondary" />
                      </Link>
                    </div>
                  </div>

                  {/* Feature Row 2 */}
                  <div className="relative z-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pb-6 sm:pb-7 mt-8 sm:mt-10 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full sm:after:w-[75%] after:h-[1px] after:bg-white/10 group">
                    <div className="flex items-center gap-6 sm:gap-7 w-full">
                      <div className="w-[88px] h-[105px] sm:w-[100px] sm:h-[115px] bg-black px-4 text-[42px] sm:text-[48px] text-brand-base flex items-center justify-center transition-all duration-400 group-hover:bg-brand-base group-hover:text-black shrink-0">
                        <i className="flaticon-concept leading-none group-hover:animate-[bounceIn_1s_linear]" />
                      </div>
                      <h4 className="text-white! text-[18px] sm:text-[20px] font-semibold leading-[160%] max-w-[280px] w-full m-0 font-heading">
                        Omnichannel Strategy Integrating SEO, SMM &amp; AI Email
                        Automation
                      </h4>
                    </div>
                    <div className="sm:ml-4 shrink-0 max-sm:ml-[110px] max-sm:mb-3">
                      <Link
                        href="/services"
                        className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-brand-base flex items-center justify-center text-[18px] sm:text-[20px] text-brand-secondary hover:bg-white transition-colors duration-400 shadow-md"
                      >
                        <BsArrowRight className="w-5 h-5 text-brand-secondary" />
                      </Link>
                    </div>
                  </div>

                  {/* CTA Banner */}
                  <div className="relative lg:absolute lg:bottom-[21px] lg:left-0 lg:right-auto lg:w-[calc(200%+10px)] z-20 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 p-6 sm:p-8 lg:p-[45px_50px] xl:p-[55px_65px] bg-brand-base overflow-hidden">
                    {/* Background Shape */}
                    <div className="absolute left-0 top-0 w-full h-full bg-[url('/assets/shapes/cta-2-1.png')] bg-left-top bg-no-repeat bg-cover -z-1 pointer-events-none" />
                    {/* Banner Heading */}
                    <h3 className="text-black text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] font-bold leading-[1.25]! flex-1 min-w-0 max-w-[620px] w-full m-0 font-heading">
                      Get The Best Strategic Partner for Digital Marketing &
                      Scalable Growth
                    </h3>
                    {/* Banner Button */}
                    <div className="mt-0 shrink-0 lg:ml-4">
                      <Button
                        variant="dark"
                        href="/contact"
                        className="font-bold text-[15px] uppercase tracking-wider py-4 px-9 shadow-md inline-block text-center cursor-pointer whitespace-nowrap"
                      >
                        Get In Touch
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Image with Gradient Overlay stretched to right screen edge */}
              <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] w-full lg:h-[659px] lg:min-h-0">
                <div className="relative z-1 h-full w-full lg:w-[calc(50vw-2px)] lg:max-w-none flex overflow-hidden after:content-[''] after:w-[131px] after:h-full after:bg-[linear-gradient(180deg,#FFAA17_0%,rgba(255,170,23,0)_100%)] after:absolute after:top-0 after:right-0 after:pointer-events-none after:z-10">
                  <img
                    src="/assets/resources/why-choos-us-2-1.png"
                    alt="Why Choose Us"
                    className="w-full h-full object-cover object-top-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Carousel (Without redundant extra Section wrapper) */}
      <TestimonialsCarousel />
      <TrustBar />
    </>
  );
}
