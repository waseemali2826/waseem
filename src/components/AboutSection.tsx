import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, GraduationCap, MapPin, Calendar, Brain } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-12 sm:py-16 lg:py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'} relative z-10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-emerald-500 animate-fade-in">About Me & My Journey</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="animate-slide-up order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" 
                alt="Waseem Ali working"
                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-wrap gap-2">
                <div className="bg-emerald-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">AI/ML</div>
                <div className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Data Science</div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-emerald-400">Education & Background</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start sm:items-center space-x-3">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-1 sm:mt-0" />
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>BS Data Science - NFC IEFR (2023-2027)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Pakistan</span>
                </div>
                <div className="flex items-start sm:items-center space-x-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-1 sm:mt-0" />
                  <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Started Coding Journey in 2022</span>
                </div>
              </div>
            </div>
            
            <div className={`p-4 sm:p-5 lg:p-6 rounded-xl border border-emerald-500/20 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/70'}`}>
              <h4 className="text-base sm:text-lg font-semibold text-emerald-400 mb-3 sm:mb-4 flex items-center animate-fade-in">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Specialization Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center space-x-2 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Machine Learning</span>
                </div>
                <div className="flex items-center space-x-2 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Data Science</span>
                </div>
                <div className="flex items-center space-x-2 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>Python Development</span>
                </div>
                <div className="flex items-center space-x-2 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>AI Development</span>
                </div>
              </div>
            </div>

            <p className={`leading-relaxed text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
              Passionate about creating intelligent systems that solve real-world problems. My journey combines 
              data science foundations with cutting-edge AI/ML technologies and development expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                onClick={() => window.open('https://github.com/waseemali2826', '_blank')}
                size="sm" 
                  className="bg-emerald-600 hover:bg-emerald-700 btn-3d text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 w-full sm:w-auto btn-grow-shadow"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                GitHub
              </Button>
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/waseem-ali-2082002a6/', '_blank')}
                size="sm" 
                  className="bg-emerald-600 hover:bg-emerald-700 btn-3d text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 w-full sm:w-auto btn-grow-shadow"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;