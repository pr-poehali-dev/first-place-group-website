import { useEffect, useRef } from 'react';

const HeroChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let progress = 0;
    const CYCLE = 220;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    // Chart data points (normalized 0–1, will be scaled to canvas)
    const points = [0.82, 0.75, 0.78, 0.68, 0.60, 0.52, 0.55, 0.42, 0.35, 0.28, 0.22, 0.14, 0.08, 0.03];

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const t = (progress % CYCLE) / CYCLE; // 0 → 1 each cycle
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease in-out

      const totalPts = points.length;
      const visibleCount = Math.max(2, Math.floor(eased * totalPts));
      const partial = eased * totalPts - Math.floor(eased * totalPts);

      const padX = w * 0.08;
      const padY = h * 0.18;
      const chartW = w - padX * 2;
      const chartH = h - padY * 2;

      const getX = (i: number) => padX + (i / (totalPts - 1)) * chartW;
      const getY = (v: number) => padY + v * chartH;

      // Visible points up to animation progress
      const visPoints: { x: number; y: number }[] = [];
      for (let i = 0; i <= visibleCount && i < totalPts; i++) {
        if (i < visibleCount) {
          visPoints.push({ x: getX(i), y: getY(points[i]) });
        } else if (i === visibleCount && i < totalPts) {
          // interpolate partial step
          const prev = points[i - 1];
          const next = points[i];
          const interp = prev + (next - prev) * partial;
          visPoints.push({ x: getX(i - 1 + partial), y: getY(interp) });
        }
      }

      if (visPoints.length < 2) {
        progress++;
        animFrame = requestAnimationFrame(draw);
        return;
      }

      // Grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      for (let row = 0; row <= 4; row++) {
        const y = padY + (row / 4) * chartH;
        ctx.beginPath();
        ctx.moveTo(padX, y);
        ctx.lineTo(w - padX, y);
        ctx.stroke();
      }

      // Fill gradient under line
      const grad = ctx.createLinearGradient(0, padY, 0, padY + chartH);
      grad.addColorStop(0, 'hsla(22, 100%, 52%, 0.35)');
      grad.addColorStop(1, 'hsla(22, 100%, 52%, 0.0)');

      ctx.beginPath();
      ctx.moveTo(visPoints[0].x, getY(1));
      visPoints.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.lineTo(visPoints[visPoints.length - 1].x, getY(1));
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Cyan glow line (shadow)
      ctx.save();
      ctx.shadowColor = 'hsl(22, 100%, 55%)';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      visPoints.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.strokeStyle = 'hsla(22, 100%, 70%, 0.5)';
      ctx.lineWidth = 4;
      ctx.lineJoin = 'round';
      ctx.stroke();
      ctx.restore();

      // Main white line
      ctx.beginPath();
      visPoints.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.strokeStyle = 'rgba(255,255,255,0.95)';
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Dots on each full point
      for (let i = 0; i < visPoints.length - 1; i++) {
        const p = visPoints[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(22, 100%, 60%)';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Animated head dot
      const head = visPoints[visPoints.length - 1];
      // Pulse ring
      const pulse = (Math.sin(progress * 0.12) + 1) / 2;
      ctx.beginPath();
      ctx.arc(head.x, head.y, 8 + pulse * 10, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(22, 100%, 60%, ${0.5 - pulse * 0.4})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Head dot
      ctx.beginPath();
      ctx.arc(head.x, head.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'hsl(22, 100%, 60%)';
      ctx.shadowColor = 'hsl(22, 100%, 55%)';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();

      // % label above head
      if (eased > 0.1) {
        const pct = Math.round(eased * 1040);
        ctx.font = `bold ${Math.round(w * 0.022)}px Oswald, sans-serif`;
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.textAlign = 'center';
        ctx.fillText(`+${pct}%`, head.x, head.y - 16);
      }

      // Y-axis labels
      ctx.font = `${Math.round(w * 0.014)}px Golos Text, sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.textAlign = 'right';
      ['1040%', '780%', '520%', '260%', '0%'].forEach((lbl, i) => {
        const y = padY + (i / 4) * chartH;
        ctx.fillText(lbl, padX - 10, y + 4);
      });

      progress++;
      animFrame = requestAnimationFrame(draw);
    };

    animFrame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default HeroChart;
