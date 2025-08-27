
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Instagram, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className={`py-12 sm:py-16 lg:py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'} relative z-10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-emerald-500 animate-fade-in">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-emerald-400">Let's Connect</h3>
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-emerald-600 p-4 sm:p-5 rounded-full group-hover:bg-emerald-500 transition-all duration-300 transform group-hover:scale-110">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Email</p>
                  <p className={`text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} break-all`}>waseem38650@gmail.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-emerald-600 p-4 sm:p-5 rounded-full group-hover:bg-emerald-500 transition-all duration-300 transform group-hover:scale-110">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Phone</p>
                  <p className={`text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>03100071886</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group sm:col-span-2 lg:col-span-1">
                <div className="bg-emerald-600 p-4 sm:p-5 rounded-full group-hover:bg-emerald-500 transition-all duration-300 transform group-hover:scale-110">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-center">
                  <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Location</p>
                  <p className={`text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/waseem-ali-2082002a6/', '_blank')}
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700 btn-3d flex-shrink-0 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                LinkedIn
              </Button>
              <Button 
                onClick={() => window.open('https://github.com/waseemali2826', '_blank')}
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700 btn-3d flex-shrink-0 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                GitHub
              </Button>
              <Button 
                onClick={() => window.open('https://www.instagram.com/waseemali3145?igsh=YzljYTk1ODg3Zg==', '_blank')}
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700 btn-3d flex-shrink-0 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Instagram
              </Button>
            </div>

            {/* Call to Action */}
            <div className={`mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 lg:p-8 rounded-xl border border-emerald-500/20 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white/70'}`}>
              <p className={`text-base sm:text-lg lg:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                Ready to work together? Let's discuss your next project and bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;