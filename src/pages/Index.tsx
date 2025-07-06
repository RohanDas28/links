
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Music, 
  Globe,
  Star
} from 'lucide-react';
import DarkModeToggle from '../components/DarkModeToggle';
import SocialCard from '../components/SocialCard';
import HeroSection from '../components/HeroSection';
import FloatingCTA from '../components/FloatingCTA';
import ParticleBackground from '../components/ParticleBackground';
import CustomCursor from '../components/CustomCursor';
import { profileConfig, platformStyles } from '../config/profile';

// Custom X (Twitter) icon component
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308L14.233 9.85L22.5 21.75h-6.656l-4.832-6.327L5.117 21.75H1.81l7.58-8.666L0.5 2.25h6.828l4.37 5.784L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

// Custom Reddit icon
const RedditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'twitter': return <XIcon />;
    case 'github': return <Github size={24} />;
    case 'instagram': return <Instagram size={24} />;
    case 'linkedin': return <Linkedin size={24} />;
    case 'message-circle': return <MessageCircle size={24} />;
    case 'reddit': return <RedditIcon />;
    case 'music': return <Music size={24} />;
    case 'globe': return <Globe size={24} />;
    case 'star': return <Star size={24} />;
    default: return <Globe size={24} />;
  }
};

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    return () => {
      // Restore default cursor on cleanup
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  // Generate social links from config
  const socialLinks = profileConfig.socialLinks.map((link, index) => ({
    title: link.title,
    url: link.url,
    icon: getIcon(platformStyles[link.platform as keyof typeof platformStyles]?.icon || 'globe'),
    gradient: platformStyles[link.platform as keyof typeof platformStyles]?.gradient || "rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.08)",
    delay: 0.1 + (index * 0.1)
  }));

  // Generate featured projects from config
  const featuredProjects = profileConfig.featuredProjects.map((project, index) => ({
    title: project.title,
    url: project.url,
    icon: getIcon(platformStyles[project.platform as keyof typeof platformStyles]?.icon || 'star'),
    gradient: platformStyles[project.platform as keyof typeof platformStyles]?.gradient || "rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15)",
    delay: 0.9 + (index * 0.1)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 transition-colors duration-500 relative overflow-hidden" style={{ cursor: 'none' }}>
      <CustomCursor />
      <ParticleBackground />
      <DarkModeToggle isDark={isDark} toggle={toggleDarkMode} />
      <FloatingCTA />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          <HeroSection />
          
          {/* Social Links */}
          {socialLinks.map((link) => (
            <SocialCard key={link.title} {...link} />
          ))}
          
          {/* Featured Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="col-span-full mt-8 mb-4 text-center"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-200 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {profileConfig.theme.featuredSectionTitle}
            </motion.h2>
            <motion.p 
              className="text-zinc-800 dark:text-zinc-300 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              {profileConfig.theme.featuredSectionSubtitle}
            </motion.p>
            <motion.div
              className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
          </motion.div>
          
          {/* Featured Projects */}
          {featuredProjects.map((project) => (
            <SocialCard key={project.title} {...project} featured={true} />
          ))}
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.p 
            className="text-zinc-700 dark:text-zinc-400 text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}
          >
            {profileConfig.footerText} • {new Date().getFullYear()}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
