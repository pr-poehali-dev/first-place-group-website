import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  tail: { x: number; y: number }[];
  tailLen: number;
}

interface StarParticle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const COLORS = [
  'hsl(22, 100%, 60%)',
  'hsl(22, 100%, 75%)',
  'hsl(200, 98%, 70%)',
  'hsl(270, 80%, 75%)',
  'rgba(255,255,255,0.9)',
];

const HeroParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let animId: number;
    const particles: Particle[] = [];
    const stars: StarParticle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    };

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const initStars = () => {
      stars.length = 0;
      const count = Math.floor(W() * H() / 6000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W(),
          y: Math.random() * H(),
          size: Math.random() * 1.8 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    const spawnParticle = () => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.1;
      const speed = 2.5 + Math.random() * 4;
      const p: Particle = {
        x: W() * 0.2 + Math.random() * W() * 0.6,
        y: H() + 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 0.8 + Math.random() * 2.2,
        opacity: 0.7 + Math.random() * 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        tail: [],
        tailLen: Math.floor(6 + Math.random() * 14),
      };
      particles.push(p);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);

      // Stars
      for (const s of stars) {
        s.pulse += s.pulseSpeed;
        const op = s.opacity * (0.6 + 0.4 * Math.sin(s.pulse));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
      }

      // Spawn meteors
      if (frame % 4 === 0) spawnParticle();
      if (frame % 12 === 0) spawnParticle(); // burst

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.tail.unshift({ x: p.x, y: p.y });
        if (p.tail.length > p.tailLen) p.tail.pop();

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.04; // slight upward acceleration
        p.opacity -= 0.008;

        if (p.opacity <= 0 || p.y < -20) {
          particles.splice(i, 1);
          continue;
        }

        // Draw tail
        for (let t = 0; t < p.tail.length; t++) {
          const ratio = 1 - t / p.tail.length;
          const tailOp = p.opacity * ratio * 0.6;
          ctx.beginPath();
          ctx.arc(p.tail[t].x, p.tail[t].y, p.size * ratio * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace(')', `, ${tailOp})`).replace('hsl', 'hsla').replace('rgba(', 'rgba(').replace('rgb(', 'rgba(');
          ctx.fill();
        }

        // Glow
        ctx.save();
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
      }

      // "#1" text assembles from particles periodically
      const cycle = 320;
      const phase = frame % cycle;

      if (phase > 200 && phase < 300) {
        const progress = Math.min(1, (phase - 200) / 60);
        const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
        const fadeOut = phase > 260 ? 1 - (phase - 260) / 40 : 1;
        const alpha = eased * fadeOut;

        if (alpha > 0) {
          const cx = w * 0.78;
          const cy = h * 0.38;
          const fontSize = Math.min(w * 0.14, h * 0.28);

          ctx.save();
          ctx.globalAlpha = alpha * 0.9;
          ctx.font = `900 ${fontSize}px Oswald, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Glow layers
          ctx.shadowColor = 'hsl(22, 100%, 55%)';
          ctx.shadowBlur = 60;
          ctx.fillStyle = 'hsl(22, 100%, 65%)';
          ctx.fillText('#1', cx, cy);

          ctx.shadowBlur = 30;
          ctx.fillStyle = 'rgba(255,255,255,0.95)';
          ctx.fillText('#1', cx, cy);
          ctx.restore();
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default HeroParticles;
