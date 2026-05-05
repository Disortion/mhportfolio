"use client";
import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const PreviewLinkCard = ({ 
  children, 
  src, 
  title,
  description,
  className 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HoverCard.Root 
      openDelay={0} 
      closeDelay={100}
      onOpenChange={setIsOpen}
    >
      <HoverCard.Trigger asChild>
        {children}
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          align="center"
          sideOffset={10}
          className="z-[5000]"
          asChild
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className={cn(
                  "w-64 overflow-hidden border border-white/20 bg-black shadow-2xl",
                  className
                )}
              >
                <div className="aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/10">
                  <img 
                    src={src} 
                    alt={title} 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em]">{title}</h4>
                  <p className="text-[9px] font-mono text-neutral-500 leading-relaxed uppercase">{description}</p>
                </div>
                
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 animate-[scan_3s_linear_infinite]" />
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
