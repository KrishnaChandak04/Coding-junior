'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Users, Calendar, Video } from 'lucide-react';

const CollaborationSection = () => {
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
          Communicate more, <br />
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            with less.
          </span>
        </h2>
        <p className="text-xl text-[rgba(226,232,255,0.75)]">
          Driven by delightfully smart interactions.
        </p>
      </motion.div>

      {/* Chat Interface Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          {/* Chat Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(226,232,255,0.1)]">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-[#E2E8FF] font-medium">#general</span>
              <span className="text-[rgba(226,232,255,0.5)] text-sm">6 members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4 text-[rgba(226,232,255,0.5)]" />
              <Users className="w-4 h-4 text-[rgba(226,232,255,0.5)]" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4">
            {/* Message 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-[#ff9bc5] to-[#ffbd7a] rounded-full flex items-center justify-center text-white text-sm font-medium">
                T
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[#E2E8FF] font-medium">Tejas</span>
                  <span className="text-[rgba(226,232,255,0.5)] text-xs">1:14 PM</span>
                </div>
                <p className="text-[rgba(226,232,255,0.75)]">
                  Our Command K menu doesn't trigger when I'm focused on a text field.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 px-3 py-1.5 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] text-white text-sm rounded-lg"
                >
                  Create issue on Linear
                </motion.button>
              </div>
            </div>

            {/* Message 2 with AI suggestion */}
            <div className="bg-[rgba(226,232,255,0.03)] border border-[rgba(226,232,255,0.1)] rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AI</span>
                </div>
                <div className="flex-1">
                  <p className="text-[rgba(226,232,255,0.75)] text-sm mb-3">
                    Edit the shortcut scope for the CMD+K to trigger when a user is focused on text fields.
                  </p>
                  <div className="bg-[rgba(226,232,255,0.05)] border border-[rgba(226,232,255,0.1)] rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E2E8FF] font-medium">IOS-22</span>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-[rgba(255,189,122,0.2)] text-[#ffbd7a] text-xs rounded-full">Web</span>
                        <span className="px-2 py-1 bg-[rgba(255,155,197,0.2)] text-[#fe8bbb] text-xs rounded-full">Urgent</span>
                      </div>
                    </div>
                    <p className="text-[rgba(226,232,255,0.75)] text-sm">
                      Edit shortcut scope to trigger when focused on an input
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slash Commands */}
            <div className="border-t border-[rgba(226,232,255,0.1)] pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-lg p-3">
                  <span className="text-[rgba(226,232,255,0.5)]">/</span>
                  <span className="text-[#E2E8FF] ml-1">Slash commands.</span>
                </div>
              </div>
              <p className="text-[rgba(226,232,255,0.5)] text-sm mt-2">
                Create meetings, issues and more in just seconds.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {/* Auto resource pinning */}
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-2">Auto resource pinning.</h3>
          <p className="text-[rgba(226,232,255,0.75)]">We'll keep track of what's important in chat.</p>
        </div>

        {/* Activity channels */}
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-2">Activity channels.</h3>
          <p className="text-[rgba(226,232,255,0.75)]">Stay in the know. On the go.</p>
        </div>

        {/* Collaborative debugging */}
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-2">Collaborative debugging.</h3>
          <p className="text-[rgba(226,232,255,0.75)]">Share and collaboratively debug code - together.</p>
        </div>

        {/* AI auto summarize */}
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-2">
            <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
              AI
            </span> auto summarize.
          </h3>
          <p className="text-[rgba(226,232,255,0.75)]">Get the gist, without the fluff.</p>
        </div>

        {/* Context Sharing */}
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-2">Context Sharing</h3>
          <p className="text-[rgba(226,232,255,0.75)]">Share information. No links. No copy paste.</p>
        </div>

        {/* Peek Views */}
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-2">Peek Views</h3>
          <p className="text-[rgba(226,232,255,0.75)]">Everything you need. At a peek.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default CollaborationSection;
