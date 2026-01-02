import squad from "@/data/squad.json";
import type { SquadMember } from "@/types/SquadMember";

export function getSquad(): SquadMember[] {
  return squad as SquadMember[];
}

export function getSquadMemberById(id: string): SquadMember | undefined {
  return getSquad().find(member => member.id === id);
}
