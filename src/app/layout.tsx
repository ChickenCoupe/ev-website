import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cornell Electric Vehicles",
  description: "Cornell's foremost project team dedicated to building autonomous, hyper-efficient electric vehicles. Operating at the pace of a startup, producing industry-grade vehicles that compete at the highest levels.",
  icons: {
    icon: '/cev-favicon.ico',
    shortcut: '/cev-favicon.ico',
    apple: '/cev-logo.png',
  },
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
        <Header />
        {children}
      </body>
    </html>
  );
}
