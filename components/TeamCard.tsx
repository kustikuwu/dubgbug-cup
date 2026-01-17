"use client";
import { useState } from "react";
import type { Team } from "@/types";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 bg-zinc-900 rounded shadow-md text-white">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-xl font-semibold">{team.name} [{team.tag}]</h3>
        <span className="text-xl">{expanded ? "−" : "+"}</span>
      </div>
      <p className="text-sm text-zinc-400 mt-1">Игроков: {team.players.length}</p>

      {expanded && (
        <ul className="mt-2 list-disc list-inside text-zinc-300">
          {team.players.map(player => (
            <li key={player}>{player}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
