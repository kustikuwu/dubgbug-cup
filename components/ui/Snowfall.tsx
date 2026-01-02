"use client";

import { useEffect, useRef } from "react";

type Snowflake = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
};

type SnowfallProps = {
  count?: number;
  zIndex?: number;
};

export default function Snowfall({
  count = 80,
  zIndex = 50,
}: SnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const flakes = useRef<Snowflake[]>([]);
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    flakes.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 0.6 + 0.4,
      drift: Math.random() * 0.6 - 0.3,
    }));

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";

      for (const flake of flakes.current) {
        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > canvas.height) {
          flake.y = -flake.radius;
          flake.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId.current = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex,
      }}
    />
  );
}
