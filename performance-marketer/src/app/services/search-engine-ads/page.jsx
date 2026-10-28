import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailsView from "@/components/services/ServiceDetailsView";

export const metadata = {
  title: "SEO & Online Visibility | Manish Verma Consulting",
  description:
    "Dominate search engine rankings and local Google Business Profile searches with data-driven SEO.",
};

export default function SearchEngineAdsPage() {
  const service = getServiceBySlug("seo-online-visibility");
  return <ServiceDetailsView service={service} />;
}
