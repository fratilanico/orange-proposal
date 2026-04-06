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
  description: "AI upskilling + architecture for Orange Romania. Training your people to build AI systems. From EUR 25K.",
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
