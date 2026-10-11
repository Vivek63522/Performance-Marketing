import { Monitor, Code, Database, Shield } from "lucide-react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "IT Management",
      description: "Comprehensive IT infrastructure management and strategic technology consulting to align with your business goals.",
      icon: <Monitor className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "Web Development",
      description: "Custom, scalable, and high-performance web applications built using modern frameworks and best practices.",
      icon: <Code className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Data Security",
      description: "Robust cybersecurity solutions to protect your sensitive data and ensure compliance with industry standards.",
      icon: <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: "Cloud Services",
      description: "Seamless cloud migration, hosting, and architecture optimization for improved reliability and reduced costs.",
      icon: <Database className="w-10 h-10 text-white" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Decorative SVG in background */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none w-1/2 h-full">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          eyebrow="What We Do"
          title={<>Services We're Providing to <br/> Our Customers</>}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-brand-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gray rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500 ease-out z-0" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-base rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-brand-base/30">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-brand-text-dark mb-4">
                  <Link href={`/services/${service.id}`} className="hover:text-brand-base transition-colors before:absolute before:inset-0">
                    {service.title}
                  </Link>
                </h3>
                
                <p className="text-brand-text mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-brand-text-dark group-hover:text-brand-base font-bold transition-colors text-sm uppercase tracking-wider">
                  Read More
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
