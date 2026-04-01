"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();
  
  const [isActive, setIsActive] = useState(false);
  const isActiveRef = useRef(false);
  const currentRadiusRef = useRef(0);
  
  // Synchroniser l'état React avec la Ref pour la boucle d'animation
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
  
    const handleMove = () => {
      setIsActive(true)
      clearTimeout(timer)
      timer = setTimeout(() => {
        setIsActive(false)
      }, 2000)
    }
  
    window.addEventListener("mousemove", handleMove)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      clearTimeout(timer)
    }
  }, [])
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 20; // distance entre les points
    const radius = 1;   // taille des points

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Déterminer la couleur des points en fonction du thème
      const isDark = resolvedTheme === "dark";
      const dotColor = isDark ? "255, 255, 255" : "0, 0, 0";

      // Animation fluide du rayon (interpolation linéaire)
      const targetRadius = isActiveRef.current ? 130 : 0;
      currentRadiusRef.current += (targetRadius - currentRadiusRef.current) * 0.05;

      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const dx = mouse.current.x - x;
          const dy = mouse.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // effet de fade inversé
          let opacity = 0.2; // Opacité de base
          if (currentRadiusRef.current > 0.1) {
            opacity = Math.max(0.2, 1 - distance / currentRadiusRef.current);
          }

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
  }, [resolvedTheme]); // On ne dépend plus de isActive ici pour ne pas casser l'animation

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
