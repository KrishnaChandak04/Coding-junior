'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [navBackground, setNavBackground] = useState({ width: 0, left: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const brandTransform = useTransform(scrollY, [0, 100], [0, -12]);
  const buttonTransform = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavHover = (e: React.MouseEvent<HTMLAnchorElement>, tab: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    if (navRect) {
      setNavBackground({
        width: rect.width + 8,
        left: rect.left - navRect.left - 4,
        opacity: 1
      });
    }
    setActiveTab(tab);
  };

  const handleNavLeave = () => {
    setNavBackground(prev => ({ ...prev, opacity: 0 }));
    setActiveTab('');
  };

  return (
    <motion.header 
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-[22px] transition-all duration-500 ease-out"
      style={{
        background: isScrolled ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.01)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(226,232,255,0.05)' : 'none'
      }}
    >
      <div className="max-w-[1328px] mx-auto flex items-center justify-between relative">
        {/* Animated bottom border line */}
        <motion.div 
          className="absolute bottom-[-22px] left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" 
          style={{ opacity: headerOpacity }}
        />
        
        {/* Brand with scroll animation */}
        <motion.div 
          className="flex items-center relative z-10 flex-1"
          style={{ 
            transform: useTransform(brandTransform, (value) => `translateX(${value}px)`),
            opacity: isScrolled ? 0 : 1
          }}
          transition={{ duration: 0.45, ease: [0.6, 0.6, 0, 1] }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.45, ease: [0.6, 0.6, 0, 1] }}
            className="flex items-center cursor-pointer"
          >
            <div className="w-9 h-9 mr-3 rounded-lg relative overflow-hidden">
              <div className="w-full h-full bg-[#E2E8FF] opacity-80" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{
                  translateX: ['100%', '200%'],
                  transition: { duration: 0.6, ease: 'easeInOut' }
                }}
              />
            </div>
            <span className="text-base font-medium text-[#E2E8FF] select-none">
              Dimension
            </span>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation with animated background */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 rounded-full p-1 isolation-isolate overflow-hidden"
          style={{
            background: isScrolled ? 'rgba(5,5,30,0.9)' : 'rgba(5,5,30,0.8)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(226,232,255,0.1)',
            boxShadow: isScrolled ? '0 12px 32px rgba(5,5,30,0.4), 0 -8px 32px rgba(226,232,255,0.12) inset' : 'none'
          }}
        >
          {/* Animated background pill */}
          <motion.div
            className="absolute top-1 h-[38px] bg-[rgba(223,223,245,0.05)] rounded-full border border-[rgba(223,223,245,0.08)]"
            style={{
              width: navBackground.width,
              left: navBackground.left,
              opacity: navBackground.opacity
            }}
            transition={{ duration: 0.45, ease: [0.6, 0.6, 0, 1] }}
          />
          
          <div className="flex items-center space-x-0.5 relative z-10">
            {[
              { name: 'Product', href: '#product' },
              { name: 'Company', href: '#company' },
              { name: 'Blog', href: '/blog' },
              { name: 'Changelog', href: '/blog?category=changelog' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onMouseEnter={(e) => handleNavHover(e, item.name)}
                onMouseLeave={handleNavLeave}
                className="px-5 py-2 text-sm rounded-full flex items-center relative cursor-pointer transition-colors duration-200"
                style={{
                  color: activeTab === item.name ? '#E2E8FF' : 'rgba(226,232,255,0.75)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Action section with slide animation */}
            <motion.div 
              className="flex items-center"
              style={{
                transform: isScrolled ? 'translateX(0)' : 'translateX(200px)',
                transition: 'transform 0.45s cubic-bezier(0.6, 0.6, 0, 1)'
              }}
            >
              <div className="w-px h-5 bg-[rgba(226,232,255,0.08)] mx-4" />
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3.5 py-1.5 text-sm font-medium text-white rounded-full relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(96.34deg, #926aff 0%, #ff77b0 50%, #ffb367 100%)'
                }}
              >
                {/* Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-white/32 to-transparent rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Animated frames */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute border rounded-full"
                      style={{
                        width: `calc(100% + ${(i + 1) * 8}px)`,
                        height: `calc(100% + ${(i + 1) * 8}px)`,
                        top: `${-(i + 1) * 4}px`,
                        left: `${-(i + 1) * 4}px`,
                        borderColor: `rgba(202, 183, 255, ${0.3 - i * 0.1})`,
                        opacity: 0
                      }}
                      whileHover={{
                        opacity: [0, 1, 0],
                        scale: [1, 1.1, 1.2],
                        transition: { 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }
                      }}
                    />
                  ))}
                </div>
                
                <span className="relative z-10">Join waitlist</span>
              </motion.button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Join Button with enhanced effects */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            transform: useTransform(buttonTransform, (value) => `translateX(${value}px)`),
            opacity: isScrolled ? 0 : 1
          }}
          transition={{ duration: 0.45, ease: [0.6, 0.6, 0, 1] }}
          className="md:hidden px-4 py-2 text-sm font-medium rounded-lg relative overflow-hidden group"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(226,232,255,0)] to-[rgba(226,232,255,0.12)] rounded-lg" />
          <div className="absolute inset-0 border border-[rgba(226,232,255,0.2)] rounded-lg" />
          
          {/* Hover effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[rgba(226,232,255,0.2)] to-transparent rounded-lg"
            initial={{ opacity: 0, x: '-100%' }}
            whileHover={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
          />
          
          <span className="relative bg-gradient-to-b from-[rgba(226,232,255,0.6)] to-[#E2E8FF] bg-clip-text text-transparent font-medium">
            Join waitlist
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
