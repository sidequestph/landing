import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    label: 'GitHub',
    href: '#'
  }, {
    icon: Twitter,
    label: 'X',
    href: '#'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#'
  }, {
    icon: Mail,
    label: 'Email',
    href: '#'
  }];
  const quickLinks = [{
    name: 'Services',
    href: '#'
  }, {
    name: 'Portfolio',
    href: '#'
  }, {
    name: 'Pricing',
    href: '#'
  }, {
    name: 'Contact',
    href: '#'
  }];
  return <footer className="bg-[#0A0E27] border-t-4 border-[#9D4EDD] relative overflow-hidden">
      <div className="absolute inset-0 pixel-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-xl font-arcade text-[#9D4EDD] mb-4">Sidequest PH</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Leveling up digital experiences for gaming and tech companies worldwide.
            </p>
            <p className="text-gray-500 text-sm italic font-arcade">
              "GAME OVER? NEVER!"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#9D4EDD] transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-[#9D4EDD] mr-2 pixel-box opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="w-12 h-12 bg-[#1a0f3e] border-2 border-[#9D4EDD] rounded pixel-box flex items-center justify-center hover:bg-[#9D4EDD] transition-all duration-300 arcade-glow hover:scale-110">
                  <social.icon className="w-5 h-5 text-white" />
                </a>)}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#9D4EDD]/30 my-8 pixel-border"></div>

        {/* Copyright */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="text-center">
          <p className="text-gray-400 flex items-center justify-center flex-wrap gap-2">
            <span>© {currentYear} Sidequest PH. All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;