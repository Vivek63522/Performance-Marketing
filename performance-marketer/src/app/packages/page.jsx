"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import Button from "@/components/ui/Button";
const pricingPlans = [
  {
    id: "startup",
    title: "Startup",
    monthlyPrice: "30.00",
    yearlyPrice: "24.00",
    isPopular: false,
    features: [
      "Social Media Marketing (12 Posts/Mo)",
      "Digital Competitor Analysis",
      "Google Business Profile (GMB) Optimization",
      "On-Page Basic SEO & Keywords",
      "Monthly Performance Analytics Report",
      "Technical Support & Consultation",
    ],
  },
  {
    id: "business",
    title: "Business",
    monthlyPrice: "90.00",
    yearlyPrice: "72.00",
    isPopular: true,
    features: [
      "Targeted Meta & Google Ads Campaigns",
      "Social Media Management & Reels (20/Mo)",
      "Digital Funnel Analysis & Optimization",
      "Local SEO & Google 3-Pack Rank Scaling",
      "AI-Driven Email Marketing Automation",
      "Dedicated Growth Strategist & Bi-Weekly Calls",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    monthlyPrice: "150.00",
    yearlyPrice: "120.00",
    isPopular: false,
    features: [
      "Full-Funnel Performance Marketing Scaling",
      "High-Converting Video Ads & Creative Iteration",
      "Complete Technical SEO & Domain Authority",
      "Automated AI Workflows & CRM Integration",
      "Executive LinkedIn Personal Branding",
      "Weekly 1-on-1 Growth Consultation & CRO",
    ],
  },
];

export default function PackagesPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <PageHeader title="Our Packages" subtitle="Pricing Plans" />

      <Section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        <Container>
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
                Price Plans
              </h6>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl! sm:text-4xl! lg:text-[44px]! font-bold text-brand-text-dark! leading-[1.2] font-heading mb-5 uppercase"
            >
              Our Pricing Plans
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-text text-[15px] sm:text-[16px] max-w-2xl mx-auto"
            >
              Choose a strategic digital marketing package tailored to
              accelerate your business growth, generate qualified leads, and
              maximize your return on ad spend.
            </motion.p>
          </div>

          {/* Monthly / Yearly Switch Toggle */}
          <div className="flex items-center justify-center mb-12 sm:mb-16">
            <div className="inline-flex items-center p-1.5 gap-2.5">
              <Button
                variant="tab"
                type="button"
                isActive={!isYearly}
                onClick={() => setIsYearly(false)}
                className="px-8 py-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-wider cursor-pointer"
              >
                Monthly
              </Button>
              <Button
                variant="tab"
                type="button"
                isActive={isYearly}
                onClick={() => setIsYearly(true)}
                className="px-8 py-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-wider cursor-pointer"
              >
                Yearly
              </Button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 max-w-[1200px] mx-auto items-stretch">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group package-card relative flex flex-col justify-between bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-400 ease-in-out ${
                  plan.isPopular ? "lg:-translate-y-2 border-brand-base/40" : ""
                }`}
              >
                {/* Recommended Ribbon Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-base text-brand-text-dark text-[12px] sm:text-[13px] font-bold uppercase tracking-wider py-1 px-5 shadow-sm z-20">
                    Recommended
                  </div>
                )}

                {/* Card Head */}
                <div className=" relative z-10 bg-[#232429] group-hover:bg-brand-base p-[30px_35px] sm:p-[30px_40px] transition-all duration-400 ease-in-out overflow-hidden">
                  {/* Title */}
                  <h3 className=" text-white! text-[28px] sm:text-[30px] font-semibold capitalize leading-[1.6] mb-0 pb-[5px] transition-colors duration-400 font-heading group-hover:text-brand-text-dark!">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className=" text-white text-[36px] sm:text-[40px] font-bold leading-none uppercase mb-0 pb-0 transition-colors duration-400 font-heading group-hover:text-brand-text-dark flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-semibold mr-1">
                      $
                    </span>
                    <motion.span
                      key={isYearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                  </div>

                  {/* Billing cycle subtitle */}
                  <p className="text-[14px] text-gray-300 group-hover:text-brand-text-dark/85 font-normal m-0 mt-1 transition-colors duration-400">
                    {isYearly ? "Per month (billed yearly)" : "Per month"}
                  </p>

                  {/* Curved Top-Right SVG Mask / Wedge */}
                  <svg
                    viewBox="0 0 106 149"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 right-0 w-[95px] sm:w-[108px] h-[135px] sm:h-[152px] pointer-events-none transition-all duration-400"
                  >
                    <path
                      d="M0 0C80.9133 6.80528 101.76 99.6915 106 149V0H0Z"
                      className="fill-brand-base group-hover:fill-[#232429] transition-colors duration-400"
                    />
                  </svg>
                </div>

                {/* Card Content Area */}
                <div className=" relative p-[35px_30px_40px] sm:p-[35px_40px_40px] bg-white flex-1 flex flex-col justify-between overflow-hidden">
                  {/* Features List */}
                  <ul className=" space-y-3.5 mb-0 pb-0">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className=" flex items-start text-[#686A6F] text-[15px] sm:text-[16px] font-medium leading-[1.625]"
                      >
                        <GiCheckMark
                          style={{ stroke: "currentColor", strokeWidth: 20 }}
                          className="text-brand-base text-[16px] shrink-0 mt-1 mr-3"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="relative z-10 pt-8">
                    <Button
                      variant="secondary"
                      href="/contact"
                      className=" inline-block font-semibold! text-[14px] sm:text-[15px] uppercase tracking-wider! py-3.5 px-8 transition-all duration-300 cursor-pointer"
                    >
                      Select Plan
                    </Button>
                  </div>

                  {/* Decorative corner shape */}
                  <img
                    src="/assets/shapes/price-1-1.png"
                    alt="Price Shape"
                    className=" absolute bottom-0 right-0  pointer-events-none w-auto h-auto max-w-[170px] select-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
