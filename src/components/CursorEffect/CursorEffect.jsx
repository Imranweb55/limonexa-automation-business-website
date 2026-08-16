import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 18;
const LINK_DISTANCE = 90;
const MOUSE_INFLUENCE = 140;

class Particle {
  constructor(x, y) {
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }
}

function CursorEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Disable entirely on touch devices and when reduced motion is requested.
    if (isCoarsePointer || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };
    const particles = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(
          new Particle(
            mouse.x + (Math.random() - 0.5) * 60,
            mouse.y + (Math.random() - 0.5) * 60
          )
        );
      }
    }

    resize();
    seedParticles();

    const brandBlue = '123, 193, 255';

    let rafId;
    function tick() {
      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        particles.forEach((p, i) => {
          const targetX = mouse.x + Math.cos(i * 2.4) * 34;
          const targetY = mouse.y + Math.sin(i * 2.4) * 34;
          p.vx += (targetX - p.x) * 0.02;
          p.vy += (targetY - p.y) * 0.02;
          p.vx *= 0.86;
          p.vy *= 0.86;
          p.x += p.vx;
          p.y += p.vy;
        });

        // connecting lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < LINK_DISTANCE) {
              ctx.strokeStyle = `rgba(${brandBlue}, ${0.18 * (1 - dist / LINK_DISTANCE)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        // link particles to the cursor itself
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_INFLUENCE) {
            ctx.strokeStyle = `rgba(${brandBlue}, ${0.22 * (1 - dist / MOUSE_INFLUENCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }

          ctx.fillStyle = `rgba(${brandBlue}, 0.85)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        });

        // soft glow at cursor
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          46
        );
        gradient.addColorStop(0, `rgba(${brandBlue}, 0.35)`);
        gradient.addColorStop(1, `rgba(${brandBlue}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 46, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    }

    function handleMouseMove(e) {
      if (!mouse.active) {
        mouse.active = true;
        particles.forEach((p) => {
          p.x = e.clientX;
          p.y = e.clientY;
        });
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    function handleResize() {
      resize();
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-40 pointer-events-none hidden lg:block"
    />
  );
}

export default CursorEffect;
