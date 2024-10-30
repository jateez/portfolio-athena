import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dmSans, publicSans } from "@/lib/fonts";
export const metadata: Metadata = {
  title: "Arya | Software Engineer",
  description: "Arya Wibowo Jati personal website that contains his portfolio as a software engineer",
  icons: "@/icon.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.variable} ${dmSans.variable} font-sans antialiased bg-[#fff4e0] text-[#000]`}>
        <Navbar />
        <div className="mx-auto max-w-4xl min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
