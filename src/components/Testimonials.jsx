import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import NeonText from '@/components/ui/NeonText';
import FloatingImage from '@/components/ui/FloatingImage';
import starImg from '@/assets/images/star.png';
import shieldImg from '@/assets/images/shield.png';
import swordImg from '@/assets/images/sword.png';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Thunder',
    company: 'Lightning Games Studio',
    quote: 'Sidequest PH took our mobile game to the next level! Their attention to detail and arcade-style polish made all the difference. Our downloads increased 300%!',
    rating: 5,
    avatar: 'AT'
  },
  {
    name: 'Sarah Pixel',
    company: 'RetroTech Industries',
    quote: 'Working with this team felt like finding a hidden power-up. They understood our gaming vision perfectly and delivered a web platform that our users absolutely love.',
    rating: 5,
    avatar: 'SP'
  },
  {
    name: 'Mike Neon',
    company: 'CyberPlay Entertainment',
    quote: 'Best web development experience ever! They brought our retro gaming concept to life with stunning visuals and smooth performance. Total game changer for our business.',
    rating: 5,
    avatar: 'MN'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f3e] to-[#0A0E27] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <FloatingImage 
        src={shieldImg} 
        alt="Shield" 
        className="w-20 top-20 left-[10%] opacity-20" 
        delay={0.2}
        duration={4}
      />
      <FloatingImage 
        src={swordImg} 
        alt="Sword" 
        className="w-24 bottom-10 right-[10%] opacity-20 rotate-[30deg]" 
        delay={1.0}
        duration={5}
        rotation={20}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <NeonText className="text-3xl md:text-5xl font-arcade mb-4" glowColor="#9D4EDD">
            PLAYER REVIEWS
          </NeonText>
          <p className="text-gray-300 text-lg">See what our clients are saying</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ArcadeCard className="border-l-[5px] border-l-[#9D4EDD]">
                <div className="p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#3A0CA3] flex items-center justify-center mr-4 pixel-box arcade-glow">
                      <span className="text-white font-arcade text-lg">{testimonials[currentIndex].avatar}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-[#9D4EDD]">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#9D4EDD] text-[#9D4EDD] arcade-glow" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </ArcadeCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-[#1a0f3e] border-2 border-[#9D4EDD] rounded pixel-box flex items-center justify-center hover:bg-[#9D4EDD] transition-all duration-300 arcade-glow hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-[#1a0f3e] border-2 border-[#9D4EDD] rounded pixel-box flex items-center justify-center hover:bg-[#9D4EDD] transition-all duration-300 arcade-glow hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full pixel-box transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#9D4EDD] arcade-glow scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;