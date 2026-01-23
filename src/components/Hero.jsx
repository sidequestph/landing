import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArcadeButton from '@/components/ui/ArcadeButton';
import NeonText from '@/components/ui/NeonText';
import PixelSprite from '@/components/ui/PixelSprite';

const Hero = () => {

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
          animation: scanline 0.2s linear infinite;
        }
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
        .retro-grid {
          background-image: 
            linear-gradient(rgba(157, 78, 221, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(157, 78, 221, 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
          transform-origin: top;
          animation: grid-move 1s linear infinite;
        }
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(14px, 9999px, 127px, 0); transform: skew(0.5deg); }
          5% { clip: rect(83px, 9999px, 119px, 0); transform: skew(0.5deg); }
          10% { clip: rect(65px, 9999px, 124px, 0); transform: skew(0.5deg); }
          15% { clip: rect(19px, 9999px, 49px, 0); transform: skew(0.5deg); }
          20% { clip: rect(76px, 9999px, 112px, 0); transform: skew(0.5deg); }
          25% { clip: rect(32px, 9999px, 55px, 0); transform: skew(0.5deg); }
          30% { clip: rect(93px, 9999px, 15px, 0); transform: skew(0.5deg); }
          35% { clip: rect(10px, 9999px, 80px, 0); transform: skew(0.5deg); }
          40% { clip: rect(54px, 9999px, 120px, 0); transform: skew(0.5deg); }
          45% { clip: rect(21px, 9999px, 94px, 0); transform: skew(0.5deg); }
          50% { clip: rect(87px, 9999px, 138px, 0); transform: skew(0.5deg); }
          55% { clip: rect(39px, 9999px, 26px, 0); transform: skew(0.5deg); }
          60% { clip: rect(66px, 9999px, 101px, 0); transform: skew(0.5deg); }
          65% { clip: rect(28px, 9999px, 73px, 0); transform: skew(0.5deg); }
          70% { clip: rect(51px, 9999px, 15px, 0); transform: skew(0.5deg); }
          75% { clip: rect(12px, 9999px, 60px, 0); transform: skew(0.5deg); }
          80% { clip: rect(96px, 9999px, 129px, 0); transform: skew(0.5deg); }
          85% { clip: rect(45px, 9999px, 34px, 0); transform: skew(0.5deg); }
          90% { clip: rect(78px, 9999px, 86px, 0); transform: skew(0.5deg); }
          95% { clip: rect(16px, 9999px, 52px, 0); transform: skew(0.5deg); }
          100% { clip: rect(24px, 9999px, 137px, 0); transform: skew(0.5deg); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(64px, 9999px, 27px, 0); transform: skew(0.5deg); }
          5% { clip: rect(3px, 9999px, 19px, 0); transform: skew(0.5deg); }
          10% { clip: rect(65px, 9999px, 124px, 0); transform: skew(0.5deg); }
          15% { clip: rect(96px, 9999px, 129px, 0); transform: skew(0.5deg); }
          20% { clip: rect(45px, 9999px, 34px, 0); transform: skew(0.5deg); }
          25% { clip: rect(78px, 9999px, 86px, 0); transform: skew(0.5deg); }
          30% { clip: rect(16px, 9999px, 52px, 0); transform: skew(0.5deg); }
          35% { clip: rect(24px, 9999px, 137px, 0); transform: skew(0.5deg); }
          40% { clip: rect(14px, 9999px, 127px, 0); transform: skew(0.5deg); }
          45% { clip: rect(83px, 9999px, 119px, 0); transform: skew(0.5deg); }
          50% { clip: rect(65px, 9999px, 124px, 0); transform: skew(0.5deg); }
          55% { clip: rect(19px, 9999px, 49px, 0); transform: skew(0.5deg); }
          60% { clip: rect(76px, 9999px, 112px, 0); transform: skew(0.5deg); }
          65% { clip: rect(32px, 9999px, 55px, 0); transform: skew(0.5deg); }
          70% { clip: rect(93px, 9999px, 15px, 0); transform: skew(0.5deg); }
          75% { clip: rect(10px, 9999px, 80px, 0); transform: skew(0.5deg); }
          80% { clip: rect(54px, 9999px, 120px, 0); transform: skew(0.5deg); }
          85% { clip: rect(21px, 9999px, 94px, 0); transform: skew(0.5deg); }
          90% { clip: rect(87px, 9999px, 138px, 0); transform: skew(0.5deg); }
          95% { clip: rect(39px, 9999px, 26px, 0); transform: skew(0.5deg); }
          100% { clip: rect(66px, 9999px, 101px, 0); transform: skew(0.5deg); }
        }
      `}</style>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-br"></div>
      </div>

      {/* Pixel Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pixel-pattern"></div>

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

          <NeonText className="text-4xl md:text-6xl lg:text-7xl font-arcade mb-6 leading-tight glitch-text" glowColor="#9D4EDD" data-text="Level Up Your Digital Game">
            Level Up Your<br />Digital Game
          </NeonText>

          <div className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto font-semibold">
            Let's party up and finish that quest!
          </div>

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