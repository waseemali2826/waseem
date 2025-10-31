
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, BarChart3, Cpu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ServicesSection = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "AI & Machine Learning",
      description: "Custom ML models, neural networks, and AI-powered solutions for business automation.",
      image: "ML.webp?auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites using latest technologies and best practices for optimal performance.",
      image: "web.webp?auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Python Development",
      description: "Backend development, APIs, data processing, and automation solutions using Python ecosystem.",
      image: "python_img.webp?auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Data Visualization",
      description: "Interactive dashboards and insightful data visualizations for business intelligence and analytics.",
      image: "DV.webp?auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Data Science ",
      description: "End-to-end data science solutions from data collection to model deployment and insights.",
      image: "DS.webp?auto=format&fit=crop&w=300&q=80"
    },
    {
  icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
  title: "Database Management",
  description: "Efficient database design, optimization, and management ensuring secure and scalable data storage.",
  image: "database.webp?auto=format&fit=crop&w=300&q=80"
}
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-emerald-500 animate-fade-in">Services I Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group card-3d border-emerald-500/20 hover:shadow-xl transition-all duration-500 overflow-hidden ${theme === 'dark' ? 'bg-gray-900/50 hover:bg-gray-800/50' : 'bg-white/50 hover:bg-white/80'}`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative h-32 sm:h-36 lg:h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-emerald-500 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-4 sm:p-5 lg:p-6">
                <h3 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;