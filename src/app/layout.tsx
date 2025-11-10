import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const manrope = Manrope ({
  subsets:['latin'],
  weight:['400','500','600','700'],
  display:'swap'
});

export const metadata: Metadata = {
  title: "DOOM Pictures | Photography Portfolio",
  description: "Explore the portfolio of Shubham Doom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
