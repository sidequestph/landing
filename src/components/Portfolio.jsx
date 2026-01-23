import React from 'react';
import { motion } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import ArcadeButton from '@/components/ui/ArcadeButton';
import NeonText from '@/components/ui/NeonText';
import FloatingImage from '@/components/ui/FloatingImage';
import swordImg from '@/assets/images/sword.png';
import shieldImg from '@/assets/images/shield.png';
import { ExternalLink } from 'lucide-react';
import marioBoxImg from '@/assets/images/mario-box.png';
import boltImg from '@/assets/images/bolt.png';

const projects = [
  {
    title: 'St. Paul University Philippines',
    description: 'Official website of St. Paul University Philippines, featuring course catalog, student life, and campus resources.',
    tech: ['Wordpress', 'UI/UX Design'],
    category: 'Web',
    categoryColor: 'from-blue-500 to-cyan-500'
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f3e] to-[#0A0E27] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <FloatingImage 
        src={marioBoxImg} 
        alt="Mario Box" 
        className="w-16 md:w-32 bottom-20 right-[5%] opacity-10" 
        delay={1.5}
        duration={6}
        rotation={-15}
      />
      <FloatingImage 
        src={boltImg} 
        alt="Lightning bolt" 
        className="w-16 md:w-32 top-10 left-[5%] opacity-10 rotate-[20deg]" 
        delay={0.8}
        duration={5}
        rotation={10}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <NeonText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-arcade mb-4" glowColor="#9D4EDD">
            ACHIEVEMENTS UNLOCKED
          </NeonText>
          <p className="text-gray-300 text-base md:text-lg">Check out our latest projects and achievements!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ArcadeCard className="h-full hover-lift">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-arcade bg-gradient-to-r ${project.categoryColor} text-white rounded pixel-box`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-[#1a0f3e] text-[#9D4EDD] rounded pixel-box">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArcadeButton
                    size="small"
                    className="w-full"
                  >
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    VIEW PROJECT
                  </ArcadeButton>
                </div>
              </ArcadeCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;