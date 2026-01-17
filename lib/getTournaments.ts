import { Tournament } from '@/types';
import tournaments from '@/data/tournaments.json';

export function getTournaments(): Tournament[] {
  return tournaments;
}

export function getTournament(id: string): Tournament | null {
  return tournaments.find((t) => t.id === id) || null;
}

export function getTournamentIds(): string[] {
  return tournaments.map((t) => t.id);
}
