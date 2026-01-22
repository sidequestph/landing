import React from 'react';
import { motion } from 'framer-motion';

const sprites = {
  coin: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="16" height="4" fill="#FFD700"/>
      <rect x="4" y="8" width="4" height="16" fill="#FFD700"/>
      <rect x="24" y="8" width="4" height="16" fill="#FFD700"/>
      <rect x="8" y="24" width="16" height="4" fill="#FFD700"/>
      <rect x="8" y="8" width="16" height="16" fill="#FFA500"/>
    </svg>
  ),
  star: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="4" width="8" height="4" fill="#FFD700"/>
      <rect x="8" y="8" width="4" height="4" fill="#FFD700"/>
      <rect x="20" y="8" width="4" height="4" fill="#FFD700"/>
      <rect x="4" y="12" width="24" height="8" fill="#FFD700"/>
      <rect x="8" y="20" width="4" height="4" fill="#FFD700"/>
      <rect x="20" y="20" width="4" height="4" fill="#FFD700"/>
      <rect x="12" y="24" width="8" height="4" fill="#FFD700"/>
    </svg>
  ),
  heart: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="8" height="4" fill="#FF1493"/>
      <rect x="20" y="8" width="8" height="4" fill="#FF1493"/>
      <rect x="4" y="12" width="24" height="8" fill="#FF1493"/>
      <rect x="8" y="20" width="16" height="4" fill="#FF1493"/>
      <rect x="12" y="24" width="8" height="4" fill="#FF1493"/>
    </svg>
  )
};

const PixelSprite = ({ type = 'coin' }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className="arcade-glow"
    >
      {sprites[type]}
    </motion.div>
  );
};

export default PixelSprite;