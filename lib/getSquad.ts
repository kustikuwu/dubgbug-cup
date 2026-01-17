import { Squad } from '@/types';
import squad from '@/data/squad.json';

function transformSquadMember(member: any): Squad {
  return {
    ...member,
    socialLinks: member.integrations || member.socialLinks,
  };
}

export function getSquad(): Squad[] {
  return squad.map(transformSquadMember);
}

export function getSquadMember(id: string): Squad | null {
  const member = squad.find((member) => member.id === id);
  return member ? transformSquadMember(member) : null;
}

export function getAllSquadIds(): string[] {
  return squad.map((member) => member.id);
}
