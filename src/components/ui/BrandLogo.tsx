import React from 'react';
import { cn } from '../../lib/utils';

export const BrandLogo = ({ className, scale = 1 }: { className?: string, scale?: number }) => {
  return (
    <div className={cn("relative shrink-0 overflow-hidden", className)} style={{ width: `${600 * scale}px`, height: `${400 * scale}px` }}>
      <div 
        className="absolute top-0 left-0 bg-transparent flex flex-col items-center justify-center font-['Montserrat',sans-serif]"
        style={{
          width: '600px',
          height: '400px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {/* Distressed Background R */}
        <div style={{
          position: 'absolute',
          fontFamily: "'Permanent Marker', cursive",
          fontSize: '550px',
          color: '#A9A9A9',
          top: '-240px',
          left: '-20px',
          zIndex: 1,
          transform: 'rotate(-15deg)',
          userSelect: 'none'
        }}>R</div>
        
        {/* Main REDUX Text Container */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'baseline',
          fontSize: '130px',
          fontWeight: 800,
          letterSpacing: '-2px'
        }}>
          <span style={{ color: '#A91B1B' }}>R</span>
          <span style={{ color: '#000000' }}>EDU</span>
          <span style={{
            fontFamily: "'Permanent Marker', cursive",
            color: '#A91B1B',
            fontSize: '200px',
            marginLeft: '-5px',
            transform: 'translateY(30px)'
          }}>X</span>
        </div>
        
        {/* Bottom Text */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          fontSize: '34px',
          fontWeight: 600,
          letterSpacing: '14px',
          color: '#000000',
          marginTop: '-10px',
          marginLeft: '14px'
        }}>FACTORY OUTLET</div>
      </div>
    </div>
  );
};
