"use client";
import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = ({ children, content, className }) => {
  return (
    <TooltipPrimitive.Root delayDuration={0}>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          sideOffset={5}
          className="z-[1000]"
          asChild
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className={cn(
              "px-3 py-1.5 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
              className
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-white" />
          </motion.div>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
