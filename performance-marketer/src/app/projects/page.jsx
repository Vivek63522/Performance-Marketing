"use client";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

import { projectData } from "@/data/projectData";

const projects = projectData.map((p) => ({
  ...p,
  link: `/project-details?id=${p.id}`,
}));

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our Projects" subtitle="Case Studies" />
      <Section>
        <Container>
          {/* 4 Projects Grid matching 1600px container */}
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative z-10 overflow-hidden group max-w-[400px] sm:max-w-none mx-auto w-full select-none"
                >
                  {/* Image Thumbnail Container */}
                  <div className="relative h-[420px] sm:h-[460px] lg:h-[440px] max-h-[440px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover scale-100 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Dark Hover Overlay (height transitions 0% -> 100%) */}
                    <div className="absolute inset-x-0 top-0 h-0 bg-brand-secondary/60 transition-all duration-400 ease-in-out group-hover:h-full pointer-events-none z-10" />

                    {/* Content Box (slides in from left on hover) */}
                    <div className="absolute bottom-0 left-0 right-[30px] sm:max-md:right-0 sm:max-md:w-full bg-brand-base px-6 sm:px-[30px] py-3 sm:pb-[18px] sm:pt-3 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0 z-20">
                      {/* Floating Circular Plus Action Button */}
                      <Link
                        href={project.link}
                        className="absolute right-[25px] sm:right-[30px] -top-5 w-10 h-10 rounded-full bg-brand-secondary hover:bg-white! flex items-center justify-center text-white hover:text-brand-base transition-colors duration-300 shadow-md group/btn z-30"
                        aria-label={`View ${project.title}`}
                      >
                        <FaPlus className="w-3.5 h-3.5 text-white group-hover/btn:text-brand-base transition-colors duration-300" />
                      </Link>

                      {/* Title with animated underline */}
                      <h4 className="text-brand-text-dark! text-[20px] font-bold  leading-tight mb-1 m-0">
                        <Link
                          href={project.link}
                          className="text-brand-text-dark! bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 hover:bg-[length:100%_1px] inline-block"
                        >
                          {project.title}
                        </Link>
                      </h4>

                      {/* Subtitle / Category */}
                      <p className="text-brand-text-dark text-[15px] sm:text-[16px] font-medium leading-normal m-0">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
