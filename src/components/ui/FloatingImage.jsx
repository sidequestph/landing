import React from 'react';
import { motion } from 'framer-motion';

const FloatingImage = ({ src, alt, className, delay = 0, duration = 3, xOffset = 10, yOffset = 10, rotation = 5 }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute pointer-events-none opacity-20 hover:opacity-40 transition-opacity duration-300 ${className}`}
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [0, rotation, 0]
      }}
      transition={{ 
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
};

export default FloatingImage;
