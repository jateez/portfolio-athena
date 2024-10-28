import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arya | Software Engineer",
  description: "Arya Wibowo Jati personal website that contains his portfolio as a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.className} antialiased bg-[#fff4e0] text-[#000]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
