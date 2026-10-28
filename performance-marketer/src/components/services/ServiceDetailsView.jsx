"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import { companyServices } from "@/data/servicesData";
import { BsArrowRight } from "react-icons/bs";
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceDetailsView({ service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle="Services Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle || service.title },
        ]}
      />

      <Section className=" bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 flex flex-col gap-8">
              {/* Widget 1: All Service Navigation Menu */}
              <div className="bg-brand-gray border border-gray-100 shadow-sm overflow-hidden">
                {/* Title Header with Orange Ribbon Tab */}
                <div className="relative bg-brand-secondary m-0 py-6.25 px-[30px] flex items-center justify-between">
                  <h3 className="text-[24px]  font-bold! text-white! capitalize  m-0 tracking-wide! leading-[25px]">
                    All Service
                  </h3>
                  <div className="absolute -bottom-5 left-[8%] w-10 h-6.25 bg-brand-secondary [clip-path:polygon(50%_0%,0%_100%,100%_100%)] rotate-180" />{" "}
                </div>

                {/* Service Items List */}

                {/* Service Items List */}
                <ul className="mb-0 bg-brand-base px-5 py-[30px] min-[576px]:px-[30px] min-[576px]:py-10 min-[992px]:max-[1200px]:px-5 min-[992px]:max-[1200px]:py-[30px]">
                  {companyServices.map((item) => {
                    const isActive = item.slug === service.slug;

                    return (
                      <li key={item.slug} className="mb-2.5">
                        <Link
                          href={`/services/${item.slug}`}
                          className={`group relative z-0 mb-2.5  flex  items-center justify-between
            overflow-hidden bg-white px-[30px] py-[14px]
          
            text-base font-semibold leading-[1.625] text-brand-text!
            shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]
            transition-colors duration-500 ease-in-out
            before:absolute before:inset-y-0 before:right-0 before:z-[-1]
            before:w-0 before:bg-brand-secondary
            before:transition-[width] before:duration-500
            before:ease-in-out before:content-['']
            hover:text-white!
            hover:before:left-0 hover:before:right-auto hover:before:w-full
            ${
              isActive
                ? "text-white! before:left-0 before:right-auto before:w-full"
                : ""
            }
            max-[575px]:px-5 max-[575px]:text-sm
            min-[992px]:max-[1200px]:px-5
            min-[992px]:max-[1200px]:text-sm
            last:mb-0`}
                        >
                          <span className="relative z-10 ">
                            {item.shortTitle}
                          </span>

                          <BsArrowRight
                            className={`relative z-10 h-4 w-4 shrink-0 transition-transform duration-500 before:text-white!
              ${
                isActive
                  ? "translate-x-1 text-white"
                  : "text-brand-secondary group-hover:translate-x-1  group-hover:text-brand-base"
              }
              min-[992px]:max-[1200px]:h-3 min-[992px]:max-[1200px]:w-3`}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Widget 2: CTA Contact Card matching Screenshot */}
              <div className="relative bg-brand-secondary p-8 sm:p-9 text-white shadow-xl overflow-hidden">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assets/shapes/dots-4.png')",
                  }}
                />

                <div className="relative z-10 mb-40">
                  <h3 className="text-2xl sm:text-[30px]! font-bold  text-white! leading-tight! mb-4">
                    Get a Free Quick Solution for Digital Growth
                  </h3>
                  <p className="text-brand-text-gray text-[14px] leading-relaxed mb-6">
                    Connect directly with our senior marketing consultants to
                    audit your current channels and unlock scalable ROAS.
                  </p>
                  <div>
                    <Button
                      variant="tab"
                      href="/contact"
                      className="font-semibold! text-[14px] uppercase tracking-wider py-4 px-8 shadow-md"
                    >
                      Contact
                    </Button>
                  </div>
                </div>

                {/* Consultant Avatar Graphic in Bottom Right */}
                <div className="absolute bottom-0 -right-1 z-1">
                  <img
                    src="/assets/resources/man.png"
                    alt="Manish Verma Digital Growth Consultant"
                    className="w-auto h-[180px] sm:h-[320px] object-contain drop-shadow-2xl scale-x-[-1]"
                    onError={(e) => {
                      // Fallback if about-3-1.png isn't available
                      e.currentTarget.src = "/assets/resources/contact-1-2.png";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 -z-0 object-cover  ">
                  <img
                    src="/assets/shapes/service-shape.png"
                    alt="shapes"
                    className=" w-full"
                  />
                </div>
              </div>
            </aside>

            {/* Right Main Content (8 Cols) */}
            <main className="lg:col-span-8 flex flex-col">
              {/* 1. Large Hero Featured Image */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[460px] overflow-hidden shadow-sm bg-gray-100">
                <img
                  src={service.heroImage || "/assets/services/service-1.jpg"}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* 2. Main Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold  text-brand-text-dark mt-8 mb-5 leading-tight">
                {service.title}
              </h2>

              {/* 3. Detailed Overview Paragraphs */}
              <div className="space-y-4 text-brand-text text-[15px] sm:text-[16px] leading-[1.8] mb-8">
                {service.overview?.map((paragraph, idx) => (
                  <p key={idx} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* 4. Highlight Lead Quote / Callout */}
              <div className="border-l-4 border-brand-base pl-6 py-2 mb-8 bg-brand-gray/50">
                <h3 className="text-xl sm:text-2xl font-bold  text-brand-base mb-3 leading-snug">
                  {service.highlightText}
                </h3>
                <p className="text-brand-text text-[15px] sm:text-[16px] leading-relaxed m-0">
                  {service.highlightDescription}
                </p>
              </div>

              {/* 5. "Why Choose Us" / 2-Feature Box Strip matching Screenshot */}
              <div className="mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold  text-brand-text-dark mb-6">
                  Why Choose Our Agency?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                  {service.featureBoxes?.map((box, idx) => (
                    <div
                      key={idx}
                      className="flex bg-white group shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] transition-shadow duration-500 ease-in-out hover:shadow-lg"
                    >
                      {/* Icon Panel */}
                      <div className="flex w-full group-hover:bg-brand-secondary  max-w-[90px] shrink-0 items-center justify-center bg-brand-base transition-all duration-500 ease-in-out">
                        <i
                          className={`${box.iconClass} text-[45px] leading-none text-brand-secondary group-hover:text-brand-base transition-all duration-500 ease-in-out`}
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 px-[30px] pt-[25px] pb-6 min-[576px]:px-5 min-[1200px]:px-[30px] min-[1200px]:pr-[35px]">
                        <h4 className="mb-0 pb-[3px] text-2xl font-bold leading-normal text-brand-text-dark">
                          <span className="inline bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat [box-decoration-break:clone] [-webkit-box-decoration-break:clone] transition-all duration-500 ease-in-out group-hover:bg-[length:100%_1px] pb-1">
                            {box.title}
                          </span>
                        </h4>

                        <p className="mb-[-8px] text-[14px] font-medium leading-[1.875] text-brand-text">
                          {box.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. "Our Few Benefits" Section matching Screenshot */}
              <div className="mb-14 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left Benefit Image */}
                  <div className="md:col-span-5 h-[260px] sm:h-[300px] overflow-hidden shadow-sm">
                    <img
                      src={
                        service.benefitImage || "/assets/about/project-2-4.png"
                      }
                      alt="Service Benefits"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Right Benefit Text & Bullet Points */}
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-[28px] font-bold  text-brand-text-dark mb-2">
                      {service.benefits?.heading || "Our Few Benefits"}
                    </h3>
                    <p className="text-brand-text text-[14px] sm:text-[15px] leading-relaxed mb-5">
                      {service.benefits?.subheading}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {service.benefits?.points?.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-brand-base text-white flex items-center justify-center shrink-0 mt-0.5 text-xs shadow-xs">
                            <FaCheck size={10} />
                          </div>
                          <span className="text-brand-text-dark font-medium text-[14px] sm:text-[15px] leading-snug">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Interactive Accordion FAQ Section matching Screenshot */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-bold  text-brand-text-dark mb-6">
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  {service.faqs?.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`border transition-colors duration-300 overflow-hidden ${
                          isOpen
                            ? "border-brand-base bg-white shadow-sm"
                            : "border-gray-200 bg-brand-gray/30"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer transition-colors"
                        >
                          <span
                            className={`font-bold  text-[16px] sm:text-[18px] transition-colors pr-4 ${
                              isOpen
                                ? "text-brand-text-dark"
                                : "text-brand-text-dark hover:text-brand-base"
                            }`}
                          >
                            {faq.question}
                          </span>
                          <span
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isOpen
                                ? "bg-brand-base text-brand-secondary"
                                : "bg-white text-brand-text border border-gray-200"
                            }`}
                          >
                            {isOpen ? (
                              <FaMinus size={11} />
                            ) : (
                              <FaPlus size={11} />
                            )}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-5 sm:px-6 pb-5 pt-1 text-brand-text text-[14px] sm:text-[15px] leading-relaxed border-t border-gray-100/70">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </div>
        </Container>
      </Section>
    </>
  );
}
