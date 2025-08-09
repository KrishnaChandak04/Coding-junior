'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoined(true);
    setTimeout(() => setIsJoined(false), 3000);
  };

  return (
  <section className="relative w-full py-24 px-6 bg-[#05051E] overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(158, 122, 255, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(254, 139, 187, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(255, 189, 122, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(158, 122, 255, 0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <motion.div 
        className="text-center max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[40px] leading-[48px] font-medium mb-6" 
          style={{ fontFamily: 'Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}
        >
          Ready to join a new{' '}
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            Dimension?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-[rgba(226,232,255,0.75)] mb-12"
        >
          The delightfully smart collaboration platform. Get started - for free.
        </motion.p>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`relative transition-all duration-500 ${isJoined ? 'hero-action-success' : ''}`}
        >
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            animate={isJoined ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.6, 0.6, 0, 1] }}
          >
            <div className="relative w-[278px] group">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Invalid email address... Try again."
                className="w-full bg-gradient-to-b from-[rgba(226,232,255,0)] to-[rgba(226,232,255,0.06)] text-[#E2E8FF] px-3.5 py-2.5 rounded-lg border border-[rgba(226,232,255,0.1)] focus:border-[rgba(226,232,255,0.24)] focus:outline-none transition-all duration-200 text-base placeholder-[rgba(226,232,255,0.35)] backdrop-blur-[10px]"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="relative px-5 py-2.5 text-base font-medium text-white rounded-lg overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #926aff 0%, #ff77b0 50%, #ffb367 100%)'
              }}
            >
              <span className="relative z-10">Join waitlist</span>
            </motion.button>
          </motion.div>
          
          {/* Success message */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center rounded-lg border backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(158,122,255,0.1) 0%, rgba(254,139,187,0.1) 33.33%, rgba(255,189,122,0.1) 66.67%, rgba(248,234,195,0.1) 100%)',
              borderColor: 'rgba(158,122,255,0.2)'
            }}
            initial={{ opacity: 0, scale: 1.1, y: 10 }}
            animate={isJoined ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.1, y: 10 }}
            transition={{ duration: 0.45, ease: [0.6, 0.6, 0, 1] }}
          >
            <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent text-sm font-medium">
              You've joined the waitlist!
            </span>
          </motion.div>
        </motion.div>

        {/* Dimension Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold">D</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
