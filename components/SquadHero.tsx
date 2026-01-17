'use client';

import { SquadInfo } from '@/types';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SquadHeroProps {
  info: SquadInfo;
}

export default function SquadHero({ info }: SquadHeroProps) {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-80" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DungBug Squad
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl mx-auto">
            {info.description}
          </p>
          <p className="text-lg text-purple-300 italic mb-8">
            "{info.tagline}"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="bg-blue-600 bg-opacity-30 backdrop-blur-md rounded-lg px-6 py-3 border border-blue-400 border-opacity-50">
            <p className="text-2xl font-bold text-blue-300">{info.memberCount}</p>
            <p className="text-sm text-gray-300">Членов сквада</p>
          </div>
          <div className="bg-purple-600 bg-opacity-30 backdrop-blur-md rounded-lg px-6 py-3 border border-purple-400 border-opacity-50">
            <p className="text-2xl font-bold text-purple-300">{new Date(info.founded).getFullYear()}</p>
            <p className="text-sm text-gray-300">Основана</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <motion.div
          className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-purple-400 rounded-full mt-2" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
