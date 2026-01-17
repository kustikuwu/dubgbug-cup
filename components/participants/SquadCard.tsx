"use client";

import Image from "next/image";
import type { SquadMember } from "@/types/SquadMember";
import SquadIntegrations from "./SquadIntegrations";

interface Props {
  member: SquadMember;
}

export default function SquadCard({ member }: Props) {
  return (
    <section className="max-w-xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-white shadow-lg">
      {/* Аватар */}
      <div className="flex justify-center">
        <Image
          src={member.avatar}
          alt={member.nickname}
          width={160}
          height={160}
          className="rounded-full border-4 border-zinc-800 object-cover"
          priority
        />
      </div>

      {/* Ник + имя */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-bold">{member.nickname}</h2>
        {member.name && <p className="text-zinc-400">{member.name}</p>}
      </div>

      {/* Роль */}
      {member.role && (
        <div className="flex justify-center mt-3">
          <span className="px-4 py-1 text-sm rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
            {member.role}
          </span>
        </div>
      )}

      {/* Описание */}
      {member.description && (
        <p className="text-center text-zinc-300 mt-5 leading-relaxed">
          {member.description}
        </p>
      )}

      {/* Интеграции */}
      {member.integrations && <SquadIntegrations integrations={member.integrations} />}
    </section>
  );
}
