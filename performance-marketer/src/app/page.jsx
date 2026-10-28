import HeroSlider from "@/components/home/HeroSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import OurBenfites from "@/components/home/OurBenfites";
import ProjectList from "@/components/home/ProjectList";
import TrustBar from "@/components/home/TrustBar";
import ContactForm from "@/components/home/ContactForm";
import BlogList from "@/components/home/BlogList";
export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <OurBenfites />
      <ProjectList />
      <ContactForm />
      <BlogList />
      <TrustBar />
    </>
  );
}
