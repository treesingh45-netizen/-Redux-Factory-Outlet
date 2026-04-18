import React from 'react';
import { cn } from '../../lib/utils';

export const TextLogo = ({ className, isFooter = false }: { className?: string, isFooter?: boolean }) => {
  return (
    <div className={cn("flex flex-col font-sans leading-none", className)}>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl md:text-3xl font-black tracking-tight text-[var(--color-brand-red)]">
          ReduX
        </span>
        <span className={cn("text-lg md:text-xl font-bold tracking-tight", isFooter ? "text-white" : "text-black")}>
          Mens Clothing
        </span>
      </div>
      <span className={cn("text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] mt-1", isFooter ? "text-gray-400" : "text-gray-500")}>
        Factory Outlet
      </span>
    </div>
  );
};
