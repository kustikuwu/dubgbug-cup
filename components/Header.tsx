"use client";

import Link from "next/link";
import Garland from "@/components/ui/Garland"; // <-- вот здесь исправлено

export default function Header() {
  return (
    <header className="relative w-full">
      {/* Новогодняя гирлянда */}
      <Garland />

      <nav className="w-full px-8 py-5 flex gap-8 bg-zinc-900/80 backdrop-blur-sm text-white border-b border-zinc-800 sticky top-0 z-50">
        <Link
          href="/"
          className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group"
        >
          Главная
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200" />
        </Link>

        <Link
          href="/tournaments"
          className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group"
        >
          Турниры
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200" />
        </Link>

        <Link
          href="/server"
          className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group"
        >
          Сервер Minecraft
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200" />
        </Link>

        <Link
          href="/people"
          className="hidden text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group"
        >
          Люди
        </Link>

        <Link
          href="/participants"
          className="text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group"
        >
          Участники сквада
        </Link>
      </nav>
    </header>
  );
}
