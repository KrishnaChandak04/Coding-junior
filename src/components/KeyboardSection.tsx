'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const KeyboardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const keyboardRows = [
    ['~', '`', '!', '1', '@', '2', '#', '3', '$', '4', '%', '5', '^', '6', '&', '7', '*', '8', '(', '9', ')', '0', '‒', '-', '+', '=', 'delete'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '[', '}', ']', '|', '\\'],
    ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', ';', '"', "'", 'return'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', ',', '>', '.', '?', '/', 'shift'],
    ['fn', '🌐', '⌃', 'control', '⌥', 'option', '⌘', 'command', 'space', '⌘', 'command', '⌥', 'option', '◀', '▼', '▲', '▶']
  ];

  const specialKeys = ['delete', 'tab', 'caps lock', 'return', 'shift', 'fn', 'space', 'control', 'option', 'command'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      setPressedKey(key);
      setTimeout(() => setPressedKey(null), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [mouseX, mouseY]);

  const getKeyWidth = (key: string) => {
    switch (key) {
      case 'delete':
      case 'return':
        return 'w-16';
      case 'tab':
      case 'caps lock':
        return 'w-14';
      case 'shift':
        return 'w-20';
      case 'space':
        return 'w-48';
      case '⌘':
      case '⌃':
      case '⌥':
      case 'control':
      case 'option':
      case 'command':
        return 'w-12';
      case 'fn':
      case '🌐':
        return 'w-8';
      default:
        return 'w-8';
    }
  };

  const isKeyPressed = (key: string) => {
    return pressedKey === key.toUpperCase() || pressedKey === key;
  };

  return (
    <section className="py-24 px-6 bg-[#05051E] text-center relative overflow-hidden" ref={ref}>
      {/* Floating cursor effect */}
      <motion.div
        className="fixed w-64 h-64 pointer-events-none z-10 mix-blend-screen"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: 'radial-gradient(circle, rgba(158, 122, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
          x: smoothMouseX,
          y: smoothMouseY
        }}
        animate={{ opacity: isInView ? 0.8 : 0 }}
      />
      
      <div className="max-w-5xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[40px] leading-[48px] font-medium mb-4 text-[#E2E8FF]"
            style={{ fontFamily: 'Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}
          >
            Keyboard Shortcuts
          </h2>
          <div className="text-[rgba(226,232,255,0.75)] mb-12 text-lg">
            Powerful keyboard shortcuts for effortless navigation.
          </div>

          {/* Interactive MacBook Keyboard */}
          <motion.div 
            className="bg-[rgba(34,32,57,0.5)] p-8 rounded-2xl border border-[rgba(226,232,255,0.1)] backdrop-blur-sm max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Keyboard glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(158,122,255,0.1)] to-transparent rounded-2xl"
              animate={{
                background: [
                  'linear-gradient(90deg, transparent 0%, rgba(158,122,255,0.1) 50%, transparent 100%)',
                  'linear-gradient(270deg, transparent 0%, rgba(254,139,187,0.1) 50%, transparent 100%)',
                  'linear-gradient(90deg, transparent 0%, rgba(255,189,122,0.1) 50%, transparent 100%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="space-y-2 relative z-10">
              {keyboardRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-1">
                  {row.map((key, keyIndex) => (
                    <motion.button
                      key={keyIndex}
                      className={`
                        ${getKeyWidth(key)} 
                        h-10 
                        rounded 
                        text-xs 
                        font-mono 
                        transition-all 
                        duration-200
                        relative
                        overflow-hidden
                        group
                        ${specialKeys.includes(key) ? 'text-[10px]' : ''}
                      `}
                      style={{
                        background: isKeyPressed(key) ? '#3b82f6' : hoveredKey === key ? 'rgba(226,232,255,0.15)' : 'rgba(226,232,255,0.05)',
                        borderColor: isKeyPressed(key) ? '#3b82f6' : 'rgba(226,232,255,0.2)',
                        color: isKeyPressed(key) ? '#fff' : hoveredKey === key ? '#E2E8FF' : 'rgba(226,232,255,0.8)',
                        transform: isKeyPressed(key) ? 'scale(0.95) translateY(1px)' : 'scale(1) translateY(0px)',
                        boxShadow: isKeyPressed(key) ? '0 2px 4px rgba(0,0,0,0.3) inset' : '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        background: 'rgba(226,232,255,0.15)',
                        borderColor: 'rgba(226,232,255,0.4)'
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        y: 1
                      }}
                      onMouseEnter={() => setHoveredKey(key)}
                      onMouseLeave={() => setHoveredKey(null)}
                      onClick={() => {
                        setPressedKey(key.toUpperCase());
                        setTimeout(() => setPressedKey(null), 200);
                      }}
                    >
                      {/* Key shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      
                      {/* Key ripple effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded -translate-x-full"
                        animate={isKeyPressed(key) ? {
                          translateX: ['100%', '200%']
                        } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                      
                      <span className="relative z-10">
                        {key === 'space' ? '' : key}
                      </span>
                    </motion.button>
                  ))}
                </div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 text-xs text-[rgba(226,232,255,0.5)] text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Try typing on your keyboard! Keys will light up in real-time.
            </motion.div>
          </motion.div>

          {/* Keyboard shortcuts info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="p-6 bg-[rgba(226,232,255,0.05)] rounded-xl border border-[rgba(226,232,255,0.1)]">
              <h3 className="font-medium mb-3 text-[#E2E8FF]">Navigation</h3>
              <div className="space-y-2 text-sm text-[rgba(226,232,255,0.75)]">
                <div className="flex justify-between">
                  <span>⌘ + K</span>
                  <span>Quick Search</span>
                </div>
                <div className="flex justify-between">
                  <span>⌘ + T</span>
                  <span>New Tab</span>
                </div>
                <div className="flex justify-between">
                  <span>⌘ + W</span>
                  <span>Close Tab</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[rgba(226,232,255,0.05)] rounded-xl border border-[rgba(226,232,255,0.1)]">
              <h3 className="font-medium mb-3 text-[#E2E8FF]">Development</h3>
              <div className="space-y-2 text-sm text-[rgba(226,232,255,0.75)]">
                <div className="flex justify-between">
                  <span>⌘ + D</span>
                  <span>Deploy</span>
                </div>
                <div className="flex justify-between">
                  <span>⌘ + R</span>
                  <span>Refresh</span>
                </div>
                <div className="flex justify-between">
                  <span>⌘ + Enter</span>
                  <span>Run Command</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyboardSection;
