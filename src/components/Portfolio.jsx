import React from 'react';
import { motion } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import ArcadeButton from '@/components/ui/ArcadeButton';
import NeonText from '@/components/ui/NeonText';
import { ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const projects = [
  {
    title: 'NeonQuest Gaming Portal',
    description: 'Full-stack gaming platform with real-time multiplayer, leaderboards, and achievement system.',
    tech: ['React', 'Node.js', 'WebSocket'],
    category: 'Web',
    categoryColor: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'PixelRush Mobile Game',
    description: 'Cross-platform arcade runner with physics engine and in-app purchases.',
    tech: ['React Native', 'Unity', 'Firebase'],
    category: 'Mobile',
    categoryColor: 'from-green-500 to-emerald-500'
  },
  {
    title: 'RetroArcade Hub',
    description: 'E-commerce platform for vintage gaming collectibles with AR preview features.',
    tech: ['Next.js', 'Stripe', 'Three.js'],
    category: 'Web',
    categoryColor: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'GamerConnect Social',
    description: 'Social networking app for gamers with live streaming and chat integration.',
    tech: ['Flutter', 'WebRTC', 'GraphQL'],
    category: 'Mobile',
    categoryColor: 'from-green-500 to-emerald-500'
  },
  {
    title: 'LevelUp Studios Site',
    description: 'Interactive portfolio showcase for indie game studio with 3D animations.',
    tech: ['React', 'Three.js', 'GSAP'],
    category: 'Web',
    categoryColor: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'BossRaid Tournament App',
    description: 'Tournament management system with brackets, scoring, and prize distribution.',
    tech: ['React Native', 'PostgreSQL', 'Redis'],
    category: 'Game Dev',
    categoryColor: 'from-purple-500 to-pink-500'
  }
];

const Portfolio = () => {
  const { toast } = useToast();

  const handleViewProject = (projectTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${projectTitle} details coming soon!`,
    });
  };

  return (
    <section className="py-24 bg-[#0A0E27] relative overflow-hidden">
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
            ACHIEVEMENTS UNLOCKED
          </NeonText>
          <p className="text-gray-300 text-lg">High score projects from our arcade</p>
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
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-[#1a0f3e] text-[#9D4EDD] rounded pixel-box">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArcadeButton 
                    onClick={() => handleViewProject(project.title)}
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