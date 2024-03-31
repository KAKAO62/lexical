import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDDY BEAR INU",
  description: "TEDDY BEAR INU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
