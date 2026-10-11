"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from "./SectionHeading";
import { Star } from "lucide-react";

export default function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const testimonials = [
    {
      id: 1,
      name: "David Smith",
      role: "CEO, TechFlow",
      content: "Brand provided an incredible service for our IT infrastructure. Their team is knowledgeable, responsive, and truly cares about the success of their clients.",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "The web development project they delivered exceeded all our expectations. Fast, secure, and beautifully designed. Highly recommend their services.",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Operations Manager",
      content: "Migrating to the cloud was a breeze thanks to Brand. They handled everything perfectly with zero downtime for our business operations.",
      image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Founder, StartupX",
      content: "Their cybersecurity solutions gave us the peace of mind we needed. Professional, thorough, and top-tier support from day one.",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    }
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          eyebrow="Testimonials"
          title={<>What Customers are <br/> Saying?</>}
          centered={true}
        />

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 touch-pan-y">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] pl-6 min-w-0"
              >
                <div className="bg-white p-10 rounded-xl border border-brand-border shadow-sm h-full flex flex-col justify-between relative group">
                  {/* Decorative quote mark */}
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-brand-base">
                      <path d="M14.017 21L16.017 14.5V3H22.017V14.5L20.017 21H14.017ZM5.01697 21L7.01697 14.5V3H13.017V14.5L11.017 21H5.01697Z" />
                    </svg>
                  </div>

                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-brand-base text-brand-base" />
                      ))}
                    </div>
                    <p className="text-brand-text-dark text-lg md:text-xl font-medium leading-relaxed italic mb-8 relative z-10">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-brand-border pt-6 mt-auto relative z-10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-gray"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-brand-text-dark">{testimonial.name}</h4>
                      <p className="text-brand-text text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
