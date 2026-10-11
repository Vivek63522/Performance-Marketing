import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  const features = [
    "Highest quality security",
    "Expert team members",
    "Creative layout designs",
    "24/7 Customer support"
  ];

  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative">
               <img src="/assets/background/slider-1-3.jpg" alt="Why Choose Us" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-brand-secondary/10" />
             </div>
             
             {/* Abstract overlapping card */}
             <div className="absolute -left-6 -bottom-6 bg-white p-8 rounded-xl shadow-2xl max-w-xs border-l-4 border-brand-base">
               <p className="text-xl font-bold text-brand-text-dark italic">
                 "We are committed to delivering excellence and pushing boundaries in IT."
               </p>
               <p className="mt-4 text-brand-base font-semibold">- CEO, Brand</p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading 
              eyebrow="Why Choose Us"
              title={<>Why You Should Choose Our Technology Company?</>}
              description="We differentiate ourselves through unwavering commitment to quality, deep technical expertise, and a customer-first approach that ensures long-term success."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-brand-gray p-4 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-base shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-brand-text-dark">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brand-secondary p-8 rounded-xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-base rounded-full opacity-10 -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex flex-col sm:flex-row items-center justify-between relative z-10 gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Have Any Project?</h3>
                  <p className="text-brand-text-gray">Let's discuss how we can bring it to life.</p>
                </div>
                <a href="/contact" className="px-8 py-4 bg-brand-base text-brand-text-dark font-bold rounded hover:bg-white transition-colors text-center whitespace-nowrap">
                  Contact Us Now
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
