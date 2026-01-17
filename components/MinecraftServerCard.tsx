'use client';

import Link from 'next/link';
import { MinecraftServer } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MinecraftServerCardProps {
  server: MinecraftServer;
}

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
}

export default function MinecraftServerCard({ server }: MinecraftServerCardProps) {
  const [status, setStatus] = useState<ServerStatus>({
    online: server.currentPlayers > 0,
    players: {
      online: server.currentPlayers,
      max: server.maxPlayers,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/minecraft-status');
        const data = await response.json();
        console.log('Server status fetched:', data);
        setStatus(data);
      } catch (error) {
        console.error('Failed to fetch server status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Загрузить статус сразу при монтировании
    fetchStatus();

    // Обновлять каждую минуту
    const interval = setInterval(fetchStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/server">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
      >
        <div className="relative h-80 bg-gray-800 overflow-hidden">
          {server.image ? (
            <img
              src={server.image}
              alt={server.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-700 to-emerald-800">
              <div className="text-center">
                <div className="text-6xl mb-4">⛏️</div>
                <p className="text-gray-300">Minecraft Server</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{server.name}</h3>
          <p className="text-gray-200 mb-4">{server.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
              <p className="text-xs text-gray-300">IP Адрес</p>
              <p className="text-sm font-bold text-green-200">{server.ip}</p>
            </div>
            <div className="bg-green-700 bg-opacity-50 rounded-lg p-3">
              <p className="text-xs text-gray-300">Версия</p>
              <p className="text-sm font-bold text-green-200">{server.version}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">
              Игроков: {status.players.online}/{status.players.max}
              {isLoading && <span className="ml-2 text-xs text-gray-400">(обновляется...)</span>}
            </span>
            <div className="flex items-center gap-2">
              {status.players.online > 0 && (
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              )}
              <span className="text-green-300">
                {status.online ? 'Онлайн' : 'Оффлайн'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
