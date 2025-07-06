
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface SocialCardProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
  featured?: boolean;
}

const SocialCard: React.FC<SocialCardProps> = ({ 
  title, 
  url, 
  icon, 
  gradient, 
  delay = 0, 
  featured = false 
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        rotateY: 2,
        rotateX: 2
      }}
      whileTap={{ scale: 0.97 }}
      className={`group relative ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <div
        onClick={handleClick}
        className={`
          relative cursor-pointer rounded-3xl backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-700/50
          bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-900
          transition-all duration-500 overflow-hidden group-hover:shadow-2xl
          ${featured ? 'p-8 min-h-[140px]' : 'p-6 min-h-[120px]'}
          transform-gpu perspective-1000
        `}
        style={{
          background: `linear-gradient(135deg, ${gradient}, rgba(255,255,255,0.1))`
        }}
      >
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(45deg, ${gradient.split(',')[0]}, ${gradient.split(',')[1]}, ${gradient.split(',')[0]})`
          }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
          <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
        </div>
        
        {/* Floating particles on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ 
                rotate: [0, -10, 10, -5, 0],
                scale: 1.2
              }}
              transition={{ duration: 0.5 }}
              className="p-3 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 dark:group-hover:text-white group-hover:shadow-lg transition-all duration-300"
            >
              {icon}
            </motion.div>
            <div>
              <motion.h3 
                className={`font-bold text-zinc-800 dark:text-zinc-200 dark:group-hover:text-white= transition-colors duration-300 ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}
                whileHover={{ x: 2 }}
              >
                {title}
              </motion.h3>
              {featured && (
                <motion.p 
                  className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 mt-1 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ✨ Featured Project
                </motion.p>
              )}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-current to-transparent mt-2 w-0 group-hover:w-full transition-all duration-500"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0.6, scale: 0.8 }}
            whileHover={{ 
              opacity: 1, 
              scale: 1.2,
              rotate: 45,
              x: 5 
            }}
            className="text-zinc-600 dark:text-zinc-400 group-hover:text-white transition-all duration-300 p-2 rounded-full bg-white/10 group-hover:bg-white/20"
          >
            {featured ? <ArrowUpRight size={24} /> : <ExternalLink size={20} />}
          </motion.div>
        </div>

        {/* Glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-xl"
          style={{ 
            background: `radial-gradient(circle at center, ${gradient.split(',')[0].replace('0.1', '0.4')}, transparent 70%)`,
            transform: 'scale(1.1)'
          }} 
        />
      </div>
    </motion.div>
  );
};

export default SocialCard;
