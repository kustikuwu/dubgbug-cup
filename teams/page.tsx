import teams from "@/data/teams.json";
import type { Team } from "@/types";
import TeamCard from "@/components/TeamCard";

export default function TeamsPage() {
  const data = teams as Team[];

  return (
    <main className="p-8 min-h-screen bg-zinc-950">
      <h1 className="text-3xl font-bold mb-6 text-white">Команды</h1>

      <div className="grid gap-4">
        {data.map((team: Team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </main>
  );
}

