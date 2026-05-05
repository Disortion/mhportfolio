"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../lib/utils";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const textRef = useRef(null);
  const [hoverText, setHoverText] = useState("");

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
    
    const xFollowerTo = gsap.quickTo(follower, "x", { duration: 0.5, ease: "power3" });
    const yFollowerTo = gsap.quickTo(follower, "y", { duration: 0.5, ease: "power3" });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xFollowerTo(e.clientX);
      yFollowerTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      const interactive = e.target.closest("button, a");

      if (target) {
        setHoverText(target.getAttribute("data-cursor") || "");
        gsap.to(cursor, { scale: 5, duration: 0.3 });
        gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
        gsap.to(textRef.current, { opacity: 1, scale: 1, duration: 0.3 });
      } else if (interactive) {
        gsap.to(cursor, { scale: 2.5, duration: 0.3 });
        gsap.to(follower, { scale: 1.5, opacity: 0.2, duration: 0.3 });
      }
    };

    const handleMouseOut = () => {
      setHoverText("");
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(textRef.current, { opacity: 0, scale: 0.5, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center origin-center"
      >
        <span 
          ref={textRef}
          className="opacity-0 scale-50 text-[2px] font-mono font-bold text-black uppercase tracking-tighter"
        >
          {hoverText}
        </span>
      </div>
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference origin-center -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
