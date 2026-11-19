import { useEffect, useRef } from 'react';

const lifetime = 640;

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const trail = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    function resize() {
      const density = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * density;
      canvas.height = height * density;
      context.setTransform(density, 0, 0, density, 0, 0);
    }

    function draw(now) {
      frame = 0;
      context.clearRect(0, 0, width, height);
      while (trail.length && now - trail[0].time >= lifetime) trail.shift();
      trail.forEach((point, index) => {
        const age = Math.max(0, now - point.time);
        const intensity = (1 - age / lifetime) * (index + 1) / trail.length;
        context.beginPath();
        context.arc(point.x, point.y, 4.5 * intensity, 0, 2 * Math.PI);
        context.fillStyle = `rgba(232, 177, 112, ${0.61 * intensity})`;
        context.fill();
      });
      if (trail.length) frame = requestAnimationFrame(draw);
    }

    function move(event) {
      if (event.pointerType !== 'mouse') return;
      const previous = trail.at(-1);
      if (previous && Math.hypot(event.clientX - previous.x, event.clientY - previous.y) < 4) return;
      trail.push({ x: event.clientX, y: event.clientY, time: performance.now() });
      if (trail.length > 70) trail.shift();
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function stop() {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
      frame = 0;
      trail.length = 0;
      context.clearRect(0, 0, width, height);
    }

    function configure() {
      stop();
      if (!media.matches) return;
      resize();
      window.addEventListener('pointermove', move, { passive: true });
      window.addEventListener('resize', resize, { passive: true });
    }

    configure();
    media.addEventListener('change', configure);
    return () => {
      stop();
      media.removeEventListener('change', configure);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail" aria-hidden="true" />;
}