import { getSquad } from "@/lib/getSquad";
import { getSquadInfo } from "@/lib/getSquadInfo";
import { getMinecraftServer } from "@/lib/getMinecraftServer";
import { getTournaments } from "@/lib/getTournaments";
import SquadHero from "@/components/SquadHero";
import SquadGallery from "@/components/SquadGallery";
import MinecraftServerCard from "@/components/MinecraftServerCard";
import Link from "next/link";

export const metadata = {
  title: "DungBug Squad - Твой дружный сквад геймеров",
  description:
    "Добро пожаловать в наше сообщество друзей. Совместные игры, приключения и веселье.",
};

export default function Home() {
  const squadMembers = getSquad();
  const squadInfo = getSquadInfo();
  const mcServer = getMinecraftServer();
  const tournaments = getTournaments();

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <SquadHero info={squadInfo} />

      {/* Squad members section */}
      <SquadGallery members={squadMembers} title="Встреть нашу команду" titleClassName="text-white" />

      {/* Minecraft Server section */}
      <section className="py-16 px-4 bg-gray-900 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Наш Minecraft Сервер
          </h2>
          <div className="mb-8">
            <MinecraftServerCard server={mcServer} />
          </div>
          <div className="text-center">
            <Link
              href="/server"
              className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
            >
              Узнать больше о сервере
            </Link>
          </div>
        </div>
      </section>

      {/* Tournaments section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Турниры и события
          </h2>
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            Иногда мы организуем дружеские турниры и соревнования
          </p>
          <div className="text-center">
            <Link
              href="/tournaments"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Все турниры ({tournaments.length})
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}