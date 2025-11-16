import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavProvider } from "@/contexts/NavContext";
import SiteNavLeft from "@/components/SiteNavLeft";
import MainContent from "@/components/MainContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "You're absolutely right",
  description: "You're absolutely right",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavProvider>
          <div className="flex">
            <SiteNavLeft />
            <MainContent>{children}</MainContent>
          </div>
        </NavProvider>
      </body>
    </html>
  );
}
