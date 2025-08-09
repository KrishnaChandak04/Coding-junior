'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, GitBranch, Code2, CheckSquare, Inbox, Zap, Box } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // No side effect needed for isVisible
  }, [isInView]);

  return (
    <section className="relative w-full py-24 px-6 bg-[#05051E] overflow-hidden" ref={ref}>
      {/* Section Header */}
      <motion.div 
        className="text-left mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[48px] leading-[56px] md:text-[40px] md:leading-[48px] font-medium text-[#E2E8FF] mb-6"
              style={{ fontFamily: 'Onest, system-ui, sans-serif' }}>
            Build software <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">faster, together</span>
          </h2>
          <p className="text-xl text-[rgba(226,232,255,0.7)] max-w-2xl mx-auto">
            The most complete developer experience.
          </p>
        </motion.div>
        <div className="absolute top-4 right-4 w-[130px] h-[82px] bg-gradient-to-br from-[rgba(226,232,255,0.05)] to-transparent rounded-lg" />
        <div className="p-6">
          <MessageCircle className="w-7 h-7 text-[#E2E8FF] mb-2" />
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-1">Collaborate on everything.</h3>
          <p className="text-base text-[rgba(226,232,255,0.55)] max-w-[330px]">
            From deployments to tasks, work with your team every step of the way.
          </p>
        </div>
        <div className="w-full rounded-[10px] border border-[rgba(226,232,255,0.1)] bg-[rgba(226,232,255,0.01)] h-[416px] relative overflow-hidden">
          <div className="p-6 h-full">
            <div className="text-[rgba(226,232,255,0.6)] text-sm text-center mt-40">
              Chat Interface Preview
            </div>
          </div>
        </div>
      </motion.div>
      {/* Crafted Tools Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="col-span-4 bg-[rgba(226,232,255,0.01)] border border-[rgba(226,232,255,0.1)] rounded-2xl p-1.5 relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 w-[90px] h-[26px] bg-gradient-to-br from-[rgba(226,232,255,0.05)] to-transparent rounded-lg" />
        <div className="p-6">
          <Box className="w-7 h-7 text-[#E2E8FF] mb-2" />
          <h3 className="text-lg font-medium text-[#E2E8FF] mb-1">Crafted for your favorite tools</h3>
          <p className="text-base text-[rgba(226,232,255,0.55)] max-w-[330px]">
            Connect your tools - we&apos;ll handle the rest. Many integrations, with more to come.
          </p>
        </div>
        <div className="w-full h-[416px] rounded-[10px] border border-[rgba(226,232,255,0.1)] bg-[rgba(226,232,255,0.01)] relative overflow-hidden">
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="w-64 h-64 relative">
              {/* Circular animation with brand icons */}
              <div className="absolute inset-0 rounded-full border border-[rgba(226,232,255,0.1)]" />
              <div className="text-[rgba(226,232,255,0.6)] text-sm text-center mt-28">
                Integration Hub
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Features List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-7 h-7 text-[#E2E8FF]" />
            <span className="text-lg font-medium text-[#E2E8FF]">Everything you need</span>
            <span className="text-lg text-[#E2E8FF]">all in one platform.</span>
          </div>
        </div>
        <p className="text-base text-[rgba(226,232,255,0.55)] mb-12">
          From prototyping to production - develop without switching tabs.
        </p>
        {/* Feature Items */}
        <div className="grid grid-cols-3 gap-0">
          {[
            { icon: MessageCircle, title: 'Chat', description: 'Collaborate with team members using our powerful devtool integrations.' },
            { icon: GitBranch, title: 'Deployments', description: 'View, manage, and deploy your applications directly from Dimension.' },
            { icon: Code2, title: 'Code Explorer', description: 'View and edit your repository directly from Dimension.' },
            { icon: CheckSquare, title: 'Tasks', description: 'View, track, and edit GitHub Issues directly from Dimension - with end-to-end sync.' },
            { icon: Inbox, title: 'Inbox', description: 'Stay up-to-date on the latest information within your organization.' },
            { icon: Zap, title: 'AI.', description: 'AI to make you 10x faster on everyday workflows - baked into Dimension.' }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-5 relative border-l border-[rgba(226,232,255,0.08)] first:border-l-0 group cursor-pointer"
              whileHover={{ 
                background: 'rgba(226,232,255,0.02)',
                borderLeftColor: 'rgba(158,122,255,0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                <feature.icon className="w-5 h-5 text-[#E2E8FF] mr-1.5 mt-0.5 flex-shrink-0 group-hover:text-[rgba(158,122,255,0.8)] transition-colors duration-300" />
                <div className="text-left">
                  <h4 className="text-sm font-medium text-[#E2E8FF] mb-1 group-hover:text-white transition-colors duration-300">{feature.title}</h4>
                  <p className="text-sm text-[rgba(226,232,255,0.55)] leading-relaxed group-hover:text-[rgba(226,232,255,0.75)] transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center"
      >
        <h3 className="text-[40px] leading-[48px] font-medium mb-3" 
          style={{ fontFamily: 'Onest, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif' }}
        >
          Crafted for the most&nbsp;
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            productive
          </span>
          &nbsp;teams.
        </h3>
        <div className="flex justify-center items-center space-x-8 text-lg text-[rgba(226,232,255,0.75)]">
          <span>Precision.</span>
          <span>Elegance.</span>
          <span>Performance.</span>
        </div>
      </motion.div>
      {/* Responsive mobile styles */}
      <style jsx>{`
        @media (max-width: 996px) {
          section {
            padding: 108px 0 0;
            max-width: 390px;
            margin: 0 auto;
          }
          .grid {
            display: block;
            height: auto;
          }
          .col-span-6, .col-span-4 {
            grid-column: unset;
            margin-bottom: 20px;
          }
          .rotating-frames {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
