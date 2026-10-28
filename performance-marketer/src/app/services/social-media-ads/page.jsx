import { getServiceBySlug } from "@/data/servicesData";
import ServiceDetailsView from "@/components/services/ServiceDetailsView";

export const metadata = {
  title: "Social Media Marketing | Manish Verma Consulting",
  description:
    "Build organic brand authority, viral reels, and engaged communities with strategic social media marketing.",
};

export default function SocialMediaAdsPage() {
  const service = getServiceBySlug("social-media-marketing");
  return <ServiceDetailsView service={service} />;
}
