import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArcadeCard from '@/components/ui/ArcadeCard';
import ArcadeButton from '@/components/ui/ArcadeButton';
import NeonText from '@/components/ui/NeonText';
import PixelSprite from '@/components/ui/PixelSprite';
import FloatingImage from '@/components/ui/FloatingImage';
import starImg from '@/assets/images/star.png';
import shieldImg from '@/assets/images/shield.png';
import swordImg from '@/assets/images/sword.png';
import { useToast } from '@/components/ui/use-toast';
import { Trophy } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validate = () => {
    const newErrors = { name: '', email: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Player name required!';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email required!';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate submission
      setTimeout(() => {
        // Store in localStorage
        const submissions = JSON.parse(localStorage.getItem('arcadeLeads') || '[]');
        submissions.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('arcadeLeads', JSON.stringify(submissions));

        toast({
          title: "🏆 HIGH SCORE RECORDED! 🏆",
          description: "Welcome to the arcade, player! We'll be in touch soon.",
        });

        setFormData({ name: '', email: '' });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="lead-form" className="py-24 bg-gradient-to-b from-[#0A0E27] to-[#1a0f3e] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <FloatingImage 
        src={swordImg} 
        alt="Sword" 
        className="w-16 bottom-20 left-[15%] opacity-30 rotate-[-15deg]" 
        delay={0.8}
        duration={3}
        rotation={-10}
      />
      <FloatingImage 
        src={shieldImg} 
        alt="Shield" 
        className="w-16 top-10 right-[15%] opacity-30 rotate-[15deg]" 
        delay={1.2}
        duration={4}
        rotation={10}
      />

      {/* Decorative Sprites */}
      <div className="absolute top-10 left-10 opacity-50">
        <PixelSprite type="coin" />
      </div>
      <div className="absolute top-20 right-10 opacity-50">
        <PixelSprite type="star" />
      </div>
      <div className="absolute bottom-10 left-20 opacity-50">
        <PixelSprite type="heart" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-50">
        <PixelSprite type="coin" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <NeonText className="text-3xl md:text-5xl font-arcade mb-4" glowColor="#9D4EDD">
            ENTER YOUR NAME
          </NeonText>
          <p className="text-gray-300 text-lg">Start the quest for global impact and levelup your business</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <ArcadeCard className="border-4 border-[#9D4EDD] arcade-glow">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-2 text-sm tracking-wide">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#0A0E27] border-2 ${
                      errors.name ? 'border-red-500' : 'border-[#9D4EDD]'
                    } rounded pixel-box text-white focus:outline-none focus:border-[#9D4EDD] focus:arcade-glow transition-all duration-300`}
                    placeholder="e.g Juan De La Cruz"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 font-bold"
                      style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                    >
                      ⚠️ {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 text-sm tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#0A0E27] border-2 ${
                      errors.email ? 'border-red-500' : 'border-[#9D4EDD]'
                    } rounded pixel-box text-white focus:outline-none focus:border-[#9D4EDD] focus:arcade-glow transition-all duration-300`}
                    placeholder="e.g juan@delacruz.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 font-bold"
                      style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                    >
                      ⚠️ {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 text-sm tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 bg-[#0A0E27] border-2 ${
                      errors.message ? 'border-red-500' : 'border-[#9D4EDD]'
                    } rounded pixel-box text-white focus:outline-none focus:border-[#9D4EDD] focus:arcade-glow transition-all duration-300 resize-none`}
                    placeholder="Tell us about your quest..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 font-bold"
                      style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                    >
                      ⚠️ {errors.message}
                    </motion.p>
                  )}
                </div>

                <ArcadeButton
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  size="large"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Trophy className="w-5 h-5 mr-2 animate-pulse" />
                      SUBMITTING...
                    </span>
                  ) : (
                    'SUBMIT QUEST'
                  )}
                </ArcadeButton>
              </form>

              <motion.p
                className="text-center text-gray-400 text-sm mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                🔒 Your data is safe with us. No spam, just power-ups!
              </motion.p>
            </div>
          </ArcadeCard>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;