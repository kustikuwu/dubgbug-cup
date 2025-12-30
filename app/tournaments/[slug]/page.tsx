import { notFound } from "next/navigation";
import tournaments from "@/data/tournaments.json";
import teamsData from "@/data/teams.json";
import type { Tournament, Team } from "@/types";
import TeamCard from "@/components/TeamCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function TournamentPage({ params }: Props) {
  const { slug } = await params;
  const tournament = (tournaments as Tournament[]).find(t => t.id === slug);

  if (!tournament) notFound();

  // Фильтруем команды, участвующие в турнире
  const tournamentTeams = (teamsData as Team[]).filter(team =>
    tournament.teams.includes(team.id)
  );

  return (
    <main className="min-h-screen p-8 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold mb-2">{tournament.name}</h1>
      <p className="text-zinc-400 mb-4">{tournament.game}</p>
      <p className="mb-4">{tournament.description}</p>
      <p className="mb-4">Даты: {tournament.startDate} - {tournament.endDate}</p>
      <p className="mb-4">Статус: <span className="font-semibold">{tournament.status}</span></p>
      <p className="mb-6">
        Discord: <a href={tournament.discord} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          Присоединиться
        </a>
      </p>

      {/* Команды турнира */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Команды</h2>
        <div className="grid gap-4">
          {tournamentTeams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>

      {/* Результаты */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Результаты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tournament.results.map(result => {
            const team = tournamentTeams.find(t => t.id === result.teamId);
            return (
              <div key={result.teamId} className="p-4 rounded bg-zinc-800 text-white">
                <p>{result.place} место: {team?.name ?? result.teamId} — {result.points ?? 0} очков</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
