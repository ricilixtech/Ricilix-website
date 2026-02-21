import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Heading Font (Updated)
const headingFont = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

// Body Font
const bodyFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricilix - Business Automation & Digital Solutions",
  description:
    "Transform your business with intelligent automation, CRM optimization, and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} bg-white`}
    >
      <body className="bg-white text-neutral-700 antialiased min-h-screen">
        <Navbar />
        <main className="bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

