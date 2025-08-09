'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, GitBranch, Calendar, BarChart3, Target, Clock } from 'lucide-react';

const GitHubSyncSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative w-full py-24 px-6 bg-[#05051E] overflow-hidden" ref={ref}>
      {/* Section Header */}
      <motion.div 
        className="text-center mb-20 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[40px] leading-[48px] font-medium mb-6" 
          style={{ fontFamily: 'Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}
        >
          Track everything <br />
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            with GitHub Sync.
          </span>
        </h2>
        <p className="text-xl text-[rgba(226,232,255,0.75)]">
          Projects, tasks, milestones, cycles, and more.
        </p>
      </motion.div>

      {/* GitHub Sync Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Sync Feature */}
          <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Github className="w-8 h-8 text-[#E2E8FF]" />
              <div>
                <h3 className="text-xl font-medium text-[#E2E8FF]">GitHub Sync</h3>
                <p className="text-[rgba(226,232,255,0.75)]">Live-sync with your GitHub issues, automatic branch management and more.</p>
              </div>
            </div>
            
            {/* Sync Flow */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[rgba(226,232,255,0.03)] rounded-lg">
                <motion.div
                  className="flex items-center justify-between p-4 bg-[rgba(226,232,255,0.03)] rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  whileHover={{ scale: 1.02, boxShadow: '0 4px 32px #9e7aff33' }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-[#E2E8FF] font-medium">Dimension</span>
                  </div>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[rgba(226,232,255,0.5)]"
                  >
                    →
                  </motion.div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-10 h-10 text-[#E2E8FF]" />
                    <span className="text-[#E2E8FF] font-medium">GitHub</span>
                  </div>
                </motion.div>
              
              <button className="w-full py-3 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] text-white rounded-lg font-medium hover:from-[#8a6bff] hover:to-[#e57ba5] transition-all duration-300">
                <span className="relative z-10">Submit</span>
                {/* Animated button frames */}
                <div className="absolute inset-0 pointer-events-none">
                  {[120, 128, 136].map((size, i) => (
                    <motion.div
                      key={i}
                      className="absolute border rounded-lg"
                      style={{
                        width: `${size}px`,
                        height: '48px',
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
              </button>
            </div>
          </div>

          {/* Roadmaps */}
          <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="w-8 h-8 text-[#E2E8FF]" />
              <div>
                <h3 className="text-xl font-medium text-[#E2E8FF]">Roadmaps</h3>
                <p className="text-[rgba(226,232,255,0.75)]">Plan, track, and launch your products.</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {['Beta Signup Page', 'Documentation and Support', 'Updates & Bug Fixes'].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-[rgba(226,232,255,0.03)] rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-green-400' : index === 1 ? 'bg-yellow-400' : 'bg-gray-400'}`} />
                  <span className="text-[#E2E8FF]">{item}</span>
                </div>
              ))}
            </div>
          </div>
            </div>
          </div>
      </motion.div>

      {/* Cycles Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-8 h-8 text-[#E2E8FF]" />
            <div>
              <h3 className="text-xl font-medium text-[#E2E8FF]">Cycles</h3>
              <p className="text-[rgba(226,232,255,0.75)]">Goal-focused efficiency for sustained productivity.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Cycle Info */}
            <div className="col-span-1">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-[#E2E8FF] mb-1">Cycle 2</h4>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4 text-[rgba(226,232,255,0.5)]" />
                  <span className="text-[rgba(226,232,255,0.5)] text-sm">3 weekdays left</span>
                </div>
                <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Active</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="col-span-3 grid grid-cols-3 gap-4">
              {[
                { label: 'Scope', value: '132', change: '+64%', color: 'text-blue-400' },
                { label: 'Started', value: '82', change: '+68%', color: 'text-yellow-400' },
                { label: 'Completed', value: '48', change: '+44%', color: 'text-green-400' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[rgba(226,232,255,0.03)] rounded-lg">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-[rgba(226,232,255,0.5)] text-sm mb-1">{stat.label}</div>
                  <div className="text-green-400 text-xs">{stat.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubSyncSection;
