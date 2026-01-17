'use client';

import { getMinecraftServer } from '@/lib/getMinecraftServer';
import { getSquad } from '@/lib/getSquad';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
}

export default function ServerPage() {
  const server = getMinecraftServer();
  const allMembers = getSquad();
  const [status, setStatus] = useState<ServerStatus>({
    online: server.currentPlayers > 0,
    players: {
      online: server.currentPlayers,
      max: server.maxPlayers,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const eventParticipants = (participantIds: string[]) => {
    return allMembers.filter((m) => participantIds.includes(m.id));
  };

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
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Назад на главную
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">{server.name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">{server.description}</p>
        </div>

        {/* Server Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6"
          >
            <p className="text-sm text-green-100 mb-2">IP Адрес</p>
            <p className="text-lg font-bold text-white break-all">{server.ip}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6"
          >
            <p className="text-sm text-green-100 mb-2">Версия</p>
            <p className="text-lg font-bold text-white">{server.version}</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl p-6"
          >
            <p className="text-sm text-green-100 mb-2">Игроков онлайн</p>
            <p className="text-lg font-bold text-white">
              {status.players.online}/{status.players.max}
              {isLoading && <span className="text-xs text-gray-200 ml-2">(обновляется...)</span>}
            </p>
            <p className="text-xs text-green-200 mt-2">
              {status.online ? '🟢 Сервер онлайн' : '🔴 Сервер оффлайн'}
            </p>
          </motion.div>
        </div>

        {/* Requirements */}
        {(server.requirements as any)?.licensed && (
          <div className="bg-yellow-600 bg-opacity-20 border border-yellow-500 rounded-xl p-6 mb-12">
            <p className="text-yellow-300 font-semibold flex items-center gap-2">
              ⚠️ Сервер исключительно для людей с лицензионной версией игры
            </p>
          </div>
        )}

        {/* How to Join */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">🤝 Как попасть на сервер?</h2>
          <p className="text-xl text-white mb-6">{(server as any).howToJoin}</p>
          
          <div className="flex flex-col gap-4">
            {(server as any).contactTelegram && (
              <a
                href={(server as any).contactTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105"
              >
                📱 Написать в Telegram
              </a>
            )}
          </div>

          {(server as any).modpackInfo && (
            <div className="bg-black bg-opacity-30 rounded-lg p-4 mt-6">
              <p className="text-gray-100">
                <span className="font-semibold text-green-300">📦 Установка модов:</span> {(server as any).modpackInfo}
              </p>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">✨ Особенности сервера</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(server.features || []).map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 rounded-lg p-4 flex items-center gap-3"
              >
                <span className="text-2xl">✅</span>
                <span className="text-gray-100">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Events */}
        {server.events && server.events.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">🎮 События на сервере</h2>
            <div className="space-y-6">
              {server.events.map((event, idx) => {
                const participants = eventParticipants(event.participants);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-800 rounded-xl overflow-hidden"
                  >
                    <div className="md:flex">
                      {event.image && (
                        <div className="md:w-1/3 h-64 md:h-auto">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-2xl font-bold mb-2 text-white">{event.title}</h3>
                        <p className="text-gray-200 mb-4">{event.description}</p>

                        <p className="text-sm text-gray-300 mb-4">
                          📅 {new Date(event.date).toLocaleDateString('ru-RU')}
                        </p>

                        {participants.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-200 mb-2">Участники:</p>
                            <div className="flex flex-wrap gap-2">
                              {participants.map((p) => (
                                <Link
                                  key={p.id}
                                  href={`/squad/${p.id}`}
                                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm text-white font-semibold transition-colors"
                                >
                                  {p.nickname}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
