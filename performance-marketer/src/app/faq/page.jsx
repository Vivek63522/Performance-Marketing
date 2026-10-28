"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiMail, FiPhone } from "react-icons/fi";
import { PhoneRing } from "reicon-react";

const faqData = [
  {
    id: 1,
    question:
      "What digital marketing services does Manish Verma Consulting provide?",
    answer:
      "We provide full-spectrum digital marketing solutions including targeted Performance Marketing (Meta & Google Ads), Social Media Marketing & Management, SEO (Search Engine Optimization), Google Business Profile (GMB) Optimization, AI-Driven Email Marketing Automation, and LinkedIn Personal Branding for founders and consultants.",
  },
  {
    id: 2,
    question:
      "How quickly can we expect measurable results from paid ad campaigns?",
    answer:
      "For Performance Marketing on Meta and Google Ads, initial lead flow and conversion signals typically commence within the first 7 to 14 days. During the first 30 to 60 days, we continuously iterate ad copy, creatives, and audience targeting to scale your Return on Ad Spend (ROAS) and decrease Cost Per Acquisition (CPA).",
  },
  {
    id: 3,
    question: "Do you customize marketing strategies for each business?",
    answer:
      "Yes, absolutely. We believe every business model, audience, and offer is unique. We conduct an exhaustive digital audit of your existing sales funnels and market competitors to architect a personalized multi-channel growth blueprint tailored specifically to your commercial milestones.",
  },
  {
    id: 4,
    question: "How do you track campaign performance and attribution?",
    answer:
      "We implement full-funnel tracking protocols including Meta Conversions API (CAPI), Google Analytics 4 (GA4), and custom conversion tracking dashboards. This gives you complete transparency over daily ad spend, lead cost, qualified inquiries, and verified revenue generation.",
  },
  {
    id: 5,
    question: "What is the difference between SEO and Performance Marketing?",
    answer:
      "Performance Marketing delivers immediate customer acquisition by bidding on commercial search and social auctions. SEO establishes lasting domain authority and secures top rankings on Google 3-Pack and organic search queries, giving you consistent high-intent inbound inquiries without recurring ad spend.",
  },
  {
    id: 6,
    question: "How do we get started working with Manish Verma Consulting?",
    answer:
      "Getting started is simple and straightforward. You can submit your requirements through our contact form, send an email to imanishhere07@gmail.com, or call us directly at +91 7984473600. We will schedule a strategic discovery consultation to examine your goals and map out actionable growth steps.",
  },
];

