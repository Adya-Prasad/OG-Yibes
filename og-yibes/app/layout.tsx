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
    "Browse youth-led competitions — RC racing, robot games, FPV drones, lab nights, and stage battles. One account, purple–indigo UI, fast registration.",
  openGraph: {
    title: "OG Yibes",
    description:
      "Community board for in-person tech and culture events — register online, check in on site.",
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
