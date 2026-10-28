"use client";

import { usePathname } from "next/navigation";
import TopBar from "./TopBar";
import Header from "./Header";

export default function HomeHeader() {
  const pathname = usePathname();

  // Render TopBar and main Header ONLY on the home page
  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <TopBar />
      <Header />
    </>
  );
}
