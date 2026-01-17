import { Squad } from '@/types';
import squad from '@/data/squad.json';

export function getSquadMember(id: string): Squad | null {
  const member = squad.find((member) => member.id === id);
  if (!member) return null;
  
  // Трансформируем integrations в socialLinks
  return {
    ...member,
    socialLinks: (member as any).integrations || (member as any).socialLinks,
  };
}

export function getAllSquadMembers(): Squad[] {
  return squad.map((member) => ({
    ...member,
    socialLinks: (member as any).integrations || (member as any).socialLinks,
  }));
}
