import { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const LIFETIME = 700; // ms each dot lives before fully fading
    const trail = []; // { x, y, t }
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMouseMove = e => {
      trail.push({ x: e.clientX, y: e.clientY, t: Date.now() });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();

      // Drop expired dots
      while (trail.length > 0 && now - trail[0].t > LIFETIME) {
        trail.shift();
      }

      for (let i = 0; i < trail.length; i++) {
        const dot = trail[i];
        const age = now - dot.t;
        const life = 1 - age / LIFETIME;          // 1 = brand new, 0 = expired
        const pos  = (i + 1) / trail.length;      // 0 = oldest remaining, 1 = newest

        const radius = pos * 5 * life;
        const alpha  = pos * life * 0.5;

        if (radius <= 0 || alpha <= 0) continue;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', resize, { passive: true });
    draw();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9997]"
      aria-hidden="true"
    />
  );
}
