import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore - India",
  description: "Explore - India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://img.icons8.com/emoji/48/india-emoji.png"
        />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