export default function FAQPage() {
  // First item open by default matching screenshot
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Got Questions?"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <Section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <Container>
          {/* Section Header with Title & Search Input */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              {/* Eyebrow Tag */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Section Icon"
                  className="w-auto h-auto"
                />
                <h6 className="text-brand-text! text-[14px] font-semibold! uppercase tracking-wider m-0">
                  FAQS
                </h6>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-brand-text-dark  leading-[1.2] m-0">
                Frequently asked Question & <br className="hidden sm:block" />{" "}
                Answers Here
              </h2>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full sm:w-80 lg:w-85 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Here Anything"
                className="w-full bg-brand-gray text-brand-text-dark placeholder:text-brand-text-gray text-[15px] py-2.5 sm:py-4.5 pl-11 pr-4 outline-none border border-transparent focus:border-brand-base transition-colors duration-300"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text text-lg pointer-events-none" />
            </div>
          </div>

          {/* Main 2-Column Content: Accordion (Left) & Image (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Accordion Items (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id;

                  return (
                    <div
                      key={faq.id}
                      className="border border-border bg-white transition-all duration-300 overflow-hidden shadow-xs hover:border-brand-base/40"
                    >
                      {/* Accordion Question Header */}
                      <button
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        className="relative w-full text-left p-[22px_24px_18px_24px] sm:p-[25px_30px_18px_30px] pr-[65px] sm:pr-[70px] cursor-pointer select-none outline-none"
                      >
                        <span className="text-[19px] sm:text-[21px] font-bold text-brand-text-dark font-heading tracking-wide leading-snug block">
                          {faq.question}
                        </span>

                        {/* Plus / Minus Circular Icon */}
                        <div
                          className={`w-[34px] h-[34px] rounded-full absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-brand-base text-brand-text-dark"
                              : "bg-[#F4F5F8] text-brand-text-dark"
                          }`}
                        >
                          <div className="relative w-3 h-3 flex items-center justify-center">
                            {/* Horizontal Bar */}
                            <span className="absolute w-3 h-[2px] bg-[#232429] transition-transform duration-300" />
                            {/* Vertical Bar (Disappears when open) */}
                            <span
                              className={`absolute w-[2px] h-3 bg-[#232429] transition-all duration-300 ${
                                isOpen
                                  ? "scale-y-0 opacity-0"
                                  : "scale-y-100 opacity-100"
                              }`}
                            />
                          </div>
                        </div>
                      </button>

                      {/* Accordion Content Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-[3px_30px_22px_24px] sm:p-[3px_54px_22px_30px] -mt-[3px]">
                              <p className="text-[#686A6F] text-[15px] sm:text-[16px] font-medium leading-[1.875] max-w-[678px] w-full m-0 pb-0">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center text-[#686A6F] border border-dashed border-gray-300">
                  <p className="text-lg font-semibold mb-2">
                    No matching questions found
                  </p>
                  <p className="text-sm">
                    Try searching with a different keyword or term.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Featured Image (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] overflow-hidden shadow-lg bg-gray-100">
                <img
                  src="/assets/resources/why-choos-us-3-1.png"
                  alt="Manish Verma Consulting Client Meeting"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Container>
        {/* Bottom Call-To-Action Banner (Dark Two-Block Section) */}
        <div className="mt-16 sm:mt-24  bg-brand-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x  divide-gray-700/60">
            {/* Left CTA: Email Help Community */}
            <div className="flex items-center gap-5 sm:gap-6 py-10 sm:py-12.5 px-8 lg:px-10 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-base group-hover:bg-white text-brand-text-dark flex items-center justify-center shrink-0 shadow-md  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-label="envelope"
                  viewBox="-0.0 -33.5 246.1 246.1"
                  className="w-10 h-10 transition-transform duration-500 group-hover:text-brand-base group-hover:scale-110 ease-in-out group-hover:transform-[scale(-1)_rotate(180deg)]"
                >
                  <g transform="translate(0.000000,179.000000) scale(0.100000,-0.100000)">
                    <path
                      d="M1937 1604 c-5 -5 -369 -11 -810 -14 -723 -5 -806 -7 -840 -22 -29
-13 -37 -23 -37 -43 0 -15 4 -35 10 -45 11 -20 111 -102 355 -290 88 -68 207
-164 265 -214 163 -141 204 -174 266 -211 66 -40 99 -43 154 -15 42 22 209
156 385 310 61 53 170 147 243 208 208 174 253 215 269 245 17 34 10 63 -20
79 -26 14 -228 24 -240 12z M2204 1381 c-16 -10 -78 -62 -138 -117 -61 -54
-180 -160 -265 -234 -112 -97 -157 -143 -159 -160 -2 -21 16 -40 116 -121 65
-53 183 -152 263 -220 221 -190 221 -190 239 -145 10 28 16 963 5 988 -10 25
-29 28 -61 9z M199 1353 c-16 -19 -18 -146 -8 -658 6 -324 11 -365 44 -365 17
0 585 526 585 541 0 13 -21 33 -220 203 -280 241 -350 296 -378 296 -5 0 -16
-7 -23 -17z M757 687 c-73 -67 -204 -189 -292 -271 -158 -147 -190 -185 -168
-207 25 -25 199 -30 999 -27 899 3 885 2 892 57 4 29 -13 47 -157 169 -63 54
-151 129 -195 167 -228 197 -263 225 -290 225 -12 0 -57 -29 -101 -65 -173
-141 -246 -140 -434 9 -46 36 -93 66 -103 66 -11 0 -78 -55 -151 -123z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div>
                <h3 className="text-lg! sm:text-[24px]! font-bold text-white!  mb-1 leading-snug">
                  Ask The Help Community Write Now!
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-300 m-0">
                  Quick{" "}
                  <a
                    href="mailto:imanishhere07@gmail.com"
                    className="text-white hover:text-brand-base font-semibold underline underline-offset-2 transition-colors duration-200"
                  >
                    imanishhere07@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right CTA: Call Direct */}
            <div className="flex items-center gap-5 sm:gap-6 py-10 sm:py-12.5 px-8 lg:px-10 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-base group-hover:bg-white text-brand-text-dark flex items-center justify-center shrink-0 shadow-md">
                <PhoneRing
                  className="w-10 h-10 transition-transform duration-500 group-hover:text-brand-base group-hover:scale-110 ease-in-out group-hover:transform-[scale(-1)_rotate(180deg)]"
                  weight="Filled"
                />
              </div>
              <div>
                <h3 className="text-lg! sm:text-[24px]! font-bold text-white!  mb-1 leading-snug">
                  Still Have Questions? Call Now!
                </h3>
                <p className="text-base sm:text-lg font-bold text-white m-0">
                  <a
                    href="tel:+917984473600"
                    className="hover:text-brand-base transition-colors duration-200 tracking-wide"
                  >
                    +91 7984473600
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
