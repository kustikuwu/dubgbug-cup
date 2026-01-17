import Link from 'next/link';
import { getTournaments } from '@/lib/getTournaments';

export default function TournamentsPreview() {
  const tournaments = getTournaments().slice(0, 3);

  return (
    <div className="flex justify-center">
      <Link href="/tournaments" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
        Все турниры ({getTournaments().length})
      </Link>
    </div>
  );
}
