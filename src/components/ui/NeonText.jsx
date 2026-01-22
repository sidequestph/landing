import React from 'react';
import { cn } from '@/lib/utils';

const NeonText = ({ children, className, glowColor = '#9D4EDD' }) => {
  return (
    <h2
      className={cn('neon-text', className)}
      style={{
        textShadow: `
          0 0 10px ${glowColor},
          0 0 20px ${glowColor},
          0 0 30px ${glowColor},
          0 0 40px ${glowColor}
        `
      }}
    >
      {children}
    </h2>
  );
};

export default NeonText;