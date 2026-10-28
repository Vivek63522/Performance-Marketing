import Link from "next/link";
import Button from "../ui/Button";
import { FaCheck } from "react-icons/fa6";
import Section from "../ui/Section";

const benefitCards = [
  {
    id: 1,
    title: "Deliver Strategic Solutions",
    description:
      "Custom digital marketing strategies built around your business goals, target audience, and high conversion.",
    iconClass: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ paintOrder: "stroke fill" }}
        aria-label="cycle trust"
        viewBox="0 0 180 169"
        className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-sm"
      >
        <path d="M83.3 9A74 74 0 0 0 28 44.6c0 2.6 2.9 1.5 4.6-1.7a79 79 0 0 1 22.2-20.8 84 84 0 0 1 14.9-6.9 55 55 0 0 1 21.8-2.7c12.7 0 14.7.3 21.3 2.7a69 69 0 0 1 23.9 14.4l5.8 5.3-4.5-.2c-2.5-.1-4.7.2-5 .8-.5.9 15 5.8 15.9 5 .5-.6-2.1-16.2-3-17.7-1.6-2.5-2.8.6-2 4.9.5 2.4.6 4.3.4 4.3a55 55 0 0 1-6.9-5.9A69 69 0 0 0 83.3 9M16 53.4q.1 1.5 12.6 5.6c9 3 12.4 4.6 12 5.6l-5.1 16.6a394 394 0 0 1-5.4 17.4l-.9 2.1-9.9-2.7c-6.2-1.8-10.2-2.5-10.8-1.9-1.5 1.4.6 2.4 11.7 5.5 9.6 2.7 9.8 2.7 11.9.8 2-1.8 2.1-1.8 5.7.1 3.2 1.7 3.8 2.6 4.3 6.4.6 4.4 2.8 7.1 5.8 7.1.9 0 2.4 1.4 3.3 3a7 7 0 0 0 4.7 3.6c1.6.3 3.8 1.9 5 3.5q2.1 3 5.1 2.9c1.8 0 3.9 1 5.4 2.5 3 3 5.1 3.1 9.1.7 2.9-1.8 3.1-1.8 6 0 3.6 2.2 8.4 2.3 11.1.3q2-1.3 5-.9c3.3.6 9.4-1.8 9.4-3.6 0-.6 1.7-1 3.8-1 4.1 0 7.2-2.3 7.2-5.3q-.1-1.8 3.3-1.7c4.1 0 6.8-2.7 6.9-6.9.1-2.7.8-3.6 5.3-6.1 5.9-3.3 8-3.7 8.9-1.5.8 2.1 2.7 1.9 13.9-1.4 10.4-3 11.6-3.6 10.1-5.1-.6-.6-4.6.1-10.8 2a68 68 0 0 1-10.2 2.7c-.2-.1-2.8-8.2-5.9-17.9l-6.1-19.1c-.4-1 2-2.3 8.8-4.7 12.5-4.5 15.3-5.9 14-7.2-1.1-1.1-2.1-.7-20.4 6.2-3.2 1.2-5.8 2.7-5.8 3.5s-1.5 1.6-3.4 1.9c-2.8.5-5.4-.3-15.2-5.1-11.7-5.8-11.9-5.8-19.9-5.5l-11 .2c-15.5-.6-15.8-.5-24.5 3.4-10.7 4.8-14.1 5.4-16.6 2.9A143 143 0 0 0 17.2 52q-1.1.1-1.2 1.4m65 5.4c0 .4-1.3 1.5-2.8 2.4a44 44 0 0 0-7.5 6.7c-6 6.4-6.3 10.2-1 13 3.5 1.8 6.2 1.3 13-2.4 10.2-5.6 9.8-5.8 28.8 12.7 17.7 17.2 20.3 20.5 18.5 23.8-2.2 4.2-5.6 2.5-16.4-8a86 86 0 0 0-11.4-10c-2.7 0-.7 2.8 7.9 10.9 5 4.7 9.5 9.5 9.9 10.6 1.1 3-.6 5.5-3.9 5.5-2.2 0-4.9-2-11.9-8.5-8.2-7.7-11.2-9.8-11.2-7.8 0 .4 3.9 4.7 8.6 9.4l8.6 8.7-2.5 1.7c-3.6 2.3-5.7 1.4-13.1-5.6q-8.7-8.1-8.6-5.1c0 .4 2.5 3.2 5.5 6.2 4.2 4.1 5.2 5.7 4.3 6.7q-2.2 2.5-7.9-.3c-2.5-1.2-3-2-2.5-3.9 1-3.8-1-7.5-4.4-8.1-2.3-.5-3-1.2-3-3 0-2.6-4.7-6.7-6.7-5.9q-1.4.4-2.4-2.4c-1.2-3.3-4.8-5.6-7.7-4.7q-2 .8-4.6-1.9c-3.2-3.2-5.7-3.2-9.6.1l-3.1 2.7-4.2-2.3-4.9-2.9c-.3-.3.2-3.3 1.2-6.6l4.5-14.8 2.6-8.7h4.5q4.4 0 13.1-3.9L71 58.7c2.4-.9 10-.8 10 .1m34.6 5.7c10.4 5.2 11.8 5.7 15.8 5.1l4.5-.7 3 9.8 5 15.5 2 5.7-7.2 3.6-7.2 3.7-5.7-6.4c-4.7-5.3-5.3-6.4-3.7-6.6 3.2-.6 2.1-2.2-1.5-2.2-2.9 0-4.8-1.3-13.5-9.6-9-8.6-10.6-9.7-14.5-10.1-3.7-.5-5.4 0-11 3.2-4.9 2.7-7.3 3.5-9.2 3.1-4.5-1.2-4-3.4 2.2-9.8 6.8-6.9 8.1-7.7 14.9-9.5 8.6-2.1 13.5-1.2 26.1 5.2m-61.2 37.1c2.1 2.1 2.1 2.5-1.4 7.2-3.1 4.3-4.7 5.1-6.8 3s-1.3-5.8 1.7-8.9c3.4-3.3 4.3-3.5 6.5-1.3m11.6 6.8c0 2.2-4.7 9.7-6.9 11.1-1.8 1-4.9-.4-5.6-2.6-.8-2.3 2.5-7.9 6.2-10.9 3.1-2.4 6.3-1.2 6.3 2.4m9 6.4c0 3.1-5.8 11.2-7.9 11.2-1.9 0-5.1-2.4-5.1-3.9a37 37 0 0 1 8.2-10.4c2-.7 4.8 1.2 4.8 3.1m6.8 8.8c.2 2.5-.3 3.7-2.4 5.3-3.2 2.5-3.8 2.6-5.8.5-1.3-1.2-1.4-2-.5-3.7 3.4-6.5 8.2-7.6 8.7-2.1"></path>
        <path d="M158 114.2c0 2.8-8.8 15.7-15 21.8a71.5 71.5 0 0 1-88.6 9.9A97 97 0 0 1 35 129c0-.5 1.6-.4 3.6.2 3.5.9 6.9-.2 4.7-1.5a56 56 0 0 0-15.4-4.9c-.6.6 1.5 15 2.6 18q.6 1.1 1.6.6 1-.7.6-5.5l-.6-4.8 5.7 5.5a76 76 0 0 0 86.7 16.4 72 72 0 0 0 33.5-31.1c3.3-6.3 3.8-8.9 1.5-8.9q-1.4 0-1.5 1.2"></path>
      </svg>
    ),
    bgImage: "/assets/about/project-2-1.png",
  },
  {
    id: 2,
    title: "Latest AI Technology",
    description:
      "Modern AI workflows, automated email nurturing, and smart data-driven advertising campaigns.",
    iconClass: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ paintOrder: "stroke fill" }}
        aria-label="brain circuit"
        viewBox="0 0 176 171"
        className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm"
      >
        <path d="M58.3 9.7c-2.5.8-5.7 3.1-7.5 5.2a16 16 0 0 1-8.8 5.4 24.5 24.5 0 0 0-17.4 22.9c-.2 5.5-.4 5.8-4.3 8.7-7.8 5.7-11.6 18.5-8.4 28.4 1.1 3.1.9 4.1-1.1 7.9a22 22 0 0 0-2.2 11.3c0 8.4 2.4 13.6 8.3 18.6l3.9 3.4-.5 7.1c-.5 5.7-.2 7.7 1.5 11A22 22 0 0 0 41.1 152c3.4 0 4.9.7 9 4.4 9.9 8.9 26.1 8.6 34.8-.8l2.5-2.6 3 2.9c5.4 5.1 9.4 6.6 17.6 6.6 8.7 0 14-2.3 18.7-7.9 2.5-3 3.4-3.4 9.1-3.8 7.3-.5 12.9-3.8 17.7-10.7 2.7-3.8 3-5.1 3.1-12.2s.4-8.1 2.6-9.8c1.3-1.1 3.7-4.3 5.3-7.3 4-7.3 4.1-16.2.3-23.1-2.6-4.6-2.6-4.9-1.1-8.5a29 29 0 0 0-1.2-19.2 25 25 0 0 0-9.9-10.7c-2.2-1.1-2.7-2-2.3-3.9.7-4-1.1-11.5-3.9-15.7a26 26 0 0 0-15.7-10.1c-3.3-.5-4.9-1.5-7.1-4.2-4-5-9.6-7.4-17.6-7.4-7.1 0-13.2 2.2-16.4 5.9l-2 2.1-3-2.9a21 21 0 0 0-5.9-4 43 43 0 0 0-20.4.6m15.5 3.4q5 1 7.8 4l2.9 3 .3 36.3.3 36.3-6.9.5C65.1 94.2 59 100 59 111.5c0 5.3-.3 6.1-2.2 7-1.3.6-3.1 2.7-4.1 4.7-1.7 3.5-1.7 4-.2 7.1 2.9 6.2 9.8 7.5 14.6 2.8 4.1-4.1 4-9.2-.1-13.1-2.7-2.5-3-3.5-3-8.5s.3-6 3.4-9.1c3.2-3.2 3.8-3.4 10.5-3.4H85v23.9c0 23.1-.1 23.9-2.3 27.2-4 6.1-13.4 9.1-21.5 7-4.6-1.3-10.7-6.1-11.7-9.2-.6-1.8-1.2-2-5.5-1.4a16.6 16.6 0 0 1-17.6-22.9c1.9-4.5 1.6-5.2-2.8-7-9.6-4-13.2-19-6.8-28.4 2.2-3.3 2.3-4 1.2-6.7a30 30 0 0 1-1.5-15.1c.8-4.3 6.8-11.2 11.3-13.1 3.1-1.3 3.2-1.6 2.6-5.1l-.7-4.2c-.1-.3.2-2.4.6-4.7 1.3-7.4 10.4-15.2 17.9-15.3q2.8.1 4.3-2.9c1.7-3.5 6.7-6.7 12.1-8l4.1-1c.1-.1 2.4.4 5.1 1m41.1 1.8c3.9 2 5.8 3.9 7.6 7.4.8 1.6 2.1 2.1 5.8 2.2 11.3.5 19.6 12.5 16.4 23.7-.7 2.6-.4 2.9 3.8 4.9a19.7 19.7 0 0 1 9.6 26.5l-1.9 4.1 2.8 4.1c1.5 2.3 3 5.8 3.3 7.9 1.3 7.8-2.7 16.6-8.8 19.9-3.1 1.6-3.5 2.3-3 4.4 1.8 7.4 1.7 11.7-.3 15.6q-5.4 10.8-17.9 10.3c-4.2-.2-5.8.1-6.1 1.2-.3.8-2.1 3-4.1 5.1-8.4 8.3-23.5 7.3-29.8-2.2-2.3-3.3-2.3-3.6-2.3-38.5V76.3l6.2-.7c10.4-1.1 19.2-7.8 20.4-15.7.6-3.3 1.2-4.2 4.1-5.4a9 9 0 0 0 4.9-11.9c-2.6-6.1-9.2-7.5-14.5-3-4 3.3-4.3 8.8-.8 13.1 1.9 2.2 2.2 3.5 1.6 6.1C110.5 65.6 104 70 95.5 70H90V46.2c0-21.4.2-24 1.9-26.8 3.8-6.2 15.2-8.4 23-4.5m6.1 29.2c.9 1.6.8 2.6-.5 4.5-3 4.6-8.5 1.5-7.1-3.9.5-2.2 1.2-2.7 3.6-2.7q2.9 0 4 2.1m-57.2 79.1c1.7 1.7 1.5 5.3-.3 6.8-2 1.7-6.2.5-7-2.1-1.3-4 4.4-7.6 7.3-4.7"></path>
        <path d="M54.9 33.9c-4.7 4.8-3.8 11.6 2.1 14.6l3 1.6V77h-6c-4.5 0-6.2-.4-6.7-1.5-.3-.9-1.9-2.3-3.5-3.1-7.3-3.8-15.9 4.1-12.7 11.7 1.2 3 5.4 5.9 8.4 5.9s7.5-3 8.1-5.5c.6-2.4 1-2.5 7.3-2.5 3.9 0 7.2-.5 7.9-1.2q1.2-1 1.2-15.7V50.6l3.5-3.2c2.8-2.5 3.5-3.9 3.5-6.9 0-5.1-4.4-9.5-9.5-9.5-2.7 0-4.4.8-6.6 2.9m9.9 3.3c2.8 2.8.7 7.8-3.3 7.8-2.7 0-4.5-1.8-4.5-4.5s1.8-4.5 4.5-4.5c1.2 0 2.6.5 3.3 1.2M42.4 77.6c2.9 2.9 1.3 7.4-2.5 7.4-2.1 0-4.9-2.6-4.9-4.5s2.7-4.5 4.5-4.5c.7 0 2.1.7 2.9 1.6m92.1-2.8c-2.5.5-6.5 4.1-6.5 5.9 0 .9-1.7 1.3-6.3 1.3-9.5 0-9.7.4-9.7 18.8v15l-3 3c-4.1 4.2-4.1 9.2-.1 13.3 5.4 5.3 13.8 2.9 15.7-4.5a10 10 0 0 0-4.7-10.2l-2.9-1.5V87h4.9c4.2 0 5.4.5 7.9 3 8.7 8.7 21.2-3.5 13-12.6a9 9 0 0 0-8.3-2.6m6.1 7.7c.9 2.2-1.5 5.5-3.9 5.5-4.7 0-6.3-4.8-2.5-7.4a4.2 4.2 0 0 1 6.4 1.9m-22.2 40.1c3 3 1.3 7.4-2.9 7.4-2.7 0-4.5-1.8-4.5-4.5 0-4.2 4.4-5.9 7.4-2.9"></path>
      </svg>
    ),
    bgImage: "/assets/about/project-2-4.png",
  },
];

