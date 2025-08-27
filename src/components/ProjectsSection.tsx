import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Description } from '@radix-ui/react-toast';

const ProjectsSection = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "NFC Data Science Portal",
      description: "A web-based platform developed for NFC students to access datasets, explore visualizations, and enhance their data science learning through interactive tools and resources.",
      technologies: ["React", "Python", "Node.js", "Firebase", "FireStorage"],
      demo: "https://nfcdatascience.netlify.app/",
      github: "https://github.com/waseemali2826/nfc-data-science-portal",
      image: "nfc-data-portal.webp"
    },
    {
      title: "Tool Website Pro",
      description: "A versatile online platform offering text and utility tools such as formatting, conversions, text analysis, and productivity features to simplify everyday tasks for students and professionals.",
      technologies: ["React", "Python", "Node.js"],
      demo: "https://textcraftpro.netlify.app/",
      github: "https://github.com/waseemali2826/nfc-data-science-portal",
      image: "tool.webp"
    },
    {
      title: "Text to Speech",
      description: "Advanced text-to-speech conversion application with multiple voice options and customizable speech parameters for accessibility.",
      technologies: ["Python", "AI", "Speech Synthesis", "API", "NLP"],
      demo: "https://text-tspeech.netlify.app/",
      github: "https://github.com/waseemali2826",
      image: "Text to speech.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Background Remover",
      description: "AI-powered background removal tool using machine learning algorithms for precise image segmentation and editing.",
      technologies: ["Python", "AI", "Image Processing", "ML", "OpenCV"],
      demo: "https://imagebgr.netlify.app/", // or null
      github: "https://github.com/waseemali2826",
      image: "BGR.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Coffee Shop Website",
      description: "Modern coffee shop website with interactive menu, online ordering system, and seamless user experience across all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive"],
      demo: "https://freshcoffeewebsite.netlify.app/",
      github: "https://github.com/waseemali2826",
      image: "coffee.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Flappy Bird Game",
      description: "Classic Flappy Bird game recreation with smooth animations, scoring system, and responsive controls.",
      technologies: ["JavaScript", "HTML5 Canvas", "Game Dev", "CSS3", "Animation"],
      demo: "https://flappy-gamerainbow.netlify.app/",
      github: "https://github.com/waseemali2826",
      image: "Flappy.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "T-Shirt Store",
      Description: "Stylish & Responsive T-Shirt Store – Built with HTML & CSS for a seamless shopping experience on all devices.",
      technologies: ["HTML", "Bootstrap", "CSS", "responsive"],
      demo: "https://wshirt-store.netlify.app/", // no demo yet
      github: "https://github.com/waseemali2826",
      image: "tshirt.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "skyzenic-live",
      description: "Real-time weather application with forecasting, location-based updates, and interactive weather maps.",
      technologies: ["JavaScript", "API", "React", "Weather", "Geolocation"],
      demo: "https://skyzenic-live.netlify.app/", // no demo yet
      github: "https://github.com/waseemali2826",
      image: "skyzenic-live.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Car Dashboard Data Visualization",
      description: "Interactive dashboard for car performance data with real-time analytics and beautiful visualizations.",
      technologies: ["Python", "Data Viz", "Dashboard", "Analytics", "Charts"],
      demo: "https://cardashboard-dykfcdryenuxtgh8sudun2.streamlit.app/", // no demo yet
      github: "https://github.com/waseemali2826",
      image: "streamlit.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Chair Web Project",
      description: "E-commerce website for furniture with 3D product views, shopping cart, and modern design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce", "3D"],
      demo: "https://chair-web.netlify.app/",
      github: "https://github.com/waseemali2826",
      image: "chair.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Coffee Bean Project",
      description: "Coffee e-commerce website with product catalog, shopping cart, and smooth design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce", "Coffee"],
      demo: "https://cold-coffee-bean.netlify.app/",
      github: "https://github.com/waseemali2826",
      image: "coffee-bean.webp?auto=format&fit=crop&w=400&q=80"
    }

  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-emerald-500 animate-fade-in">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-3d border-emerald-500/20 hover:shadow-2xl transition-all duration-500 overflow-hidden ${theme === 'dark'
                ? 'bg-gray-900/50 hover:bg-gray-800/50'
                : 'bg-white/50 hover:bg-white/80'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <Badge variant="outline" className="bg-emerald-500/20 border-emerald-500 text-emerald-400 text-xs">
                    {project.technologies[0]}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2 px-3 sm:px-4 lg:px-6">
                <CardTitle className="text-emerald-400 text-base sm:text-lg">{project.title}</CardTitle>
                <CardDescription className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 lg:px-6 pb-4">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(1).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* ✅ Working Demo Button */}
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 flex-1 btn-3d text-xs sm:text-sm"
                    onClick={() => {
                      if (project.demo) {
                        window.open(project.demo, "_blank");
                      } else {
                        alert("Demo link not available.");
                      }
                    }}
                  >
                    <ExternalLink size={14} className="mr-1 sm:mr-2" />
                    Demo
                  </Button>

                  {/* GitHub Button */}
                  <Button
                    onClick={() => window.open(project.github, "_blank")}
                    size="sm"
                    variant="outline"
                    className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white flex-1 btn-3d text-xs sm:text-sm"
                  >
                    <Github size={14} className="mr-1 sm:mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
