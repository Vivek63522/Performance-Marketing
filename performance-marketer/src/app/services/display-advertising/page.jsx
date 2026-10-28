import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailsView from "@/components/services/ServiceDetailsView";

export const metadata = {
  title: "Email Marketing & Automation | Manish Verma Consulting",
  description:
    "Automated lead nurturing, high-converting newsletters, and customer retention email sequences.",
};

export default function DisplayAdvertisingPage() {
  const service = getServiceBySlug("email-marketing");
  return <ServiceDetailsView service={service} />;
}
