"use client"
import type { Metadata } from "next";
import AppBar from "../components/launch_components/AppBar";
import { usePathname } from "next/navigation";
import Footer from "../components/launch_components/Footer";

// export const metadata: Metadata = {
//   title: "Nyansafo",
//   description: "Nyansafo InsureFinTech",
// };

export default function LaunchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div>
      <AppBar />
      {children}
      <Footer/>
    </div>
  );
}
