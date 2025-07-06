
// 🎯 CONFIGURATION FILE - Edit this file to customize your LinkTree
// This is the only file you need to modify to personalize your page!

export const profileConfig = {
  // 👤 Personal Information
  name: "Rohan Das",
  tagline: "Developer • Gamer • Streamer • Indie Creator",
  // animatedText: "Building the future, one line at a time ✨",
  footerText: "Built with ❤️ by Rohan Das",
  
  // 🔗 Social Links (Add/Remove/Edit as needed)
  socialLinks: [
    {
      title: "X (Twitter)",
      url: "https://x.com/RohanDas28",
      platform: "twitter" // This determines the icon and colors
    },
    {
      title: "GitHub", 
      url: "https://github.com/RohanDas28",
      platform: "github"
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/rohandasrd", 
      platform: "instagram"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/rohandas28",
      platform: "linkedin"
    },
    {
      title: "Telegram",
      url: "https://t.me/RohanDas28",
      platform: "telegram"
    },
    {
      title: "Reddit",
      url: "https://www.reddit.com/user/RohanDas28",
      platform: "reddit"
    },
    {
      title: "Spotify",
      url: "https://open.spotify.com/artist/3kBygLthhdEVZ45drihYha",
      platform: "spotify"
    },
    {
      title: "Portfolio",
      url: "https://rohandas28.github.io/",
      platform: "portfolio"
    }
  ],
  
  // ⭐ Featured Projects
  featuredProjects: [
    {
      title: "ProductiHub",
      url: "https://productihub.vercel.app/",
      platform: "featured"
    },
    {
      title: "TyperOp", 
      url: "https://github.com/RohanDas28/TyperOp",
      platform: "github"
    }
  ],
  
  // 🎨 Customization Options
  theme: {
    splineBackgroundUrl: "https://my.spline.design/untitled-68c68b98f23cdb5ded4ba5ad53e7a0d5/",
    featuredSectionTitle: "🌟 Check These Out",
    featuredSectionSubtitle: "Featured projects and creations",
    ctaText: "Let's Collaborate!",
    ctaUrl: "https://t.me/RohanDas28"
  }
};

// 🎨 Platform-specific styling (colors and icons)
export const platformStyles = {
  twitter: {
    gradient: "rgba(29, 161, 242, 0.15), rgba(29, 161, 242, 0.08)",
    icon: "twitter"
  },
  github: {
    gradient: "rgba(51, 51, 51, 0.15), rgba(51, 51, 51, 0.08)", 
    icon: "github"
  },
  instagram: {
    gradient: "rgba(225, 48, 108, 0.15), rgba(225, 48, 108, 0.08)",
    icon: "instagram"
  },
  linkedin: {
    gradient: "rgba(0, 119, 181, 0.15), rgba(0, 119, 181, 0.08)",
    icon: "linkedin"
  },
  telegram: {
    gradient: "rgba(0, 136, 204, 0.15), rgba(0, 136, 204, 0.08)",
    icon: "message-circle"
  },
  reddit: {
    gradient: "rgba(255, 69, 0, 0.15), rgba(255, 69, 0, 0.08)",
    icon: "reddit"
  },
  spotify: {
    gradient: "rgba(30, 215, 96, 0.15), rgba(30, 215, 96, 0.08)",
    icon: "music"
  },
  portfolio: {
    gradient: "rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.08)",
    icon: "globe"
  },
  featured: {
    gradient: "rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15)",
    icon: "star"
  }
};
