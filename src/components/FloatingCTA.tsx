
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { profileConfig } from '../config/profile';

const FloatingCTA: React.FC = () => {
  const handleClick = () => {
    window.open(profileConfig.theme.ctaUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <motion.button
        onClick={handleClick}
        className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg backdrop-blur-lg border border-white/20"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <MessageCircle size={20} />
        <span className="font-medium hidden sm:block">{profileConfig.theme.ctaText}</span>
        <span className="font-medium sm:hidden">Chat!</span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingCTA;
