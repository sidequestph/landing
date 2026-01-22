import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ArcadeButton = ({ 
  children, 
  onClick, 
  className, 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'font-arcade uppercase tracking-wide pixel-box transition-all duration-300 arcade-button';
  
  const variants = {
    primary: 'bg-gradient-to-br from-[#9D4EDD] to-[#3A0CA3] text-white border-2 border-white hover:scale-105 arcade-glow',
    secondary: 'bg-[#1a0f3e] text-white border-2 border-[#9D4EDD] hover:bg-[#9D4EDD] hover:scale-105 arcade-glow'
  };

  const sizes = {
    small: 'px-4 py-2 text-xs',
    medium: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default ArcadeButton;