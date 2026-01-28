import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeonText from '@/components/ui/NeonText';
import GlitchText from '@/components/ui/GlitchText';
import PixelSprite from '@/components/ui/PixelSprite';
import FloatingImage from '@/components/ui/FloatingImage';
import controllerImg from '@/assets/images/controller.png';
import shieldImg from '@/assets/images/shield.png';
import swordImg from '@/assets/images/sword.png';

const LOADING_MESSAGES = [
  "LOADING ASSETS...",
  "GENERATING PIXELS...",
  "CALIBRATING CONTROLLERS...",
  "INITIALIZING BOSS FIGHT...",
  "CHARGING POWER-UPS..."
];

const ComingSoon = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-arcade-dark flex flex-col items-center justify-center relative overflow-hidden text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pixel-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <FloatingImage 
        src={controllerImg} 
        alt="Controller" 
        className="w-24 absolute top-[15%] left-[10%] opacity-20 rotate-[-15deg]" 
        delay={0}
        duration={4}
        rotation={-15}
      />
      <FloatingImage 
        src={swordImg} 
        alt="Sword" 
        className="w-24 absolute bottom-[15%] right-[10%] opacity-20 rotate-[15deg]" 
        delay={1}
        duration={5}
        rotation={15}
      />
      
      {/* Decorative Sprites */}
      <div className="absolute top-20 right-[20%] opacity-60">
        <PixelSprite type="star" />
      </div>
      <div className="absolute bottom-20 left-[20%] opacity-60">
        <PixelSprite type="coin" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12 relative group inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9D4EDD] via-[#7B2CBF] to-[#9D4EDD] rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
            <div className="relative px-8 py-4 bg-black/80 ring-1 ring-[#9D4EDD]/50 rounded-lg leading-none flex items-center justify-center backdrop-blur-md border border-[#9D4EDD]/30">
               <GlitchText 
                 text="SIDEQUEST PHILIPPINES" 
                 className="text-xl md:text-3xl text-[#9D4EDD] tracking-widest drop-shadow-[0_0_15px_rgba(157,78,221,0.8)]"
               />
            </div>
          </motion.div>

          <NeonText className="text-4xl md:text-7xl font-arcade mb-8" glowColor="#9D4EDD">
            COMING SOON
          </NeonText>
          
          <p className="text-sm md:text-lg text-gray-300 font-press-start mb-12 max-w-4xl mx-auto leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
            We are leveling up our base. Get ready to elevate your business!
          </p>

          {/* Loading Bar Animation */}
          <div className="w-full max-w-md mx-auto h-8 border-4 border-[#9D4EDD] rounded-none p-1 bg-[#0A0E27]">
            <motion.div 
              className="h-full bg-[#9D4EDD]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "linear" 
              }}
            />
          </div>
          
          <div className="h-6 mt-4">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentMessageIndex}
                className="text-[#9D4EDD] font-mono text-sm"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {LOADING_MESSAGES[currentMessageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
