import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

import FloatingMenu from "@/components/FloatingMenu";
import AmbientBackground from "@/components/AmbientBackground";

export const metadata: Metadata = {
  title: "Alex Abraham - Creative Developer",
  description: "Personal Portfolio of Alex Abraham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${spaceGrotesk.className} bg-[#121212] text-white antialiased overflow-x-hidden`}>
        <AmbientBackground />
        <FloatingMenu />
        {children}
      </body>
    </html>
  );
}
