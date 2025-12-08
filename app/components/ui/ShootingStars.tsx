"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

export const ShootingStars = ({
  minDelay = 500,
  maxDelay = 1500,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  className,
}: {
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  className?: string;
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { innerWidth, innerHeight } = window;
      const x = Math.random() * innerWidth;
      const y = 0;
      const angle = 45;
      const scale = 0.5 + Math.random() * 0.7; // size
      const speed = Math.random() * 20 + 20; // speed
      const distance = 0;

      const newStar: ShootingStar = { id: Date.now(), x, y, angle, scale, speed, distance };
      setStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
  }, [minDelay, maxDelay]);

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX = prevStar.x - prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const { innerWidth, innerHeight } = window;

          if (newX < -20 || newX > innerWidth + 20 || newY < -20 || newY > innerHeight + 20) {
            return null;
          }
          return { ...prevStar, x: newX, y: newY, distance: newDistance };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);

  if (!star) return null;

  return (
    <svg ref={svgRef} className={cn("fixed inset-0 w-full h-full pointer-events-none z-0", className)}>
      <rect
        x={star.x} y={star.y} width={star.distance} height="2"
        fill="url(#gradient)" transform={`rotate(${star.angle}, ${star.x}, ${star.y})`}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor={trailColor} />
          <stop offset="100%" stopColor={starColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};