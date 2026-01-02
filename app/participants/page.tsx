"use client";

import { useState, useEffect } from "react";
import SquadCarousel from "@/components/participants/SquadCarousel";
import Snowfall from "@/components/ui/Snowfall";
import { getSquad } from "@/lib/getSquad";

export default function ParticipantsPage() {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const squad = getSquad(); // Получаем данные из JSON
    setMembers(squad);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-16 relative flex flex-col items-center">
      {/* Снег */}
      <Snowfall />

      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Участники сквада
      </h1>

      <div className="flex justify-center w-full">
        {members.length > 0 ? (
          <SquadCarousel members={members} />
        ) : (
          <p className="text-white">Загрузка участников...</p>
        )}
      </div>
    </main>
  );
}