const checklistItems = [
  "Targeted Meta & Google Ad Campaigns With High ROAS",
  "End-to-End AI Automation & Conversion Funnels",
  "MSME & GST Registered Growth Consulting Agency",
];

function FlowerAsteriskIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2.5C17.2 2.5 18 3.5 18 4.8V8.6C20.3 7.7 22.1 8 23.3 9.2C24.5 10.4 24.8 12.2 23.9 14.5H27.2C28.5 14.5 29.5 15.3 29.5 16.5C29.5 17.7 28.5 18.5 27.2 18.5H23.9C24.8 20.8 24.5 22.6 23.3 23.8C22.1 25 20.3 25.3 18 24.4V27.2C18 28.5 17.2 29.5 16 29.5C14.8 29.5 14 28.5 14 27.2V24.4C11.7 25.3 9.9 25 8.7 23.8C7.5 22.6 7.2 20.8 8.1 18.5H4.8C3.5 18.5 2.5 17.7 2.5 16.5C2.5 15.3 3.5 14.5 4.8 14.5H8.1C7.2 12.2 7.5 10.4 8.7 9.2C9.9 8 11.7 7.7 14 8.6V4.8C14 3.5 14.8 2.5 16 2.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const marqueeItems = [
  "Technology Service",
  "Deliver Perfect Solution",
  "Latest AI Technology",
  "Digital Marketing",
  "Navigating Opportunities",
  "High ROAS Ad Campaigns",
  "Custom Growth Strategies",
  "AI Automation & Funnels",
];

