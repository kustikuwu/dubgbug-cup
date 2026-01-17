import { getSquad, getSquadMember } from '@/lib/getSquad';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return getSquad().map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getSquadMember(id);
  return {
    title: `${member?.nickname} - DungBug Squad`,
    description: member?.bio || 'Профиль члена сквада',
  };
}

export default async function SquadMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getSquadMember(id);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Назад на главную
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Avatar & Basic Info */}
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl overflow-hidden mb-6">
                <div className="aspect-square bg-gray-800 flex items-center justify-center">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.nickname}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl font-bold text-gray-400">
                      {member.nickname.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h1 className="text-3xl font-bold mb-2">{member.nickname}</h1>
                <p className="text-purple-300 text-lg font-semibold mb-4">{member.role}</p>

                {member.joinDate && (
                  <p className="text-sm text-gray-400 mb-4">
                    В скваде с {new Date(member.joinDate).toLocaleDateString('ru-RU')}
                  </p>
                )}

                {/* Social Links */}
                {member.socialLinks && Object.keys(member.socialLinks).length > 0 && (
                  <div className="border-t border-gray-700 pt-4 mt-4">
                    <h3 className="font-semibold mb-3 text-sm text-gray-300">Социальные сети</h3>
                    <div className="space-y-2">
                      {member.socialLinks.twitch && (
                        <a
                          href={member.socialLinks.twitch}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
                        >
                          📺 Twitch
                        </a>
                      )}
                      {member.socialLinks.youtube && (
                        <a
                          href={member.socialLinks.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                        >
                          ▶️ YouTube
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                        >
                          𝕏 Twitter
                        </a>
                      )}
                      {member.socialLinks.discord && (
                        <p className="flex items-center gap-2 text-blue-500 text-sm">
                          🎮 {member.socialLinks.discord}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-2">
            {/* Description/Bio */}
            {((member as any).description || member.bio) && (
              <section className="bg-gray-800 rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">О {member.nickname}</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {(member as any).description || member.bio}
                </p>
              </section>
            )}

            {/* Favorite Games */}
            {member.favoriteGames && member.favoriteGames.length > 0 && (
              <section className="bg-gray-800 rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Любимые игры</h2>
                <div className="flex flex-wrap gap-3">
                  {member.favoriteGames.map((game) => (
                    <div
                      key={game}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg"
                    >
                      {game}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Stats */}
            {member.stats && (
              <section className="bg-gray-800 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Статистика</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-400">Время игры</p>
                    <p className="text-xl font-bold text-blue-300">{member.stats.playtime}</p>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <p className="text-sm text-gray-400">Достижений</p>
                    <p className="text-xl font-bold text-purple-300">{member.stats.achievements}</p>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
