"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { SquadMember } from "@/types/SquadMember";
import SquadCard from "./SquadCard";

interface Props {
  members: SquadMember[];
}

export default function SquadCarousel({ members }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Находим индекс участника из URL при инициализации
  const initialIndex = useMemo(() => {
    const idFromUrl = searchParams.get("member");
    const index = members.findIndex((m) => m.id === idFromUrl);
    return index >= 0 ? index : 0;
  }, [members, searchParams]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Синхронизация URL **только если URL отличается**
  useEffect(() => {
    const member = members[currentIndex];
    if (!member) return;

    if (searchParams.get("member") !== member.id) {
      router.replace(`?member=${member.id}`, { scroll: false });
    }
  }, [currentIndex, members, router, searchParams]);

  // Навигация
  function prev() {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? members.length - 1 : i - 1));
  }

  function next() {
    setDirection(1);
    setCurrentIndex((i) => (i === members.length - 1 ? 0 : i + 1));
  }

  // Клавиши ← →
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="relative w-full max-w-xl flex flex-col items-center gap-6 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={members[currentIndex].id}
          custom={direction}
          initial={{ x: direction * 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -300, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) next();
            if (info.offset.x > 100) prev();
          }}
        >
          <SquadCard member={members[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Кнопки */}
      {members.length > 1 && (
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
          >
            →
          </button>
        </div>
      )}

      {/* Индикаторы */}
      <div className="flex gap-2 mt-2">
        {members.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition ${
              i === currentIndex ? "bg-blue-400" : "bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
