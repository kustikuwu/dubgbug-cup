import { Squad } from '@/types';
import squad from '@/data/squad.json';

export function getSquadMember(id: string): Squad | null {
  return squad.find((member) => member.id === id) || null;
}

export function getAllSquadMembers(): Squad[] {
  return squad;
}
