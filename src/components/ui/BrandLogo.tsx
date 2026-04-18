import React from 'react';
import { cn } from '../../lib/utils';

export const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center select-none", className)}>
      <div className="relative flex items-baseline font-bold" style={{ letterSpacing: '-0.02em' }}>
        {/* Abstract R background hint */}
        <span className="absolute -left-2 -top-1 text-gray-200 text-6xl opacity-50 font-serif italic pointer-events-none select-none">
          R
        </span>
        
        <span className="text-[var(--color-brand-red)] text-3xl md:text-4xl relative z-10">RED</span>
        <span className="text-[var(--color-brand-dark)] text-3xl md:text-4xl relative z-10">U</span>
        <span className="text-[var(--color-brand-red)] text-4xl md:text-5xl translate-y-1 -translate-x-1 relative z-10" style={{ transform: 'scale(1.3) translateY(2px)' }}>X</span>
      </div>
      <div className="text-[10px] md:text-xs tracking-[0.25em] font-medium text-[var(--color-brand-dark)] mt-1 ml-1 uppercase">
        Factory Outlet
      </div>
    </div>
  );
};
