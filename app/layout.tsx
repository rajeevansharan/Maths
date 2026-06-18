import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maths Learning Platform",
  description: "Advanced mathematics learning with premium experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <div className="h-16 md:h-20 shrink-0" aria-hidden="true" />
        <main className="flex-1 relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

