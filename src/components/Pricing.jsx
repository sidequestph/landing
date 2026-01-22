import React from 'react';
import { motion } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import ArcadeButton from '@/components/ui/ArcadeButton';
import NeonText from '@/components/ui/NeonText';
import FloatingImage from '@/components/ui/FloatingImage';
import swordImg from '@/assets/images/sword.png';
import shieldImg from '@/assets/images/shield.png';
import { Check, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const plans = [
  {
    name: 'Scout',
    originalPrice: '₱40,995.00',
    price: '₱34,995.00',
    description: 'Perfect for indie developers',
    features: [
      '1-5 Website Pages (Static)',
      '1 Revision',
      'Resource/s: Dev, QA & BA',
      'User Acceptance Testing',
      'Free production setup',
      'Responsive design (Web & Mobile Android/iOS)',
      'Website Maintenance (1 month free after turnover)'
    ],
    highlighted: false
  },
  {
    name: 'Adventurer',
    originalPrice: '₱49,995.00',
    price: '₱44,995.00',
    description: 'For growing gaming studios',
    features: [
      'up to 15 Website Pages (Static)',
      '2 Revision',
      'Resource/s: Sr. Dev, QA & BA',
      'User Acceptance Testing',
      'Free production setup',
      'Responsive design (Web & Mobile Android/iOS)',
      'Website Maintenance (1 month free after turnover)'
    ],
    highlighted: true
  },
  {
    name: 'Legend',
    originalPrice: '₱59,995.00',
    price: '₱54,995.00',
    description: 'Enterprise gaming solutions',
    features: [
      'up to 20 Website Pages (Static)',
      '3 Revision',
      'Resource/s: Sr. Dev, QA & BA',
      'User Acceptance Testing',
      'Free production setup',
      'Responsive design (Web & Mobile Android/iOS)',
      'Website Maintenance (1 month free after turnover)'
    ],
    highlighted: false
  }
];

const Pricing = () => {
  const { toast } = useToast();

  const handleChoosePlan = (planName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${planName} plan selected!`,
    });
  };

  const handleGetQuote = () => {
     document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#0A0E27] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <FloatingImage 
        src={swordImg} 
        alt="Sword" 
        className="w-32 md:w-40 top-32 right-[5%] opacity-15 rotate-[-45deg]" 
        delay={1}
        duration={5}
        rotation={-10}
      />
      <FloatingImage 
        src={shieldImg} 
        alt="Shield" 
        className="w-24 md:w-32 bottom-20 left-[5%] opacity-15 rotate-[15deg]" 
        delay={1.5}
        duration={4}
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
          <NeonText className="text-3xl md:text-5xl font-arcade mb-4" glowColor="#9D4EDD">
            CHOOSE YOUR LEVEL
          </NeonText>
          <p className="text-gray-300 text-lg">Select the perfect plan for your quest</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={plan.highlighted ? 'md:scale-110 md:z-10' : ''}
            >
              <ArcadeCard className={`h-full relative ${plan.highlighted ? 'border-4 border-[#9D4EDD] arcade-glow-strong' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#9D4EDD] to-[#3A0CA3] rounded-full pixel-box arcade-glow">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-300" />
                      <span className="text-white font-arcade text-xs">BEST VALUE</span>
                      <Zap className="w-4 h-4 text-yellow-300" />
                    </div>
                  </div>
                )}
                
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-arcade text-white mb-2 text-center">{plan.name}</h3>
                  <p className="text-gray-400 text-center mb-6">{plan.description}</p>
                  
                  <div className="text-center mb-8 flex flex-col items-center justify-center gap-2">
                    <span className="text-gray-500 line-through text-lg font-arcade">{plan.originalPrice}</span>
                    <span className="text-4xl font-bold text-[#9D4EDD]">{plan.price}</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-[#9D4EDD] mr-3 flex-shrink-0 mt-0.5 arcade-glow" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ArcadeButton 
                    onClick={() => handleChoosePlan(plan.name)}
                    className="w-full"
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                  >
                    CHOOSE PLAN
                  </ArcadeButton>
                </div>
              </ArcadeCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ArcadeButton 
            onClick={handleGetQuote}
            variant="secondary"
            size="large"
            className="w-full max-w-md"
          >
            GET A CUSTOM QUOTE
          </ArcadeButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;