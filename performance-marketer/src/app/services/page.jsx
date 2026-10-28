import React from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { companyServices } from "@/data/servicesData";
import TrustBar from "@/components/home/TrustBar";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="What We Offer"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />

      {/* Services List Grid Section matching Image 1 */}
      <Section className="bg-white">
        <Container>
          {/* Service List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ">
            {companyServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group hover:bg-brand-base relative flex flex-col h-[517px] max-w-[370px] max-h-full bg-white  overflow-hidden shadow-md transition-all duration-400 cursor-pointer ease-in-out"
              >
                <div
                  className="bg-brand-secondary relative z-1 pt-[30px]"
                  style={{
                    mask: "url(/assets/shapes/card-pattern.svg)",
                    maskRepeat: "no-repeat",
                    maskPosition: "center center",
                    maskSize: "cover",
                    height: "344px",
                  }}
                >
                  {/* content  */}
                  <h4 className="text-xl sm:text-[30px]! max-w-[70%] mx-auto! font-bold leading-10! mb-[25px] text-center text-white! m-0 group-hover:text-brand-base! transition-colors duration-400">
                    <span className="">{service.title}</span>
                  </h4>
                  {/* Center White Icon Notch Box */}
                  <div className="w-[200px] h-[175px] bg-white group-hover:bg-brand-base group-hover:text-brand-secondary text-[55px] text-brand-base border-[16px] border-black mx-auto flex justify-center pt-[18px] transition-all duration-400 ease-in-out ">
                    <i className={`${service.iconClass}`} />
                  </div>
                </div>
                <div
                  className="bg-brand-secondary absolute w-full bottom-0 overflow-hidden  "
                  style={{
                    mask: "url(/assets/shapes/card-pattern2.svg)",
                    maskRepeat: "no-repeat",
                    maskPosition: "center center",
                    maskSize: "100%",
                    height: "344px",
                  }}
                >
                  <img
                    src={service.gridImage || service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 "
                  />
                  {/* overlap animation */}
                  <div className="w-full h-full bg-brand-secondary/70 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"></div>{" "}
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Action CTA Banner */}
          <div className="mt-16 sm:mt-20 bg-brand-base p-8 sm:p-10 text-brand-secondary flex flex-col md:flex-row items-center justify-between gap-6  relative overflow-hidden">
            <div
              className="absolute inset-0  pointer-events-none bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/shapes/service-shape-2-1.png')",
              }}
            />
            <div className="relative z-10 max-w-xl">
              <span className=" font-bold! text-white!  text-sm uppercase tracking-wider block mb-2">
                LET'S TALK GROWTH
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-10 mb-[25px] m-0">
                Ready to Scale Your Online Revenue & Qualified Leads?
              </h3>
            </div>
            <div className="relative z-10 shrink-0">
              <Button
                variant="dark"
                href="/contact"
                className="font-bold text-[15px] uppercase tracking-wider py-4 px-9 shadow-md"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <TrustBar />
    </>
  );
}
