'use client';

import Link from 'next/link';
import { Squad } from '@/types';
import { motion } from 'framer-motion';

interface MemberCardProps {
  member: Squad;
  index?: number;
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/squad/${member.id}`}>
        <div className="group relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:scale-105 h-full">
          {/* Avatar section */}
          <div className="relative h-64 bg-gray-800 overflow-hidden">
            {member.avatar ? (
              <img
                src={member.avatar}
                alt={member.nickname}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-6xl font-bold text-white opacity-50">
                  {member.nickname.charAt(0)}
                </span>
              </div>
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Info section */}
          <div className="p-6 flex flex-col h-full">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.nickname}</h3>
              <p className="text-sm text-purple-200 font-semibold mb-3">{member.role}</p>
            </div>
            
            {member.favoriteGames && member.favoriteGames.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {member.favoriteGames.slice(0, 2).map((game) => (
                  <span key={game} className="text-xs bg-purple-500 bg-opacity-50 px-2 py-1 rounded">
                    {game}
                  </span>
                ))}
              </div>
            )}

            {member.stats && (
              <div className="mt-auto pt-3 border-t border-purple-400 border-opacity-30">
                <p className="text-xs text-gray-300">{member.stats.playtime}</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
