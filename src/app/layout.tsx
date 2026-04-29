import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tool Suggester | The Upside of Uncertainty",
  description: "Answer 3 questions and get personalized suggestions from 42 tools for navigating uncertainty.",
  openGraph: {
    title: "What's your scenario?",
    description: "Personalized suggestions from 42 tools for uncertainty.",
    url: "https://tool-suggester.vercel.app",
    siteName: "The Upside of Uncertainty",
    images: [
      {
        url: "https://tool-suggester.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "What's your scenario? — The Upside of Uncertainty",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's your scenario?",
    description: "Personalized suggestions from 42 tools for uncertainty.",
    images: ["https://tool-suggester.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
