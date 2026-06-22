import { useEffect, useRef } from 'react';

interface Wave {
  color: string;
  amplitude: number;
  frequency: number;
  speed: number;
  yBase: number;
  width: number;
  offset: number;
}

const HeroWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const waves: Wave[] = [
      {
        color: 'hsla(22, 100%, 60%, 0.45)',
        amplitude: 48,
        frequency: 0.0032,
        speed: 0.012,
        yBase: 0.58,
        width: 2,
        offset: 0,
      },
      {
        color: 'hsla(0, 0%, 100%, 0.22)',
        amplitude: 36,
        frequency: 0.0045,
        speed: 0.018,
        yBase: 0.42,
        width: 1.5,
        offset: 2.1,
      },
      {
        color: 'hsla(200, 98%, 65%, 0.28)',
        amplitude: 28,
        frequency: 0.006,
        speed: 0.009,
        yBase: 0.72,
        width: 1,
        offset: 4.4,
      },
    ];

    const drawWave = (wave: Wave) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // слева yBase (низко), справа yBase - tilt (высоко)
      const tilt = h * 0.32;

      ctx.beginPath();

      for (let x = 0; x <= w; x += 2) {
        const progress = x / w;
        const y0 = h * wave.yBase - tilt * progress;
        const y =
          y0 +
          Math.sin(x * wave.frequency + t * wave.speed + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 1.7 + t * wave.speed * 0.6 + wave.offset + 1) * wave.amplitude * 0.35;
        if (x === 0) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      }

      ctx.strokeStyle = wave.color;
      ctx.lineWidth = wave.width;
      ctx.shadowColor = wave.color;
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      for (const wave of waves) drawWave(wave);

      t++;
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

export default HeroWaves;