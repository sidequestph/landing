import React from 'react';
import { motion } from 'framer-motion';
import ArcadeButton from '@/components/ui/ArcadeButton';
import NeonText from '@/components/ui/NeonText';
import PixelSprite from '@/components/ui/PixelSprite';
import FloatingImage from '@/components/ui/FloatingImage';
import swordImg from '@/assets/images/sword.png';
import shieldImg from '@/assets/images/shield.png';

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1585808400553-798a7d64cc3e)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/90 to-[#3A0CA3]/90"></div>
      </div>

      {/* Pixel Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pixel-pattern"></div>

      {/* Floating Background Objects */}
      <FloatingImage 
        src={swordImg} 
        alt="Sword" 
        className="w-32 md:w-48 top-20 right-[10%] rotate-45 z-0" 
        delay={0}
        duration={4}
      />
      <FloatingImage 
        src={shieldImg} 
        alt="Shield" 
        className="w-24 md:w-36 bottom-32 left-[15%] z-0" 
        delay={1}
        duration={3}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          {/* Pixel Sprites */}
          <div className="absolute top-0 left-10 md:left-20">
            <PixelSprite type="coin" />
          </div>
          <div className="absolute top-20 right-10 md:right-20">
            <PixelSprite type="star" />
          </div>
          <div className="absolute bottom-20 left-20 hidden md:block">
            <PixelSprite type="heart" />
          </div>
          <div className="absolute bottom-10 right-20 hidden md:block">
            <PixelSprite type="coin" />
          </div>

          <NeonText className="text-4xl md:text-6xl lg:text-7xl font-arcade mb-6 leading-tight" glowColor="#9D4EDD">
            Level Up Your<br />Digital Game
          </NeonText>

          <motion.p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto font-semibold" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }} style={{
          textShadow: '0 0 10px rgba(157, 78, 221, 0.5)'
        }}>Digital Startup</motion.p>

          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }}>
            <ArcadeButton onClick={() => {
            document.getElementById('lead-form')?.scrollIntoView({
              behavior: 'smooth'
            });
          }} size="large">
              PRESS START
            </ArcadeButton>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;