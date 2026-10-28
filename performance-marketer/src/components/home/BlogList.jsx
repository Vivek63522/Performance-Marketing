import React from "react";
import Section from "../ui/Section";
import Container from "../ui/Container";
import Link from "next/link";
import { Dialog } from "reicon-react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function BlogList() {
  const bloglist = [
    {
      id: 1,
      title: "Improving Business Growth with New Technology",
      category: "Technology",
      image: "/assets/blog/blog-1-1.png",
      link: "/blog/improving-business-growth-with-new-technology",
      comment: "2 Comments",
      date: "08",
      month: "JAN",
      author: "Jane Cooper",
      authorImage: "/assets/blog/blog-author-1-1.jpg",
    },
    {
      id: 2,
      title: "How Performance Marketing Scales Modern Brands",
      category: "Digital Marketing",
      image: "/assets/blog/blog-1-2.png",
      link: "/blog/how-performance-marketing-scales-modern-brands",
      comment: "3 Comments",
      date: "09",
      month: "FEB",
      author: "Annette Black",
      authorImage: "/assets/blog/blog-author-1-2.jpg",
    },
    {
      id: 3,
      title: "AI Automation: The Future of Email Marketing",
      category: "IT Solution",
      image: "/assets/blog/blog-1-3.png",
      link: "/blog/ai-automation-the-future-of-email-marketing",
      comment: "2 Comments",
      date: "07",
      month: "AUG",
      author: "Eleanor Pena",
      authorImage: "/assets/blog/blog-author-1-3.jpg",
    },
  ];

  return (
    <Section className="relative overflow-hidden">
      {/* Decorative Golden Concentric Target Ring */}
      <div className="hidden xl:block absolute top-[52%] -translate-y-1/2 right-4 2xl:right-8 pointer-events-none opacity-80 z-10">
        <div className="w-[22px] h-[22px] rounded-full border border-brand-base flex items-center justify-center">
          <div className="w-[6px] h-[6px] rounded-full bg-brand-base"></div>
        </div>
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-[45px] lg:mb-[60px] relative z-10 px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <img
              src="/assets/shapes/sec-title-s-1.png"
              alt="Section Icon"
              className="w-auto h-auto"
            />
            <span className="text-brand-text! font-body! text-[14px]! font-semibold  uppercase tracking-wider! m-0">
              Articles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px]! font-bold text-brand-text-dark leading-[1.25] m-0">
            Latest News & Articles from <br className="hidden sm:block" /> the
            Blog Posts
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {bloglist.map((item) => {
            const day = !isNaN(item.date)
              ? item.date
              : !isNaN(item.month)
                ? item.month
                : item.date;
            const month = isNaN(item.date) ? item.date : item.month;

            return (
              <div
                key={item.id}
                className="group relative bg-white shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]  overflow-hidden transition-all duration-500 hover:shadow-xl"
              >
                {/* Blog Card Image Container */}
                <div className="relative w-full h-[260px] sm:h-[280px] overflow-hidden bg-gray-100">
                  {/* Image 1: Normal state visible -> on card hover flies right, scales X by 2, fades & blurs */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out opacity-100 translate-x-0 scale-x-100 blur-none group-hover:translate-x-1/2 group-hover:scale-x-[2] group-hover:opacity-0 group-hover:blur-[10px]"
                  />

                  {/* Image 2: Normal state starts on left, scaled X by 2, blurred & hidden -> on card hover flies in and sharpens */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out -translate-x-1/2 scale-x-[2] opacity-0 blur-[10px] group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
                  />

                  {/* Link Overlay with ::before and ::after Plus Icon (Pure Tailwind) */}
                  <Link
                    href={item.link}
                    aria-label={item.title}
                    className="absolute inset-0 w-full h-full bg-[#171717]/50 flex items-center justify-center opacity-0 -translate-y-[20%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10 before:content-[''] before:w-[25px] before:h-[2px] before:bg-white before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:content-[''] after:w-[25px] after:h-[2px] after:bg-white after:block after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90"
                  >
                    <span className="sr-only">{item.title}</span>
                  </Link>

                  {/* Date Badge */}
                  <div className="w-[74px] bg-brand-base flex flex-col items-center justify-center text-center py-[12px] px-[16px] top-[24px] right-[24px] absolute z-20 text-brand-text-dark select-none shadow-md">
                    <span className="text-[28px] font-bold leading-none">
                      {day}
                    </span>
                    <span className="text-[13px] font-bold uppercase tracking-wider mt-1 leading-tight">
                      {month}
                    </span>
                  </div>
                </div>

                {/* Author & Comment Meta Bar */}
                <div className="flex items-center justify-between bg-brand-gray px-[20px] py-[14px] m-0 transition-all duration-400 ease-in-out">
                  <div className="flex items-center justify-center gap-2.5">
                    <img
                      src={item.authorImage}
                      alt={item.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-brand-text-gray text-[14px] font-medium">
                      {item.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dialog
                      size={20}
                      weight="Filled"
                      className="text-brand-base"
                    />
                    <span className="text-brand-text-gray text-[14px] font-medium">
                      {item.comment}
                    </span>
                  </div>
                </div>

                {/* Title & Read More Link */}
                <div className="px-7 sm:px-8 pt-5 pb-7">
                  <h3 className="text-[21px]! sm:text-[23px]! text-brand-text-dark! mb-4 leading-[1.28]! font-bold font-heading">
                    <Link
                      href={item.link}
                      className="text-inherit text-brand-text-dark! hover:text-brand-base! bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 ease-in-out group-hover:bg-[length:100%_1px]"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <Link
                    href={item.link}
                    className="text-brand-text-dark! hover:text-brand-base! text-[14px] font-semibold leading-[25px] relative flex items-center justify-between py-[5px] px-0 z-1 group/read transition-colors duration-300"
                  >
                    <span>Read more</span>
                    <div className="flex-1 mx-3 h-[1px] bg-border transition-colors duration-400 group-hover/read:bg-brand-base" />
                    <FaLongArrowAltRight className="text-[16px] text-brand-text-dark group-hover/read:text-brand-base group-hover/read:translate-x-1 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
