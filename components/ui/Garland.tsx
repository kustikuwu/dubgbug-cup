"use client";

export default function Garland() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-60">
      <div className="flex justify-center gap-4 py-2">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full animate-bounce"
            style={{
              backgroundColor: ["#22c55e", "#ef4444", "#3b82f6", "#facc15"][i % 4],
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
