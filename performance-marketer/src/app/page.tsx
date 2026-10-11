import HeroSlider from "@/components/home/HeroSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsCarousel />
    </>
  );
}
