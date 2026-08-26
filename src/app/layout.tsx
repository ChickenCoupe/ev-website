import type { Metadata } from "next";
import "@fontsource/oxanium/400.css";
import "@fontsource/oxanium/500.css";
import "@fontsource/oxanium/600.css";
import "@fontsource/oxanium/700.css";
import "./globals.css";
import Header from "./Header";

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
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
