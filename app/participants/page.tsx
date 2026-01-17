import { getAllSquadMembers } from '@/lib/getSquadMember';
import SquadGallery from '@/components/SquadGallery';

export const metadata = {
  title: 'Участники - Dub Cup',
  description: 'Все участники нашей команды',
};

export default function ParticipantsPage() {
  const members = getAllSquadMembers();

  return (
    <main className="min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Все участники</h1>
      <div className="max-w-6xl mx-auto">
        <SquadGallery members={members} titleClassName="text-white" />
      </div>
    </main>
  );
}
