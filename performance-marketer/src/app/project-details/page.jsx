"use client";

import React, { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { projectData } from "@/data/projectData";
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { ArrowRightUp } from "reicon-react";

export default function ProjectDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="w-8 h-8 border-2 border-brand-base border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-brand-text-gray text-sm">
            Loading project details...
          </p>
        </div>
      }
    >
      <ProjectDetailsContent />
    </Suspense>
  );
}

function ProjectDetailsContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const parsedId = idParam ? parseInt(idParam, 10) : 1;

  const currentIndex = projectData.findIndex((p) => p.id === parsedId);
  const project =
    currentIndex !== -1 ? projectData[currentIndex] : projectData[0];

  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : projectData.length - 1;
  const nextIndex =
    currentIndex < projectData.length - 1 ? currentIndex + 1 : 0;
  const prevProject = projectData[prevIndex];
  const nextProject = projectData[nextIndex];

  // 3 related projects for the bottom showcase
  const relatedProjects = projectData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);
  if (relatedProjects.length < 3) {
    relatedProjects.push(...projectData.slice(0, 3 - relatedProjects.length));
  }

  // Active expanded project ID (defaults to middle card, index 1)
  const [activeProjectId, setActiveProjectId] = useState(
    relatedProjects[1]?.id ?? relatedProjects[0]?.id,
  );

  useEffect(() => {
    if (relatedProjects.length > 1) {
      setActiveProjectId(relatedProjects[1].id);
    } else if (relatedProjects.length > 0) {
      setActiveProjectId(relatedProjects[0].id);
    }
  }, [project.id]);

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle="Project Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      {/* Main Project Details Section */}
      <Section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          {/* 1. Main Featured Banner Image */}
          <div className="relative w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[560px] overflow-hidden bg-gray-100 shadow-md">
            <img
              src={project.bannerImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* 2. Content Body & Sidebar Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 sm:mt-16">
            {/* Left Column: Rich Description & Challenges (8 cols) */}
            <div className="lg:col-span-8">
              {/* Intro Paragraph */}
              <p className="text-[15px] sm:text-[16px] text-brand-text leading-relaxed mb-6">
                {project.intro}
              </p>

              {/* Highlight Quote (Orange Bold Callout) */}
              <h3 className="text-brand-base! text-[18px] sm:text-[21px] font-bold leading-relaxed my-6 font-heading">
                {project.highlightQuote}
              </h3>

              {/* Extended Description */}
              <div className="space-y-5 text-[15px] sm:text-[16px] text-brand-text leading-relaxed mb-10">
                {project.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Subheading: Project Challenges */}
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-dark font-heading mt-10 mb-6">
                Project Challenges
              </h2>

              {/* Challenges Checkmarks */}
              <div className="space-y-4 mb-8">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-brand-base text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <FaCheck size={10} className="font-bold" />
                    </div>
                    <span className="text-[15px] sm:text-[16px] text-brand-text leading-snug">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Conclusion Paragraph */}
              <p className="text-[15px] sm:text-[16px] text-brand-text leading-relaxed">
                {project.conclusion}
              </p>
            </div>

            {/* Right Column: Project Details Meta Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white p-7 sm:p-9 shadow-[0px_10px_60px_rgba(0,0,0,0.07)] border-t-[5px] border-brand-base ">
                {/* Meta Item 1: Services */}
                <div className="mb-6">
                  <span className="text-[13px] font-semibold text-brand-text-gray uppercase tracking-wider block mb-1">
                    Services:
                  </span>
                  <h4 className="text-[17px] sm:text-[18px] font-bold text-brand-text-dark font-heading m-0">
                    {project.service}
                  </h4>
                </div>

                {/* Meta Item 2: Clients */}
                <div className="mb-6">
                  <span className="text-[13px] font-semibold text-brand-text-gray uppercase tracking-wider block mb-1">
                    Clients:
                  </span>
                  <h4 className="text-[17px] sm:text-[18px] font-bold text-brand-text-dark font-heading m-0">
                    {project.client}
                  </h4>
                </div>

                {/* Meta Item 3: Location */}
                <div className="mb-8">
                  <span className="text-[13px] font-semibold text-brand-text-gray uppercase tracking-wider block mb-1">
                    Location:
                  </span>
                  <h4 className="text-[17px] sm:text-[18px] font-bold text-brand-text-dark font-heading m-0">
                    {project.location}
                  </h4>
                </div>

                {/* Social Share Icons */}
                <div className="pt-6 border-t border-gray-100 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Share on Facebook"
                    className="w-9 h-9 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! hover:text-brand-text-dark! flex items-center justify-center transition-colors duration-300 text-[13px]"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    aria-label="Share on Twitter"
                    className="w-9 h-9 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! hover:text-brand-text-dark! flex items-center justify-center transition-colors duration-300 text-[13px]"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="Share on LinkedIn"
                    className="w-9 h-9 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! hover:text-brand-text-dark! flex items-center justify-center transition-colors duration-300  text-[13px]"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    aria-label="Share on Instagram"
                    className="w-9 h-9 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! hover:text-brand-text-dark! flex items-center justify-center transition-colors duration-300 text-[13px]"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Previous / Next Project Navigation Bar */}
          <div className="mt-14 sm:mt-16 py-4 sm:py-5 px-6 sm:px-8 border-t border-b border-gray-200 bg-[#fcfcfd] flex items-center justify-between">
            {/* Previous */}
            <Link
              href={`/project-details?id=${prevProject.id}`}
              className="group flex items-center gap-3 text-brand-text-dark! hover:text-brand-base! font-bold text-[14px] uppercase tracking-wider transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-full  group-hover:bg-brand-base group-hover:text-white text-brand-secondary bg-brand-gray flex items-center justify-center transition-all duration-300">
                <FaChevronLeft size={14} />
              </div>
              <span>Previous</span>
            </Link>

            {/* Next */}
            <Link
              href={`/project-details?id=${nextProject.id}`}
              className="group flex items-center gap-3 text-brand-text-dark! hover:text-brand-base! font-bold text-[14px] uppercase tracking-wider transition-colors duration-300"
            >
              <span>Next</span>
              <div className="w-9 h-9 rounded-full  group-hover:bg-brand-base group-hover:text-white text-brand-secondary bg-brand-gray flex items-center justify-center transition-all duration-300">
                <FaChevronRight size={14} />
              </div>
            </Link>
          </div>

          {/* 4. "Our Recently Completed Latest Projects" Section */}
          <div className="mt-20 sm:mt-24 pt-12 ">
            {/* Section Eyebrow & Title */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Section Icon"
                  className="w-auto h-auto"
                />
                <span className="text-[13px] sm:text-[14px] font-bold uppercase text-brand-text-gray tracking-wider">
                  LATEST PROJECT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-brand-text-dark font-heading leading-tight m-0">
                Our Recently Completed <br className="hidden sm:block" /> Latest
                Projects
              </h2>
            </div>

            {/* Expanding / Choice Interactive Project Showcase (Pure Tailwind CSS) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6 w-full max-w-[1200px] mx-auto">
              {relatedProjects.map((p) => {
                const isExpanded = p.id === activeProjectId;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      if (!isExpanded) {
                        setActiveProjectId(p.id);
                      }
                    }}
                    className={`relative overflow-hidden group select-none transition-all duration-500 ease-out shadow-md ${
                      isExpanded
                        ? "w-full md:w-[460px] lg:w-[500px] xl:w-[570px] max-w-full md:max-w-[460px] lg:max-w-[500px] xl:max-w-[570px] h-[450px] sm:h-[480px] md:h-[500px] cursor-default z-10"
                        : "w-full md:w-[180px] lg:w-[220px] xl:w-[270px] max-w-full md:max-w-[180px] lg:max-w-[220px] xl:max-w-[270px] h-[190px] md:h-[500px] cursor-pointer hover:shadow-lg z-0"
                    }`}
                  >
                    {/* Project Image */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
                        isExpanded
                          ? "scale-100"
                          : "scale-105 group-hover:scale-110"
                      }`}
                    />

                    {/* Dark gradient overlay on collapsed cards */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                        isExpanded
                          ? "bg-black/15 opacity-100"
                          : "bg-black/25 group-hover:bg-black/15 opacity-100"
                      }`}
                    />

                    {/* Orange Content Box (Visible only on Expanded card) */}
                    <div
                      className={`absolute inset-6 sm:inset-10 xl:top-[60px] xl:left-[70px] xl:bottom-[60px] xl:right-[70px] bg-brand-base/90 flex flex-col justify-end items-center pb-8 sm:pb-10 px-6 text-center shadow-xl backdrop-blur-[2px] transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      {/* Project Title */}
                      <h3 className="text-xl! sm:text-2xl! xl:text-[28px]! font-bold text-brand-text-dark font-heading leading-tight mb-1 m-0">
                        <Link
                          href={`/project-details?id=${p.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-brand-text-dark! hover:opacity-80 transition-opacity inline-block"
                        >
                          {p.title}
                        </Link>
                      </h3>

                      {/* Project Category */}
                      <p className="text-[14px]! sm:text-[18px]! font-medium text-brand-text-dark/85 mb-5 sm:mb-6">
                        {p.category}
                      </p>

                      {/* Diagonal Arrow Icon Button */}
                      <Link
                        href={`/project-details?id=${p.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-white! hover:scale-110 active:scale-95 transition-transform duration-300 inline-flex items-center justify-center cursor-pointer"
                        aria-label={`View ${p.title}`}
                      >
                        <ArrowRightUp className="text-white! w-10 h-10  transform transition-transform duration-300 hover:rotate-[45deg]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
