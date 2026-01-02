"use client";

import SquadCarousel from "@/components/participants/SquadCarousel";
import Snowfall from "@/components/ui/Snowfall";
import { getSquad } from "@/lib/getSquad";

export default function ParticipantsPage() {
  const members = getSquad(); // возвращает массив участников из JSON

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 relative flex flex-col items-center">
      {/* Снег */}
      <Snowfall />

      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Участники сквада
      </h1>

      <div className="flex justify-center w-full">
        <SquadCarousel members={members} />
      </div>
    </main>
  );
}
