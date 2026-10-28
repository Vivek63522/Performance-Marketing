import { companyServices, getServiceBySlug } from "@/data/servicesData";
import ServiceDetailsView from "@/components/services/ServiceDetailsView";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const params = [];
  companyServices.forEach((service) => {
    params.push({ slug: service.slug });
    if (service.aliases) {
      service.aliases.forEach((alias) => {
        params.push({ slug: alias });
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Manish Verma Consulting`,
    description: service.tagline || service.overview[0],
  };
}

export default function ServiceDetailsPage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="w-8 h-8 border-2 border-brand-base border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-brand-text-gray text-sm">Loading service...</p>
        </div>
      }
    >
      <ServiceDetailsContent params={params} />
    </Suspense>
  );
}

async function ServiceDetailsContent({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailsView service={service} />;
}
