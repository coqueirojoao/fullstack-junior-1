import type { Metadata } from "next";
import "./globals.css";
import { merriweather } from "./fonts";

export const metadata: Metadata = {
  title: "GathSession.",
  description: "Build your best community starting from here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
