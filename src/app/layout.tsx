import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Operations Lab — InfoAcademy × Orange Romania",
  description: "AI capability transfer for Orange Romania. Your team builds working AI agents in 10 weeks. €25–30K. Owned by Orange.",
  openGraph: {
    title: "AI Operations Lab — Orange Romania",
    description: "10 weeks. €25–30K. Your team builds working AI agents. Architecture blueprint included. Delivered by InfoAcademy — existing Orange vendor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
