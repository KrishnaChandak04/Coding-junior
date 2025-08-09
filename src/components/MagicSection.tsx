'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bell, Eye, Share2, Inbox, Zap } from 'lucide-react';

const MagicSection = () => {
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
          With{' '}
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            magic
          </span>{' '}
          sprinkled throughout.
        </h2>
  <p className="text-xl text-[rgba(226,232,255,0.75)]">
          Just to make work feel exciting again.
        </p>
      </motion.div>

      {/* Magic Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notifications */}
          <motion.div className="lg:col-span-1" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} whileHover={{ scale: 1.02, boxShadow: '0 4px 32px #9e7aff33' }}>
            <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <Bell className="w-8 h-8 text-[#E2E8FF]" />
                <div>
                  <h3 className="text-xl font-medium text-[#E2E8FF]">Notifications</h3>
                    <p className="text-[rgba(226,232,255,0.75)]">You&apos;re always in sync.</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  'Task assigned to you',
                  'Deployment failed',
                  'Actions pipeline failed',
                  'Deployed to Vercel',
                  'Force pushed to GitHub',
                  '8 new messages in #general',
                  'Dependabot alert',
                  '8/8 checks passed',
                  'GitHub Release Published',
                  '7 new commits on PR'
                ].map((notification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-3 bg-[rgba(226,232,255,0.03)] rounded-lg text-sm text-[rgba(226,232,255,0.75)] hover:bg-[rgba(226,232,255,0.05)] transition-all duration-200"
                  >
                    {notification}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Inbox & Peek Views */}
          <div className="lg:col-span-2 space-y-8">
            {/* Inbox */}
            <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Inbox className="w-8 h-8 text-[#E2E8FF]" />
                  <div>
                    <h3 className="text-xl font-medium text-[#E2E8FF]">Inbox</h3>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-[rgba(226,232,255,0.1)] text-[#E2E8FF] rounded-full">Clear inbox</button>
                  <button className="px-3 py-1 text-xs bg-[rgba(226,232,255,0.1)] text-[#E2E8FF] rounded-full">Mark all as read</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center py-8">
                  <Inbox className="w-12 h-12 text-[rgba(226,232,255,0.3)] mx-auto mb-3" />
                  <p className="text-[rgba(226,232,255,0.5)]">No messages</p>
                </div>
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-[rgba(226,232,255,0.1)] rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-[rgba(226,232,255,0.3)]">📧</span>
                  </div>
                  <p className="text-[rgba(226,232,255,0.5)]">No unread messages</p>
                </div>
              </div>
              {/* Sample Inbox Item */}
              <div className="mt-4 p-4 bg-[rgba(226,232,255,0.03)] rounded-lg">
                <motion.div className="flex items-start space-x-3" initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 1.2 }} whileHover={{ scale: 1.03, boxShadow: '0 2px 16px #9e7aff33' }}>
                  <div className="w-8 h-8 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[#E2E8FF] font-medium">Acme issue</span>
                      <span className="text-[rgba(226,232,255,0.5)] text-xs">3 days</span>
                    </div>
                    <p className="text-[rgba(226,232,255,0.75)] text-sm">
                      oguzyagizkara commented on the issue: Landing
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Peek Views */}
            <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
              <motion.div className="flex items-center space-x-3 mb-6" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }} whileHover={{ scale: 1.02, boxShadow: '0 4px 32px #ffbd7a33' }}>
                <Eye className="w-8 h-8 text-[#E2E8FF]" />
                <div>
                  <h3 className="text-xl font-medium text-[#E2E8FF]">Peek Views</h3>
                  <p className="text-[rgba(226,232,255,0.75)]">Everything you need. At a peek.</p>
                </div>
              </motion.div>
              {/* Peek View Demo */}
              <div className="bg-[rgba(226,232,255,0.03)] rounded-lg p-4">
                <motion.div className="flex items-center justify-between mb-3" initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 1.5 }} whileHover={{ scale: 1.03, boxShadow: '0 2px 16px #fe8bbb33' }}>
                  <span className="text-[#E2E8FF] font-medium">Share Build Log - Failed build on Frontend</span>
                  <Share2 className="w-4 h-4 text-[rgba(226,232,255,0.5)]" />
                </motion.div>
                <div className="text-[rgba(226,232,255,0.5)] text-sm mb-2">FRND-107 • 4 days ago</div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#E2E8FF] text-sm">#general</span>
                  <span className="text-[rgba(226,232,255,0.5)] text-sm">6 members</span>
                  <button className="ml-auto px-3 py-1 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] text-white text-xs rounded-full">
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Context Sharing */}
            <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
              <motion.div className="flex items-center space-x-3 mb-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} whileHover={{ scale: 1.02, boxShadow: '0 4px 32px #9e7aff33' }}>
                <Share2 className="w-8 h-8 text-[#E2E8FF]" />
                <div>
                  <h3 className="text-xl font-medium text-[#E2E8FF]">Context Sharing</h3>
                  <p className="text-[rgba(226,232,255,0.75)]">Share information. No links. No copy paste.</p>
                </div>
              </motion.div>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-[rgba(226,232,255,0.5)]">Instant context sharing</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MagicSection;