export default function OurBenfites() {
  return (
    <>
      <section variant="dark" className="relative overflow-hidden ">
        <div className="flex flex-col lg:flex-row min-h-[720px] lg:min-h-[760px]">
          {/* Left Side: Team Collaboration Image matching screenshot */}
          <div className="w-full lg:w-1/2 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full">
            <img
              src="/assets/about/project-2-3.png"
              alt="Our Team Benefits"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>

          {/* Right Side: Benefits Content */}
          <div className="w-full lg:w-1/2 bg-brand-secondary relative flex flex-col justify-between pt-[70px] lg:pt-[90px] px-6 sm:px-12 lg:px-16 overflow-hidden">
            {/* Decorative Dot-Grid Pattern Shape on Far Right */}
            <div className="absolute top-0 right-0 h-full w-[170px] pointer-events-none opacity-35 select-none z-0">
              <img
                src="/assets/shapes/benefit-shape-1-1.png"
                alt="Dot pattern"
                className="h-full w-auto object-cover object-left"
              />
            </div>

            <div className="relative z-10 max-w-[620px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3">
                <img
                  src="/assets/shapes/sec-title-s-1.png"
                  alt="Section Icon"
                  className="w-auto h-auto"
                />
                <span className="text-brand-base! font-body! text-[14px]! font-semibold  uppercase tracking-wider! m-0">
                  Our Benefits
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white! leading-[1.25]  mb-9 m-0">
                We’re The Stand Out Expert <br /> In Tech & Digital Growth
              </h2>

              {/* 2 Benefit Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {benefitCards.map((card) => (
                  <div
                    key={card.id}
                    className="relative group overflow-hidden bg-[#18191e] border border-white/10 p-6 sm:p-7 transition-all duration-400 hover:border-brand-base/50"
                  >
                    {/* Subtle dark background image overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                      style={{ backgroundImage: `url('${card.bgImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18191e] via-[#18191e]/85 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      {/* Orange Icon Box */}
                      <div className="w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] bg-brand-base group-hover:bg-brand-secondary   flex items-center justify-center text-brand-secondary mb-5 shadow-md transition-transform duration-300">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full text-brand-secondary  group-hover:text-brand-base  transition-transform duration-500 ease-in-out group-hover:transform-[scale(-1)_rotate(180deg)]">
                          {card.iconClass}
                        </div>
                      </div>

                      {/* Card Title */}
                      <h4 className="text-[20px] sm:text-[22px] font-bold text-white! leading-[1.25] tracking-wide mb-2 m-0 font-heading bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_1px]">
                        {card.title}
                      </h4>

                      {/* Card Description */}
                      <p className="text-[#a4a6ad] text-[14px] sm:text-[15px] leading-[1.65] m-0 font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Checklist Items */}
              <div className="space-y-3.5 mb-10">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-[18px] h-[18px] rounded-full bg-brand-base flex items-center justify-center shrink-0 text-brand-secondary text-[10px]">
                      <FaCheck />
                    </div>
                    <span className="text-[15px] sm:text-[16px] font-bold text-white leading-normal ">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom White Strip (CTA Bar) matching screenshot */}
            <div className="relative z-10 bg-white py-6 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-5 -mx-6 sm:-mx-12 lg:-mx-16 mt-auto border-t border-[#e5e7eb]">
              <span className="text-[19px] sm:text-[21px] font-bold text-brand-text-dark  text-center sm:text-left">
                Your Trusted Digital Marketing Partner
              </span>
              <Button href="/contact" variant="base">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tilted Moving Marquee Text Slider */}
      <Section className="text-slider overflow-hidden">
        <style>{`
          @keyframes marqueeTrackSlide {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .text-slider-active-track {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            width: max-content !important;
            animation: marqueeTrackSlide 28s linear infinite !important;
            will-change: transform;
          }
          .text-slider-active-track:hover {
            animation-play-state: paused !important;
          }
          @keyframes slowSpin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: slowSpin 4s linear infinite !important;
          }
        `}</style>
        <div className="text-slider__inner">
          <div className="relative py-4 sm:py-5 lg:py-6 bg-brand-base -rotate-2 sm:-rotate-2 scale-105 shadow-sm overflow-hidden w-[110%] -ml-[5%] select-none cursor-pointer">
            <div className="text-slider-active-track">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center shrink-0 flex-nowrap"
                >
                  <span className="text-[20px] sm:text-[24px] lg:text-[27px] font-bold text-brand-secondary tracking-normal uppercase whitespace-nowrap font-heading leading-none px-6 sm:px-8 lg:px-10 flex items-center">
                    {item}
                  </span>
                  <div className="flex items-center justify-center shrink-0">
                    <img
                      src="/assets/shapes/star.png"
                      alt="star"
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain shrink-0 animate-spin-slow select-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
