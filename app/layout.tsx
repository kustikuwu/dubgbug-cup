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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-zinc-950 new-year-bg`}
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

// В компоненте Header или в самой навигации обновить порядок:
// Главная > Участники > Турниры
// Вместо: Главная > Турниры > Участники
