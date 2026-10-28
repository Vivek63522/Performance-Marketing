import { Suspense } from "react";
import { companyServices } from "@/data/servicesData";
import ServiceDetailsView from "@/components/services/ServiceDetailsView";

export const metadata = {
  title: "Service Details | Manish Verma Consulting",
  description:
    "Explore detailed breakdowns of our digital marketing, SEO, performance marketing, and AI automation services.",
};

async function ServiceDetailsContent({ searchParams }) {
  const params = await searchParams;
  const serviceQuery = params?.service || "";

  let matchedService = companyServices.find(
    (s) =>
      s.title.toLowerCase() === serviceQuery.toLowerCase() ||
      s.shortTitle.toLowerCase() === serviceQuery.toLowerCase() ||
      s.slug.toLowerCase() === serviceQuery.toLowerCase()
  );

  if (!matchedService) {
    matchedService = companyServices[0];
  }

  return <ServiceDetailsView service={matchedService} />;
}

export default function ServiceDetailsQueryPage(props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ServiceDetailsContent {...props} />
    </Suspense>
  );
}
