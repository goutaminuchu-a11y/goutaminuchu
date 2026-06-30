import { useEffect, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute h-[40rem] w-[40rem] rounded-full blur-3xl transition-transform duration-700 ease-out"
        style={{
          left: `calc(${pos.x}% - 20rem)`,
          top: `calc(${pos.y}% - 20rem)`,
          background:
            "radial-gradient(circle, oklch(0.82 0.16 215 / 0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute h-[34rem] w-[34rem] rounded-full blur-3xl animate-float-slow"
        style={{
          right: "-10rem",
          bottom: "-10rem",
          background:
            "radial-gradient(circle, oklch(0.55 0.22 295 / 0.22), transparent 60%)",
        }}
      />
      <div
        className="absolute h-[26rem] w-[26rem] rounded-full blur-3xl animate-float-rev"
        style={{
          left: "-8rem",
          top: "30%",
          background:
            "radial-gradient(circle, oklch(0.82 0.16 215 / 0.15), transparent 60%)",
        }}
      />
      {/* Floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-white/30"
          style={{
            left: `${(i * 137) % 100}%`,
            top: `${(i * 71) % 100}%`,
            animation: `float-slow ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            opacity: 0.25 + ((i % 5) * 0.1),
          }}
        />
      ))}
    </div>
  );
}
