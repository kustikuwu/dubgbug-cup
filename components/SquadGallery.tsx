'use client';

import { Squad } from '@/types';
import MemberCard from '@/components/MemberCard';

interface SquadGalleryProps {
  members: Squad[];
  title?: string;
  titleClassName?: string;
}

export default function SquadGallery({ members, title = 'Наша команда', titleClassName = '' }: SquadGalleryProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-4 ${titleClassName}`}>{title}</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Люди, которые делают наш сквад особенным
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, idx) => (
            <MemberCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
