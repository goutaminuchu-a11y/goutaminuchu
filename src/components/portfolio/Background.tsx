import { useEffect, useRef, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Animated constellation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    type P = { x: number; y: number; vx: number; vy: number };
    let points: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 24000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      // Lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130) {
            const alpha = 1 - Math.sqrt(d2) / 130;
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // Dots
      for (const p of points) {
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute h-[40rem] w-[40rem] rounded-full blur-3xl transition-transform duration-700 ease-out"
        style={{
          left: `calc(${pos.x}% - 20rem)`,
          top: `calc(${pos.y}% - 20rem)`,
          background: "radial-gradient(circle, oklch(0.82 0.16 215 / 0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute h-[34rem] w-[34rem] rounded-full blur-3xl animate-float-slow"
        style={{
          right: "-10rem",
          bottom: "-10rem",
          background: "radial-gradient(circle, oklch(0.55 0.22 295 / 0.22), transparent 60%)",
        }}
      />
      <div
        className="absolute h-[26rem] w-[26rem] rounded-full blur-3xl animate-float-rev"
        style={{
          left: "-8rem",
          top: "30%",
          background: "radial-gradient(circle, oklch(0.82 0.16 215 / 0.15), transparent 60%)",
        }}
      />
    </div>
  );
}
