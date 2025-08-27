
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 sm:py-10 lg:py-12 border-t border-emerald-500/20 relative z-10 ${theme === 'dark' ? 'bg-gradient-to-r from-black/80 to-gray-900/80' : 'bg-gradient-to-r from-white/80 to-gray-100/80'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <div className="sm:col-span-2 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-500 mb-3 sm:mb-4 animate-pulse">Waseem Ali</h3>
            <p className={`mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
              Passionate about AI, Machine Learning, and Data Science. Building the future through intelligent systems and innovative solutions.
            </p>
            <div className="flex space-x-2 sm:space-x-4">
              <Button 
                onClick={() => window.open('https://github.com/waseemali2826', '_blank')}
                size="sm" 
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transform hover:scale-105 transition-all duration-300 p-2"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/waseem-ali-2082002a6/', '_blank')}
                size="sm" 
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transform hover:scale-105 transition-all duration-300 p-2"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button 
                onClick={() => window.open('https://www.instagram.com/waseemali3145?igsh=YzljYTk1ODg3Zg==', '_blank')}
                size="sm" 
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transform hover:scale-105 transition-all duration-300 p-2"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-left">
            <h4 className="text-base sm:text-lg font-semibold text-emerald-400 mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              {['About', 'Projects', 'Services', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className={`block text-xs sm:text-sm transition-all duration-300 hover:text-emerald-500 hover:translate-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div className="animate-slide-in-right">
            <h4 className="text-base sm:text-lg font-semibold text-emerald-400 mb-3 sm:mb-4">Specializations</h4>
            <div className="space-y-1 sm:space-y-2">
              {['Machine Learning', 'Data Science', 'Python Development', 'AI Development'].map((spec) => (
                <div key={spec} className={`text-xs sm:text-sm hover:text-emerald-500 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`pt-6 lg:pt-8 border-t border-emerald-500/20 text-center animate-fade-in ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
          <p className="text-xs sm:text-sm">
            © 2024 <span className="text-emerald-500 font-semibold">Waseem Ali</span>. All rights reserved. 
            <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}> | </span>
            Built with <span className="text-emerald-500">React</span> & <span className="text-emerald-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;