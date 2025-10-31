import React from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${theme === 'dark' ? 'bg-black/90 border-emerald-500/20' : 'bg-emerald-50/80 border-emerald-200'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-500 animate-pulse">Waseem Ali</div>
          
          {/* Theme Toggle & Navigation */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Sun className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-400'}`} />
              <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
              <Moon className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`} />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-4 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                    className={`transition-all duration-300 hover:text-emerald-500 transform hover:scale-105 text-sm xl:text-base animate-slide-in-left animate-bounce btn-animated ${
                    activeSection === item.id ? 'text-emerald-500 border-b-2 border-emerald-500' : theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transform transition-transform duration-300 hover:scale-110 p-1 ${theme === 'dark' ? 'text-emerald-500' : 'text-emerald-600'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 animate-fade-in backdrop-blur-sm rounded-lg p-4 ${theme === 'dark' ? 'bg-black/95' : 'bg-emerald-100/95'}`}>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-center py-2 px-3 rounded transition-all duration-300 hover:text-emerald-500 text-sm ${
                    activeSection === item.id ? 'text-emerald-500 bg-emerald-500/10' : theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
