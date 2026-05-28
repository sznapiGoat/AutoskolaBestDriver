import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Autoškola Best Driver CB | České Budějovice",
    template: "%s | Autoškola Best Driver CB",
  },
  description:
    "Profesionální autoškola v Českých Budějovicích. Výcvik skupin A (motocykly AM, A1, A2, A) a B (osobní automobily). Individuální přístup, klidné prostředí.",
  keywords: [
    "autoškola",
    "České Budějovice",
    "řidičský průkaz",
    "výcvik B",
    "motocykly",
    "Best Driver",
  ],
  openGraph: {
    siteName: "Autoškola Best Driver CB",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
