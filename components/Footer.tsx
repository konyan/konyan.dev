import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleDownload = () => {
    setDownloadState('downloading');
    // Simulate download delay
    setTimeout(() => {
      setDownloadState('done');
      // Reset after 3 seconds
      setTimeout(() => setDownloadState('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 pt-24 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">

        <div className="border-t border-neutral-300 dark:border-neutral-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Konyan. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Linkedin size={20} /></a>
            <a href={SOCIAL_LINKS.email} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Mail size={20} /></a>
            <a href={SOCIAL_LINKS.phone} className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"><Phone size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
