"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M${Math.random() * 100}% -10% L${Math.random() * 100}% 110%`}
            stroke="white"
            strokeWidth="0.5"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              },
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
};
