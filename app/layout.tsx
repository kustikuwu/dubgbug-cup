import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageEffects from "@/components/system/PageEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dungbug Hub",
  description: "Турнирный сайт со статистикой и результатами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
<<<<<<< HEAD
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-zinc-950 new-year-bg`}
=======
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
>>>>>>> 122a8781d24b66fa3ca694b4dc0f231c8e52fc28
      >
        {/* Глобальные эффекты страницы (снег и т.д.) */}
        <PageEffects />

        {/* Основной UI */}
        <Header />
        {children}
      </body>
    </html>
  );
}
