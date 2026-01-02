<<<<<<< HEAD
import squad from "@/data/squad.json";
import type { SquadMember } from "@/types/SquadMember";

export function getSquad(): SquadMember[] {
  return squad as SquadMember[];
}

export function getSquadMemberById(id: string): SquadMember | undefined {
  return getSquad().find(member => member.id === id);
}
=======
import squad from "@/data/squad.json";
import type { SquadMember } from "@/types/SquadMember";

export function getSquad(): SquadMember[] {
  return squad as SquadMember[];
}

export function getSquadMemberById(id: string): SquadMember | undefined {
  return getSquad().find(member => member.id === id);
}
>>>>>>> 122a8781d24b66fa3ca694b4dc0f231c8e52fc28
