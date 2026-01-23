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
import controllerImg from '@/assets/images/controller.png';
import { Trophy } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import validator from 'validator';

import {inquiryService} from '@/services/inquiry';

const LeadForm = () => {
  const [formData, setFormData] = useState({ full_name: '', email: '', interest: '', message: '' });
  const [errors, setErrors] = useState({ full_name: '', email: '', interest: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const validate = () => {
    const newErrors = { full_name: '', email: '', interest: '' };
    let isValid = true;

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Player name required!';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email required!';
      isValid = false;
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = 'Invalid email format!';
      isValid = false;
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your interest!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setStatusMessage({ type: '', text: '' }); // Clear previous messages
      
      try {
        await inquiryService.submit(formData);

        setStatusMessage({
          type: 'success',
          text: '⭐ Request to join the quest party sent!'
        });

        setFormData({ full_name: '', email: '', interest: '', message: '' });
      } catch (error) {
        setStatusMessage({
          type: 'error',
          text: '⚠️ ' + error.response?.data.error || 'Something went wrong. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
        // Clear message after 5 seconds
        setTimeout(() => {
          setStatusMessage({ type: '', text: '' });
        }, 5000);
      }
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
    <section id="lead-form" className="py-24 bg-gradient-to-b from-[#1a0f3e] to-[#0A0E27] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <FloatingImage 
        src={controllerImg} 
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
            <div className="p-6 md:p-12">
              {/* Status Message */}
              <AnimatePresence>
                {statusMessage.text && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className={`p-4 rounded text-center font-bold text-sm md:text-base border-2 ${
                      statusMessage.type === 'success' 
                        ? 'bg-green-900/50 border-green-500 text-green-400' 
                        : 'bg-red-900/50 border-red-500 text-red-400'
                    }`}>
                      {statusMessage.text}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-2 text-xs md:text-sm tracking-wide">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 md:py-3 text-sm md:text-base bg-[#0A0E27] border-2 ${
                      errors.full_name ? 'border-red-500' : 'border-[#9D4EDD]'
                    } rounded pixel-box text-white focus:outline-none focus:border-[#9D4EDD] focus:arcade-glow transition-all duration-300`}
                    placeholder="e.g Juan De La Cruz"
                  />
                  {errors.full_name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 font-bold"
                      style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                    >
                      ⚠️ {errors.full_name}
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
                    Interest
                  </label>
                  <div className="relative">
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#0A0E27] border-2 ${
                        errors.interest ? 'border-red-500' : 'border-[#9D4EDD]'
                      } rounded pixel-box focus:outline-none focus:border-[#9D4EDD] focus:arcade-glow transition-all duration-300 appearance-none cursor-pointer ${
                        formData.interest === '' ? 'text-gray-400' : 'text-white'
                      }`}
                    >
                      <option value="" disabled className="text-gray-400 bg-[#0A0E27]">e.g Web & Mobile</option>
                      <option value="Web" className="text-white bg-[#0A0E27]">Web</option>
                      <option value="Mobile" className="text-white bg-[#0A0E27]">Mobile</option>
                      <option value="Custom" className="text-white bg-[#0A0E27]">Custom</option>
                      <option value="Web & Mobile" className="text-white bg-[#0A0E27]">Web & Mobile</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#9D4EDD]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.interest && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 font-bold"
                      style={{ textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' }}
                    >
                      ⚠️ {errors.interest}
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