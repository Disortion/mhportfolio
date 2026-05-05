"use client";
import React, { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
}) => {
  const [particles, setParticles] = useState([]);
  const generatedId = id || useId();

  useEffect(() => {
    const particleCount = particleDensity || 50;
    const newParticles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize || 3) + (minSize || 1),
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [particleDensity, maxSize, minSize]);

  return (
    <div
      id={generatedId}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{
        background: background || "transparent",
      }}
    >
      {particles.map((particle, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor || "#FFFFFF",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
