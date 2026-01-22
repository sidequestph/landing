import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ArcadeCard = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={cn(
        'bg-[#0A0E27]/80 backdrop-blur-sm border-2 border-[#9D4EDD] rounded-xl pixel-box overflow-hidden',
        className
      )}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(157, 78, 221, 0.5)' }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ArcadeCard;