import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, BarChart3 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const WhatIDoSection = () => {
  const { theme } = useTheme();

  const whatIDoServices = [
    {
      icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems using deep learning, neural networks, and advanced ML algorithms for predictive analytics and automation.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80",
      animationClass: "animate-infinite-scroll",
    },
    {
      icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Python Development",
      description: "Building robust backend applications, APIs, automation tools, and machine learning models using Python's powerful ecosystem.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      animationClass: "animate-infinite-scroll",
    },
    {
      icon: <Database className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Web Development",
      description: "Creating responsive, modern websites and web applications with clean code and user-friendly interfaces using latest technologies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      animationClass: "animate-infinite-scroll",
    },
    {
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Data Visualization",
      description: "Transforming complex data into interactive dashboards and insightful visualizations that drive decision-making and business intelligence.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      animationClass: "animate-infinite-scroll",
    },
  ];

  return (
    <section id="whatido" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-emerald-500 animate-fade-in">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {whatIDoServices.map((service, index) => (
            <Card
              key={index}
              className={`group card-3d border-emerald-500/20 hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gray-900/50 hover:bg-gray-800/50'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`relative h-36 sm:h-40 lg:h-48 overflow-hidden ${service.animationClass}`}
                onMouseEnter={(e) => e.currentTarget.classList.remove("animate-infinite-scroll")}
                onMouseLeave={(e) => e.currentTarget.classList.add("animate-infinite-scroll")}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-emerald-500 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <CardHeader className="pb-2 px-3 sm:px-4 lg:px-6">
                <CardTitle className="text-emerald-400 group-hover:text-emerald-500 transition-colors duration-300 text-base sm:text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-3 sm:px-4 lg:px-6 pb-4">
                <p
                  className={`leading-relaxed text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                  }`}
                >
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;