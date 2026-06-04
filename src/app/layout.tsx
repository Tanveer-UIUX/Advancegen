import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Advancegen | Make it Easy",
  description:
    "We build custom AI solutions and intelligent workflows that help businesses automate, scale, and grow.",
  keywords: ["AI solutions", "process automation", "data analytics", "AI assistants"],
  openGraph: {
    title: "Advancegen | Make it Easy",
    description:
      "Intelligent AI solutions that help businesses automate, scale, and grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
