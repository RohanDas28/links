
import React from 'react';
import { motion } from 'framer-motion';
import { profileConfig } from '../config/profile';

const HeroSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative col-span-full mb-8 text-center"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-15 dark:opacity-8">
        <iframe 
          src={profileConfig.theme.splineBackgroundUrl}
          width="100%" 
          height="100%"
          style={{ border: 'none', pointerEvents: 'none' }}
          title="3D Background Animation"
        />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${20 + (i * 20) % 60}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 p-8 md:p-12 backdrop-blur-xl rounded-3xl border border-zinc-200/40 dark:border-zinc-700/40 bg-white/85 dark:bg-zinc-900/85 shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse"
        >
          {profileConfig.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg lg:text-xl text-zinc-800 dark:text-zinc-300 font-medium mb-6"
        >
          {profileConfig.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm md:text-base text-zinc-700 dark:text-zinc-400 mb-6"
        >
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {profileConfig.animatedText}
          </motion.span>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{ x: [-100, 200] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2 
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
