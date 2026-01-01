import people from "@/data/people.json";
import type { Person } from "@/types";

export default function ParticipantsPage() {
  const squad = (people as Person[]).filter(
    (person) => person.isSquadMember
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Участники сквада
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {squad.map((person) => (
          <div
            key={person.id}
            className="p-4 bg-zinc-900 rounded text-white"
          >
            <h2 className="text-xl font-semibold">
              {person.name}
              {person.nickname && ` (${person.nickname})`}
            </h2>

            {person.twitch && (
              <a
                href={person.twitch}
                target="_blank"
                className="text-purple-400 hover:underline"
              >
                Twitch
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
