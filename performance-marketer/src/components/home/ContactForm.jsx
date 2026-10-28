"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <Section
      variant="dark"
      className="relative  bg-brand-secondary overflow-hidden"
    >
      {/* 1. Left Thumbnail: 45% width, absolute, full-height on desktop */}
      <div className="hidden lg:block absolute top-0 left-0 w-[45%] h-full z-1 overflow-hidden">
        <img
          src="/assets/resources/contact-1-2.png"
          alt="Performance Marketer Team"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Decorative Dot Matrix Texture (Right Background) */}
      <div className="absolute hidden sm:block top-0 right-0 h-full w-[260px] pointer-events-none opacity-20 select-none z-0">
        <img
          src="/assets/shapes/benefit-shape-1-1.png"
          alt="Dot pattern"
          className="h-full w-auto object-cover object-right"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="w-full mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] relative z-2">
        {/* Mobile / Tablet Thumb (Visible only below lg) */}
        <div className="block lg:hidden w-full h-[300px] sm:h-[380px] overflow-hidden mb-6 rounded-none">
          <img
            src="/assets/resources/contact-1-2.png"
            alt="Performance Marketer Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile / Tablet Orange Banner (Visible only below lg) */}
        <div className="block lg:hidden bg-brand-base px-6 sm:px-10 py-7 mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <img
              src="/assets/shapes/sec-title-s-2.png"
              alt="Section icon"
              className="h-5 w-auto text-white  rotate-90 mr-2"
            />
            <span className="text-[12px]! font-bold uppercase tracking-[0.18em] text-black">
              Contact With Us
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] font-bold text-black m-0 leading-tight font-heading">
            Feel Free to Write us
          </h2>
        </div>

        {/* Right Side Column: width: 66.666667% (8 of 12 columns), pushed right */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full lg:w-[66.67%] relative flex-shrink-0">
            <div className="hidden lg:flex bg-brand-base absolute -top-[80px] md:-top-[100px] lg:-top-[120px] -bottom-[80px] md:-bottom-[100px] lg:-bottom-[120px] h-[calc(100%+160px)] md:h-[calc(100%+200px)] lg:h-[calc(100%+240px)] left-[5%] w-[240px] z-1 items-center justify-start select-none shadow-sm">
              <div className="w-[200px] h-full flex items-center justify-center">
                <div className="flex items-center flex-col justify-center  [writing-mode:vertical-rl] rotate-180">
                  {/* Left track: Eyebrow with white shape line & diamond */}
                  <div className="inline-flex items-center gap-2">
                    <img
                      src="/assets/shapes/sec-title-s-2.png"
                      alt="Section icon"
                      className="h-5 w-auto rotate-180"
                    />
                    <span className="text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.2em] text-white">
                      Contact With Us
                    </span>
                  </div>
                  <div>
                    <h2 className="text-[32px] xl:text-[36px] font-bold text-black  tracking-tight m-0 whitespace-nowrap">
                      Feel Free to Write us
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[550px] mx-auto lg:ml-60 lg:mr-0 bg-black p-6 sm:p-10 lg:p-[60px_40px] relative z-10">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full h-[54px] px-5 sm:px-6 bg-[#f4f5f8] text-black placeholder:text-[#686a6f] text-[15px] font-medium outline-none border border-transparent focus:border-brand-base transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full h-[54px] px-5 sm:px-6 bg-[#f4f5f8] text-black placeholder:text-[#686a6f] text-[15px] font-medium outline-none border border-transparent focus:border-brand-base transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="w-full h-[54px] px-5 sm:px-6 bg-[#f4f5f8] text-black placeholder:text-[#686a6f] text-[15px] font-medium outline-none border border-transparent focus:border-brand-base transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write a Message"
                    className="w-full h-[145px] p-5 sm:p-6 bg-[#f4f5f8] text-black placeholder:text-[#686a6f] text-[15px] font-medium outline-none border border-transparent focus:border-brand-base transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-1">
                  <Button
                    variant="base"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-[52px] px-8 sm:px-9 bg-brand-base text-black font-bold text-[15px] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer outline-none border-none select-none inline-flex items-center justify-center uppercase tracking-wider"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : submitted
                        ? "Message Sent!"
                        : "Send a Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
