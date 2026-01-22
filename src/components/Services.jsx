import React from 'react';
import { motion } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import NeonText from '@/components/ui/NeonText';
import { Code2, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    subtitle: 'Level Up Your Web Presence',
    description: 'Custom web applications built with cutting-edge technology. From arcade-style landing pages to complex gaming platforms, we create digital experiences that captivate and engage.',
    features: ['React & Modern Frameworks', 'Responsive Design', 'Performance Optimization', 'SEO & Analytics']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'Master Mobile Gaming',
    description: 'Native and cross-platform mobile apps that deliver console-quality experiences. Perfect for gaming companies and tech startups ready to dominate the mobile landscape.',
    features: ['iOS & Android', 'Cross-Platform Solutions', 'Game Integration', 'Push Notifications']
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0E27] to-[#1a0f3e] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <NeonText className="text-3xl md:text-5xl font-arcade mb-4" glowColor="#9D4EDD">
            SELECT YOUR SERVICE
          </NeonText>
          <p className="text-gray-300 text-lg">Choose your power-up and dominate the digital realm</p>
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