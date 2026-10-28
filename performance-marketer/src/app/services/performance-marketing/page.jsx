import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailsView from "@/components/services/ServiceDetailsView";

export const metadata = {
  title: "Performance Marketing | Manish Verma Consulting",
  description:
    "Targeted Meta & Google ad campaigns engineered for maximum ROAS and scalable client acquisition.",
};

export default function PerformanceMarketingPage() {
  const service = getServiceBySlug("performance-marketing");
  return <ServiceDetailsView service={service} />;
}
