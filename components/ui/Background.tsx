"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 25; // distance entre les points
    const radius = 1.2;   // taille des points
    const influenceRadius = 125; // zone d'effet de la souris

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Déterminer la couleur des points en fonction du thème
      const isDark = resolvedTheme === "dark";
      const dotColor = isDark ? "255, 255, 255" : "0, 0, 0";

      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const dx = mouse.current.x - x;
          const dy = mouse.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // effet de fade inversé
          const opacity = isDark ? Math.max(0.05, 1 - distance / influenceRadius) : Math.max(0.1, 1 - distance / influenceRadius);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor}, ${opacity})`;
          ctx.fill();
        }
      }
    };

    let animationFrameId: number;
    const render = () => {
      draw();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}