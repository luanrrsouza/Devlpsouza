import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Devlpsouza — Portfólio",
    template: "%s — Devlpsouza",
  },
  description:
    "Criação de sites e aplicações web modernas focadas em performance, SEO e conversão.",
  metadataBase: undefined,
  openGraph: {
    title: "Devlpsouza — Portfólio",
    description:
      "Criação de sites e aplicações web modernas focadas em performance, SEO e conversão.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/Logo-Devlpsouza.png",
        width: 872,
        height: 345,
        alt: "Devlpsouza",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh flex flex-col">
          <Reveal />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
