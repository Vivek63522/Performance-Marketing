import { Suspense } from "react";
import HomeHeader from "@/components/layout/HomeHeader";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import PageLoader from "@/components/ui/PageLoader";
import "./globals.css";

export const metadata = {
  title: "Performance Marketer",
  description: "Performance Marketer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&f[]=khand@300,400,500,600,700,1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        <Suspense fallback={null}>
          <HomeHeader />
        </Suspense>
        <main className="flex-1 flex flex-col w-full">{children}</main>
        <Footer />
        <CustomCursor />
        <BackToTop />
      </body>
    </html>
  );
}
