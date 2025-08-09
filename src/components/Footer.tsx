'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Changelog', href: '/blog?category=changelog' },
      { name: 'Documentation', href: 'https://docs.dimension.dev/' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' }
    ],
    contact: [
      { name: 'Discord', href: 'https://discord.gg/xdz2UPYSmk' },
      { name: 'Twitter', href: 'https://twitter.com/joindimension' },
      { name: 'GitHub', href: 'https://github.com/dimensionhq' },
      { name: 'Email', href: 'mailto:team@dimension.dev' }
    ]
  };

  return (
  <footer className="relative w-full bg-[#05051E] border-t border-[rgba(226,232,255,0.1)] px-6 py-16">
  <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#9e7aff] via-[#fe8bbb] to-[#ffbd7a] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">D</span>
              </div>
              <span className="text-[#E2E8FF] text-xl font-semibold">Dimension</span>
            </motion.div>
          </div>

          {/* Product Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#E2E8FF] font-medium mb-4"
            >
              Product
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[rgba(226,232,255,0.75)] hover:text-[#E2E8FF] transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Company Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#E2E8FF] font-medium mb-4"
            >
              Company
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[rgba(226,232,255,0.75)] hover:text-[#E2E8FF] transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#E2E8FF] font-medium mb-4"
            >
              Contact
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[rgba(226,232,255,0.75)] hover:text-[#E2E8FF] transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-[rgba(226,232,255,0.1)] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-[rgba(226,232,255,0.5)] text-sm">
            Copyright © 2025 Realm Software Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="/privacy-policy"
              className="text-[rgba(226,232,255,0.5)] hover:text-[rgba(226,232,255,0.75)] text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-[rgba(226,232,255,0.5)] hover:text-[rgba(226,232,255,0.75)] text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
