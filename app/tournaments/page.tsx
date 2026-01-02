import Link from "next/link";
import tournaments from "@/data/tournaments.json";
import type { Tournament } from "@/types";

export default function TournamentsPage() {
  const data = tournaments as Tournament[];

  return (
    <main className="p-8 min-h-screen bg-zinc-950 text-white">
      <h1 className="text-3xl font-bold mb-6">Турниры</h1>

      <div className="grid gap-4">
        {data.map(t => (
          <Link
            key={t.id}
            href={`/tournaments/${t.id}`}
            className="block p-4 rounded bg-zinc-900 hover:bg-zinc-800"
          >
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-sm text-zinc-400">
              {t.game} • {t.status}
            </p>
            <p className="mt-2">{t.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
