import type { Metadata } from "next";
import "./globals.css";
import { Menu } from "@/components/menu/menu";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "IDFerias",
  description: "Agende suas férias sem dor de cabeça.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-tamarind-100 flex ${nunito.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
