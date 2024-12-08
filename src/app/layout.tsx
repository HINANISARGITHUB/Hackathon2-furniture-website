import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/header";


const inter = Inter({subsets: ['latin'],
  weight: ['400', '500', '700'],
});


export const metadata: Metadata = {
  title: "Furniture-website",
  description: "Created by Hina Nisar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
