import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";
import "./flaticon.css";
import "@flaticon/flaticon-uicons/css/all/all.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Performance Marketer",
  description: "Performance Marketer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <TopBar />
        <Header />
        <main className="flex-1 flex flex-col w-full">{children}</main>
        <Footer />
        <CustomCursor />
        <BackToTop />
      </body>
    </html>
  );
}
