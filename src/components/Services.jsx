import React from 'react';
import { motion } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import NeonText from '@/components/ui/NeonText';
import FloatingImage from '@/components/ui/FloatingImage';
import swordImg from '@/assets/images/sword.png';
import shieldImg from '@/assets/images/shield.png';
import { Code2, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    subtitle: 'The Way of the Sword',
    description: 'Construct your digital kingdom with our full-stack mastery. Whether it\'s a simple spawn point, a merchant shop, or a custom game engine, we build web solutions that level up your business.',
    features: [
      'Spawn Points (Landing Pages)',
      'Guild Systems (WordPress CMS)',
      'Item Shops (Shopify E-com)',
      'Custom Game Engines (Web Apps)'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'The Way of the Shield',
    description: 'Equip your inventory with powerful cross-platform apps. We craft mobile tools that run on every console, helping you defeat boss-level business challenges and dominate the leaderboard.',
    features: [
      'Cross-Console (iOS & Android)',
      'Boss-Level Problem Solving',
      'Full Campaign Development',
      'Zero-Lag Deployment'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0E27] to-[#1a0f3e] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <FloatingImage 
        src={swordImg} 
        alt="Sword" 
        className="w-24 md:w-32 top-20 left-[5%] opacity-10" 
        delay={0.5}
        duration={5}
        rotation={15}
      />
      <FloatingImage 
        src={shieldImg} 
        alt="Shield" 
        className="w-24 md:w-32 top-20 right-[5%] opacity-10" 
        delay={1.2}
        duration={4}
        rotation={-10}
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
            CHOOSE YOUR PATH
          </NeonText>
          <p className="text-gray-300 text-lg">Where do we guide you in your digital journey?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <ArcadeCard className="h-full">
                <div className="flex flex-col items-center text-center p-8">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#9D4EDD] to-[#3A0CA3] arcade-glow">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-arcade text-white mb-2">{service.title}</h3>
                  <p className="text-[#9D4EDD] font-bold mb-4">{service.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 w-full">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-[#9D4EDD] mr-3 arcade-glow pixel-box"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ArcadeCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;