'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
  // Store particle positions in state for hydration consistency
  const [particlePositions, setParticlePositions] = useState<Array<{left: number, top: number}>>([]);

  useEffect(() => {
    // Only run on client
    const positions = Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticlePositions(positions);
  }, []);
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoined(true);
    setTimeout(() => setIsJoined(false), 3000);
  };

  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 5 * Math.sin(i), 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: (i % 4),
              ease: 'easeInOut'
            }}
          />
          It&apos;s not magic, it&apos;s Dimension.

        {/* Cursor-following light orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(158, 122, 255, ${0.15 - i * 0.05}) 0%, transparent 70%)`,
              filter: 'blur(20px)',
              x: smoothMouseX,
              y: smoothMouseY,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="relative w-full pt-36 pb-20 px-5 overflow-hidden">
      <FloatingParticles />
      
      {/* ...existing code... */}

      <motion.div 
        style={{ y: y1, opacity }}
        className="text-center max-w-4xl mx-auto relative z-30"
      >
        {/* Announcement Badge */}
        <motion.a
          href="/blog/angel-round/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center mb-4 px-3.5 py-1 text-sm rounded-full backdrop-blur-md relative overflow-hidden border border-[rgba(202,183,255,0.2)]"
          style={{
            background: 'linear-gradient(135deg, rgba(202, 183, 255, 0.08) 0%, rgba(255, 155, 197, 0.08) 50%, rgba(255, 202, 149, 0.08) 100%)',
            boxShadow: '0 -4px 12px rgba(212, 158, 255, 0.12) inset'
          }}
        >
          <span className="bg-gradient-to-r from-[#cab7ff] via-[#ff9bc5] to-[#ffca95] bg-clip-text text-transparent font-medium">
            🎉 Announcing our $1.4M Fundraise
          </span>
        </motion.a>

        {/* Main Headlines - Exact Dimension.dev Structure */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[72px] leading-[80px] font-medium mb-5 tracking-[-1.44px] text-center" 
          style={{ fontFamily: 'Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}
        >
          <span className="bg-gradient-to-b from-[rgba(240,238,249,0.8)] to-[#E2E8FF] bg-clip-text text-transparent block">
            Dimension is the new
          </span>
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            <strong>standard for collaboration</strong>
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[40px] leading-[48px] md:text-[32px] md:leading-[40px] font-medium mb-8 text-center text-[#E2E8FF]" 
          style={{ fontFamily: 'Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}
        >
          Build software <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">faster, together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-[rgba(226,232,255,0.75)] mb-8 max-w-2xl mx-auto"
        >
          Chat, code, cloud, deployments, and more.
        </motion.p>

        {/* Email Signup with advanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={`relative mt-8 mb-8 transition-all duration-500 ${isJoined ? 'hero-action-success' : ''}`}
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
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder="Invalid email address... Try again."
                className="w-full bg-gradient-to-b from-[rgba(226,232,255,0)] to-[rgba(226,232,255,0.06)] text-[#E2E8FF] px-3.5 py-2.5 rounded-lg border border-[rgba(226,232,255,0.1)] focus:border-[rgba(226,232,255,0.24)] focus:outline-none transition-all duration-200 text-base placeholder-[rgba(226,232,255,0.35)] backdrop-blur-[10px]"
                whileFocus={{ scale: 1.02 }}
              />
              
              {/* Input hover effects */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-[rgba(226,232,255,0)] to-[rgba(226,232,255,0.08)] rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Focus ring */}
              <motion.div 
                className="absolute inset-0 border-2 border-[rgba(226,232,255,0.3)] rounded-lg pointer-events-none"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={isEmailFocused ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, y: 1.5 }}
              onClick={handleSubmit}
              className="relative px-5 py-2.5 text-base font-medium text-white rounded-lg overflow-hidden group cursor-none"
              style={{
                background: 'linear-gradient(135deg, #926aff 0%, #ff77b0 50%, #ffb367 100%)'
              }}
            >
              {/* Button background effects */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-white/32 to-transparent rounded-lg"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.8 }}
              />
              
              {/* Hover overlay */}
              <motion.div 
                className="absolute inset-0 bg-white/10 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              {/* Animated button frames */}
              <div className="absolute inset-0 pointer-events-none">
                {[139, 147, 155].map((size, i) => (
                  <motion.div
                    key={i}
                    className="absolute border rounded-lg"
                    style={{
                      width: `${size}px`,
                      height: '52px',
                      top: '-4px',
                      left: `${-4 - i * 4}px`,
                      borderColor: `rgba(202, 183, 255, ${0.3 - i * 0.1})`,
                      opacity: 0
                    }}
                    whileHover={{
                      opacity: [0, 1, 0],
                      pathLength: [0, 1, 0],
                      transition: {
                        duration: 10,
                        repeat: Infinity,
                        delay: i * 2
                      }
                    }}
                  />
                ))}
              </div>
              
              {/* Button shadow */}
              <motion.div 
                className="absolute inset-0 rounded-lg"
                style={{
                  boxShadow: '0 0 #000019, 0 9px 21px #000019fa, 0 37px 37px #000019d9, 0 84px 50px #00001980, 0 149px 60px #00001926, 0 233px 65px #00001905, 0 -3px #49023933 inset'
                }}
                whileTap={{
                  boxShadow: '0 0 #000019, 0 9px 21px #000019fa, 0 37px 37px #000019d9, 0 84px 50px #00001980, 0 149px 60px #00001926, 0 233px 65px #00001905, 0 0 #49023933 inset'
                }}
              />
              
              <span className="relative z-10">Join waitlist</span>
            </motion.button>
          </motion.div>
          
          {/* Success message with enhanced animation */}
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
            <motion.span 
              className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#f8eac3] bg-clip-text text-transparent text-sm font-medium"
              animate={isJoined ? { 
                background: [
                  'linear-gradient(to right, #9e7aff, #fe8bbb, #f8eac3)',
                  'linear-gradient(to right, #fe8bbb, #f8eac3, #9e7aff)',
                  'linear-gradient(to right, #f8eac3, #9e7aff, #fe8bbb)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              You've joined the waitlist!
            </motion.span>
          </motion.div>
        </motion.div>

        {/* App Preview Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 max-w-[1216px] mx-auto"
        >
          <div className="relative h-[766px] bg-gradient-to-b from-transparent via-[rgba(5,5,30,0.7)] to-[#05051E] rounded-t-[18px] border border-[rgba(226,232,255,0.1)] border-b-0 overflow-hidden">
            <div className="w-full h-full bg-[#05051E] flex items-center justify-center text-[rgba(226,232,255,0.5)]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] rounded-lg opacity-20" />
                <p>App Preview</p>
              </div>
            </div>
            {/* Animated border effect */}
            <div className="absolute inset-0 border border-[rgba(226,232,255,0.1)] rounded-t-[18px] pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#05051E] to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Maintainers Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="relative z-40 -mt-20 text-center"
      >
        <p className="text-[#E2E8FF] text-center max-w-[415px] mx-auto mb-7 px-5">
          Join the maintainers and contributors to the largest open-source projects on our waitlist.
        </p>
          <div className="flex justify-center items-center flex-wrap gap-4">
            {/* Million Logo */}
            <div className="w-[180px] h-12 bg-[rgba(226,232,255,0.05)] rounded-lg border border-[rgba(226,232,255,0.1)] flex items-center justify-center gap-2 text-[rgba(226,232,255,0.6)] text-sm font-medium">
              <Image src="/file.svg" alt="Million" width={24} height={24} className="w-6 h-6 mr-2" /> Million
            </div>
            {/* Tabler Logo */}
            <div className="w-[180px] h-12 bg-[rgba(226,232,255,0.05)] rounded-lg border border-[rgba(226,232,255,0.1)] flex items-center justify-center gap-2 text-[rgba(226,232,255,0.6)] text-sm font-medium">
              <Image src="/window.svg" alt="Tabler" width={24} height={24} className="w-6 h-6 mr-2" /> Tabler
            </div>
            {/* SolidJS Logo */}
            <div className="w-[180px] h-12 bg-[rgba(226,232,255,0.05)] rounded-lg border border-[rgba(226,232,255,0.1)] flex items-center justify-center gap-2 text-[rgba(226,232,255,0.6)] text-sm font-medium">
              <Image src="/globe.svg" alt="SolidJS" width={24} height={24} className="w-6 h-6 mr-2" /> SolidJS
            </div>
            {/* Starship Logo */}
            <div className="w-[180px] h-12 bg-[rgba(226,232,255,0.05)] rounded-lg border border-[rgba(226,232,255,0.1)] flex items-center justify-center gap-2 text-[rgba(226,232,255,0.6)] text-sm font-medium">
              <Image src="/next.svg" alt="Starship" width={24} height={24} className="w-6 h-6 mr-2" /> Starship
            </div>
            {/* Astro Logo */}
            <div className="w-[180px] h-12 bg-[rgba(226,232,255,0.05)] rounded-lg border border-[rgba(226,232,255,0.1)] flex items-center justify-center gap-2 text-[rgba(226,232,255,0.6)] text-sm font-medium">
              <Image src="/vercel.svg" alt="Astro" width={24} height={24} className="w-6 h-6 mr-2" /> Astro
            </div>
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;
