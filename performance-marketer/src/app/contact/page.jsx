"use client";
import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRocket,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";
import Button from "@/components/ui/Button";

const contactCards = [
  {
    icon: "flaticon-phone-call",
    title: "Call Us Direct",
    detail: "+91 7984473600",
    image: "/assets/services/service-1.jpg",
    href: "tel:+917984473600",
    description: "Mon - Sat, 9:00 AM to 7:00 PM",
    color: "bg-[#ff6809]/10 text-brand-base",
  },
  {
    icon: "flaticon-open-envelope",
    title: "Email Support",
    detail: "imanishhere07@gmail.com",
    image: "/assets/services/service-2.jpg",
    href: "mailto:imanishhere07@gmail.com",
    description: "We respond within 24 hours",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "flaticon-web",
    title: "Our Location",
    detail: "Greater Noida, India",
    image: "/assets/services/service-3.jpg",
    href: "https://maps.google.com/?q=GreaterNoida,India",
    description: "Serving clients globally",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 800);
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get In Touch" />

      {/* Existing Section - Preserved untouched */}
      <Section>
        <Container>
          <div
            className="absolute left-0 top-0 w-[400px] h-[200px] sm:w-[780px] sm:h-[667px] bg-no-repeat bg-center bg-cover hidden sm:block"
            style={{
              backgroundImage: "url('/images/icons/pattern-4.png')",
            }}
          />
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-2"
              >
                {/* Section Tag / Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/assets/shapes/sec-title-s-1.png"
                    alt="Section Icon"
                    className="w-auto h-auto"
                  />
                  <h6 className="text-brand-text! text-[14px] font-semibold! uppercase tracking-wider m-0">
                    Contact Us
                  </h6>
                </div>
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl! sm:text-4xl! lg:text-[44px]! font-bold text-brand-text-dark! leading-[1.2] font-heading mb-5 uppercase"
              >
                We’d Love to Help You Scale Your Business Online
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-brand-text text-sm sm:text-base max-w-2xl mx-auto hidden sm:block"
              >
                Have a project in mind, need technical assistance, or want a
                free website audit? Reach out using any channel below.
              </motion.p>
            </div>

            {/* Desktop Cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-none mx-auto">
              {contactCards.map((card, idx) => {
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative flex items-center justify-center transition-all duration-300 ease-out before:absolute before:top-[20px] before:bottom-0 before:left-0 before:w-full before:bg-brand-base before:content-['']"
                  >
                    {/* Image Box */}
                    <figure
                      className="relative -top-[20px] mx-[20px] w-[calc(100%-40px)] z-10 overflow-hidden transition-all duration-300 ease-out
            before:absolute before:inset-0 before:h-full before:w-full before:bg-[linear-gradient(126deg,rgba(23,23,23,0.8)_0%,rgba(23,23,23,0.8))] before:opacity-[0.74] before:pointer-events-none before:z-10 before:content-['']
            after:absolute after:inset-x-0 after:bottom-0 after:h-0 group-hover:after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:to-brand-base after:opacity-[0.74] after:pointer-events-none after:z-10 after:transition-all after:duration-300 after:content-['']"
                    >
                      <a href={card.href}>
                        <img
                          src={card.image}
                          alt="Service"
                          className="w-full transition-all duration-300 ease-out"
                        />
                      </a>
                    </figure>
                    {/* Content Box */}
                    <div className="absolute text-center z-20">
                      <div className="inner">
                        {/* Icon */}
                        <i
                          className={`${card.icon} relative inline-block text-[45px] sm:text-[60px] text-white mb-4 sm:mb-5 transition-transform duration-500 ease-in-out group-hover:[transform:scale(-1)_rotate(180deg)]`}
                        ></i>

                        <h3 className="text-lg! sm:text-xl! font-bold text-white! mb-1 px-2">
                          {card.title}
                        </h3>
                        <p className="text-[11px] sm:text-[14px]! font-semibold text-gray-300! mb-2 px-2">
                          {card.description}
                        </p>
                        <a
                          href={card.href}
                          target={
                            card.title === "Our Location" ? "_blank" : undefined
                          }
                          rel={
                            card.title === "Our Location"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm sm:text-xl font-bold text-white! hover:text-brand-text-dark! transition-colors break-all mb-2 inline-block px-4"
                        >
                          {card.detail}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Cards */}
            <div className="flex md:hidden flex-col gap-8 max-w-sm mx-auto mt-12 px-4 mb-4">
              {contactCards.map((card, idx) => (
                <motion.a
                  key={`mobile-${card.title}`}
                  href={card.href}
                  target={card.title === "Our Location" ? "_blank" : undefined}
                  rel={
                    card.title === "Our Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  {/* Icon Circle */}
                  <div className="w-[70px] h-[70px] shrink-0 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 bg-brand-base group-hover:bg-brand-text-dark">
                    <i
                      className={`${card.icon} text-[32px] text-white leading-none inline-block transition-transform duration-500 ease-in-out group-hover:[transform:scale(-1)_rotate(180deg)]`}
                    ></i>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col text-left flex-1 min-w-0">
                    <h3 className="text-[20px]! font-extrabold mb-1.5 tracking-tight truncate">
                      {card.title}
                    </h3>
                    <span className="text-[15px] sm:text-[16px] text-brand-text-gray font-medium break-all leading-snug">
                      {card.detail}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </Container>
        </Container>
      </Section>

      {/* New Section: Contact Form & Map Section (Exact design matching reference) */}
      <section className="relative w-full bg-white pt-12 lg:pt-16">
        <Container className="relative z-10 -mb-28 lg:-mb-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-[0px_10px_60px_rgba(0,0,0,0.08)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-gray-100"
          >
            {/* Left Column: 3 Orange Value Proposition Boxes + Team Image */}
            <div className="lg:col-span-5 xl:col-span-4 border-r bg-brand-gray border-border flex flex-col justify-between">
              {/* Stacked 3 Orange Feature Boxes */}
              <div className="flex flex-col gap-4">
                {/* Box 1: Strategy-First Roadmap */}
                <div className="bg-brand-base p-5 flex items-start gap-4 transition-transform duration-300  shadow-sm group">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary group-hover:bg-white group-hover:text-brand-text-dark  transition-a duration-300 text-brand-base flex items-center justify-center shrink-0 shadow-sm text-[18px] mt-0.5">
                    <FaRocket />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold text-white! uppercase tracking-wider leading-tight mb-1">
                      Strategy-First Approach
                    </span>
                    <h4 className="text-[15px] sm:text-[16px] font-extrabold text-brand-text-dark leading-snug m-0">
                      Custom Growth Roadmap
                    </h4>
                    <p className="text-[13px] text-brand-text-dark/85 leading-snug mt-1 mb-0">
                      Built around your unique business goals, audience & offer.
                    </p>
                  </div>
                </div>

                {/* Box 2: AI & Performance Marketing */}
                <div className="bg-brand-base p-5 flex items-start gap-4 transition-transform duration-300  shadow-sm group">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary group-hover:bg-white group-hover:text-brand-text-dark transition-a duration-300 text-brand-base flex items-center justify-center shrink-0 shadow-sm text-[18px] mt-0.5">
                    <FaBolt />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold text-white! uppercase tracking-wider leading-tight mb-1">
                      AI & Performance Ads
                    </span>
                    <h4 className="text-[15px] sm:text-[16px] font-extrabold text-brand-text-dark leading-snug m-0">
                      Targeted ROI Campaigns
                    </h4>
                    <p className="text-[13px] text-brand-text-dark/85 leading-snug mt-1 mb-0">
                      Meta & Google Ads designed to scale qualified leads.
                    </p>
                  </div>
                </div>

                {/* Box 3: MSME & GST Verified Trust */}
                <div className="bg-brand-base p-5 flex items-start gap-4 transition-transform duration-300  shadow-sm group">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary group-hover:bg-white group-hover:text-brand-text-dark transition-a duration-300 text-brand-base flex items-center justify-center shrink-0 shadow-sm text-[18px] mt-0.5">
                    <FaShieldAlt />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-bold text-white! uppercase tracking-wider leading-tight mb-1">
                      Verified Agency Partner
                    </span>
                    <h4 className="text-[15px] sm:text-[16px] font-extrabold text-brand-text-dark leading-snug m-0">
                      MSME & GST Registered
                    </h4>
                    <p className="text-[13px] text-brand-text-dark/85 leading-snug mt-1 mb-0">
                      100% compliant growth consulting based in Greater Noida.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Collaboration Image below boxes */}
              <div className=" w-full h-full overflow-hidden">
                <img
                  src="/assets/resources/contact-1-2.png"
                  alt="Performance Marketer Office"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-center bg-white">
              {/* Section Tag / Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Section Icon"
                  className="w-auto h-auto"
                />
                <h6 className="text-brand-text! text-[14px] font-semibold! uppercase tracking-wider m-0">
                  LET'S CONNECT
                </h6>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-text-dark font-heading leading-[1.2] mb-3">
                Feel Free to Write us Anytime
              </h2>
              <p className="text-brand-text text-[14px] sm:text-[15px] mb-8 leading-relaxed max-w-2xl">
                We help businesses build online visibility, generate qualified
                leads and create stronger customer journeys through modern
                digital marketing.
              </p>

              {/* Form Grid */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 sm:py-4 text-[15px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 sm:py-4 text-[15px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 sm:py-4 text-[15px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-all duration-300"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 sm:py-4 text-[15px] text-brand-text-dark focus:outline-none focus:border-brand-base focus:bg-white transition-all duration-300 cursor-pointer"
                  >
                    <option value="">Select Service Needed</option>
                    <option value="Performance Marketing">
                      Performance Marketing (Meta & Google Ads)
                    </option>
                    <option value="Social Media Marketing">
                      Social Media Marketing & Management
                    </option>
                    <option value="Email Marketing Automation">
                      AI-Driven Email Marketing Automation
                    </option>
                    <option value="SEO & GMB Optimization">
                      SEO & Google Business Profile (GMB)
                    </option>
                    <option value="LinkedIn Personal Branding">
                      LinkedIn Personal Branding
                    </option>
                    <option value="Growth Strategy Consultation">
                      General Growth Strategy Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write a Message..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 sm:py-4 text-[15px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Button
                    type="submit"
                    variant="base"
                    disabled={isSubmitting}
                    className="font-bold uppercase text-[14px] tracking-wider py-4 px-9 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send a Message"}
                  </Button>
                  {submitted && (
                    <span className="text-emerald-600 font-semibold text-sm">
                      ✓ Message sent successfully! We will get back to you
                      shortly.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </Container>

        {/* Google Maps Embed Background below */}
        <div className="w-full h-[450px] lg:h-[500px] overflow-hidden pt-12">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112108.62534570535!2d77.4208035!3d28.4743879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89a43%3A0x6b876fc1b457b01b!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 filter grayscale contrast-125 opacity-85"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
