import React from 'react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../contexts/ThemeContext';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-14">
        {/* Left Text Content */}
        <div className="text-center md:text-left space-y-6 animate-fade-in px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent animate-rotate animate-shake animate-pulse">
              Waseem Ali
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} animate-slide-in-left animate-bounce`}
          >
            BS Data Science Student · AI/ML Engineer · Python Developer · Robotics Enthusiast
          </p>
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-slide-in-left`}
          >
            Passionate about turning data into actionable insights, building intelligent AI solutions, and developing modern web applications. Experienced in Python, React, and machine learning projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base px-6 py-3 rounded-xl shadow-md transition duration-300 w-full sm:w-auto animate-slide-in-left animate-swing btn-grow-shadow"
            >
              View My Work
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white text-sm sm:text-base px-6 py-3 rounded-xl transition duration-300 w-full sm:w-auto animate-slide-in-left animate-swing btn-grow-shadow"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end animate-float">
          <div className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full p-2 flex items-center justify-center border-4 ${theme === 'dark' ? 'border-white' : 'border-emerald-500'} bg-transparent`}>
            <img
              src="pasport.webp"
              alt="Waseem Ali"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section >
  );
};
export default HeroSection;
