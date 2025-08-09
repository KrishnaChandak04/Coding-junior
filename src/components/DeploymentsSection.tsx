'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Server, Globe, CheckCircle, Clock, GitBranch } from 'lucide-react';

const DeploymentsSection = () => {
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
          All of your deployments <br />
          <span className="bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] bg-clip-text text-transparent">
            in one place.
          </span>
        </h2>
  <p className="text-xl text-[rgba(226,232,255,0.75)]">
          View, manage, and scale your cloud - all from Dimension.
        </p>
      </motion.div>

      {/* Multi-cloud Deployment */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Cloud className="w-8 h-8 text-[#E2E8FF]" />
            <div>
              <h3 className="text-xl font-medium text-[#E2E8FF]">Multi-cloud</h3>
              <p className="text-[rgba(226,232,255,0.75)]">Deploy your codebase to a cloud provider of your choice.</p>
            </div>
          </div>
          
          {/* Cloud Providers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {['Vercel', 'Netlify', 'Railway', 'Cloudflare'].map((provider, index) => (
              <motion.div
                key={provider}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-4 bg-[rgba(226,232,255,0.03)] border border-[rgba(226,232,255,0.1)] rounded-lg text-center hover:border-[rgba(158,122,255,0.3)] transition-all duration-300"
              >
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{provider[0]}</span>
                </div>
                <span className="text-[#E2E8FF] text-sm">{provider}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-[#9e7aff] to-[#fe8bbb] text-white rounded-lg font-medium hover:from-[#8a6bff] hover:to-[#e57ba5] transition-all duration-300"
          >
            Deploy
          </motion.button>
        </div>
      </motion.div>

      {/* Deployment Management */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-[rgba(226,232,255,0.02)] border border-[rgba(226,232,255,0.1)] rounded-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Server className="w-8 h-8 text-[#E2E8FF]" />
            <div>
              <h3 className="text-xl font-medium text-[#E2E8FF]">View, manage, edit deployments</h3>
              <p className="text-[rgba(226,232,255,0.75)]">Everything you need to scale your cloud.</p>
            </div>
          </div>
          
          {/* Production Deployment */}
          <div className="bg-[rgba(226,232,255,0.03)] border border-[rgba(226,232,255,0.1)] rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-medium text-[#E2E8FF] mb-1">Production Deployment</h4>
                <p className="text-[rgba(226,232,255,0.5)] text-sm">Currently visible to your visitors</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Ready</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <div className="text-[rgba(226,232,255,0.5)] text-xs mb-1">Domain</div>
                <div className="text-[#E2E8FF] text-sm">docs.dimension.dev</div>
              </div>
              <div>
                <div className="text-[rgba(226,232,255,0.5)] text-xs mb-1">Status</div>
                <div className="text-[#E2E8FF] text-sm">Ready</div>
              </div>
              <div>
                <div className="text-[rgba(226,232,255,0.5)] text-xs mb-1">Environment</div>
                <div className="text-[#E2E8FF] text-sm">Production</div>
              </div>
              <div>
                <div className="text-[rgba(226,232,255,0.5)] text-xs mb-1">Created by</div>
                <div className="text-[#E2E8FF] text-sm">tejas</div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[rgba(226,232,255,0.1)]">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-[rgba(226,232,255,0.5)]" />
                <span className="text-[#E2E8FF] text-sm">chore: push to production</span>
                <span className="text-[rgba(226,232,255,0.5)] text-sm">2 days ago</span>
                <span className="px-2 py-1 bg-[rgba(226,232,255,0.1)] text-[#E2E8FF] text-xs rounded-full">main</span>
              </div>
            </div>
          </div>
          
          {/* Recent Deployments */}
          <div>
            <h4 className="text-lg font-medium text-[#E2E8FF] mb-4">Recent Deployments</h4>
            <div className="space-y-3">
              {[
                { id: 'docs-1-fjhx17K992Aa-ogu...', env: 'Production', status: 'Online', time: '2 days ago' },
                { id: 'docs-2-kj8x92L441Bb-piu...', env: 'Staging', status: 'Ready', time: '3 days ago' },
                { id: 'docs-3-mn3x45R668Cc-qwe...', env: 'Development', status: 'Building', time: '5 days ago' }
              ].map((deployment, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[rgba(226,232,255,0.03)] rounded-lg hover:bg-[rgba(226,232,255,0.05)] transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${
                      deployment.status === 'Online' ? 'bg-green-400' : 
                      deployment.status === 'Ready' ? 'bg-blue-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <div className="text-[#E2E8FF] font-medium">{deployment.id}</div>
                      <div className="text-[rgba(226,232,255,0.5)] text-sm">{deployment.env}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#E2E8FF] text-sm">{deployment.status}</div>
                    <div className="text-[rgba(226,232,255,0.5)] text-xs">{deployment.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DeploymentsSection;
