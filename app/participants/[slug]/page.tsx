import { getSquadMember, getAllSquadMembers } from '@/lib/getSquadMember';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ParticipantPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllSquadMembers().map((member) => ({
    slug: member.id,
  }));
}

export default function ParticipantPage({ params }: ParticipantPageProps) {
  const member = getSquadMember(params.slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
        ← Назад
      </Link>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Avatar & Basic Info */}
        <div className="md:col-span-1">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg overflow-hidden">
            <div className="aspect-square bg-gray-800 flex items-center justify-center">
              {member.avatar ? (
                <img src={member.avatar} alt={member.nickname} className="w-full h-full object-cover" />
              ) : (
                <div className="text-6xl font-bold text-gray-400">{member.nickname.charAt(0)}</div>
              )}
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-4">{member.nickname}</h1>
          <p className="text-purple-300 text-lg">{member.role}</p>

          {/* Social Links */}
          {member.socialLinks && (
            <div className="mt-6 space-y-2">
              {member.socialLinks.twitch && (
                <a href={member.socialLinks.twitch} target="_blank" rel="noopener noreferrer" className="block text-purple-400 hover:text-purple-300">
                  Twitch
                </a>
              )}
              {member.socialLinks.twitter && (
                <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:text-blue-300">
                  Twitter
                </a>
              )}
            </div>
          )}
        </div>

        {/* Bio & Achievements */}
        <div className="md:col-span-2">
          {member.bio && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">О игроке</h2>
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
            </section>
          )}

          {member.achievements && member.achievements.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Достижения</h2>
              <ul className="space-y-2">
                {member.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
