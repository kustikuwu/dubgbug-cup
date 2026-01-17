import people from "@/data/people.json";
import type { Person } from "@/types";

export default function PeoplePage() {
  const data = people as Person[];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Люди</h1>

      <ul className="grid gap-4">
        {data.map((person) => (
          <li key={person.id} className="p-4 bg-zinc-900 rounded">
            <h2 className="text-xl font-semibold">
              {person.name}
              {person.nickname && ` (${person.nickname})`}
            </h2>
            <p className="text-sm text-zinc-400">Роль: {person.role}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
