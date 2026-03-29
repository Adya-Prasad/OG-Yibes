import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OG Yibes — Community events for Gen Z & gamers",
    template: "%s | OG Yibes",
  },
  description:
    "Hang out, club, and compete. Register for RC racing, robot football, drone races, beat boxing, and more — built for youth, speed, and pure energy.",
  openGraph: {
    title: "OG Yibes",
    description:
      "Futuristic community hub for youth events, competitions, and late-night energy.",
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
      className={`${space.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
