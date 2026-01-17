import { Squad } from '@/types';
import squad from '@/data/squad.json';

export function getSquad(): Squad[] {
  return squad;
}

export function getSquadMember(id: string): Squad | null {
  return squad.find((member) => member.id === id) || null;
}

export function getAllSquadIds(): string[] {
  return squad.map((member) => member.id);
}
