
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SkillBar from './SkillBar';
import { useTheme } from '../contexts/ThemeContext';

const SkillsSection = () => {
  const { theme } = useTheme();

  const skillCategories = {
    programming: [
      { name: "Python", percentage: 90 },
      { name: "JavaScript", percentage: 75 },
      { name: "HTML/CSS", percentage: 85 },
      { name: "C++", percentage: 60 },
      { name: "Java", percentage: 50 },
      { name: "PHP", percentage: 40 }
    ],
    dataScience: [
      { name: "Pandas", percentage: 85 },
      { name: "NumPy", percentage: 80 },
      { name: "Matplotlib", percentage: 85 },
      { name: "Data Visualization", percentage: 80 },
      { name: "Statistical Analysis", percentage: 75 }
    ],
    webDev: [
      { name: "Bootstrap", percentage: 85 },
      { name: "Responsive Design", percentage: 80 },
      { name: "Frontend Development", percentage: 85 },
      { name: "MySQL", percentage: 70 }
    ],
    aiMl: [
      { name: "Hugging Face", percentage: 75 },
      { name: "FastAPI", percentage: 80 },
      { name: "LLM Integration", percentage: 70 }
    ]
  };

  return (
    <section id="skills" className={`py-12 sm:py-16 lg:py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'} relative z-10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-emerald-500 animate-fade-in">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <Card className={`border-emerald-500/20 transition-all duration-300 card-3d ${theme === 'dark' ? 'bg-gray-900/50 hover:bg-gray-800/50' : 'bg-white/50 hover:bg-white/80'}`}>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-emerald-400 text-base sm:text-lg">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillCategories.programming.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skillName={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 100}
                />
              ))}
            </CardContent>
          </Card>

          <Card className={`border-emerald-500/20 transition-all duration-300 card-3d ${theme === 'dark' ? 'bg-gray-900/50 hover:bg-gray-800/50' : 'bg-white/50 hover:bg-white/80'}`}>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-emerald-400 text-base sm:text-lg">Data Science & Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillCategories.dataScience.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skillName={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 100}
                />
              ))}
            </CardContent>
          </Card>

          <Card className={`border-emerald-500/20 transition-all duration-300 card-3d ${theme === 'dark' ? 'bg-gray-900/50 hover:bg-gray-800/50' : 'bg-white/50 hover:bg-white/80'}`}>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-emerald-400 text-base sm:text-lg">Web Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillCategories.webDev.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skillName={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 100}
                />
              ))}
            </CardContent>
          </Card>

          <Card className={`border-emerald-500/20 transition-all duration-300 card-3d ${theme === 'dark' ? 'bg-gray-900/50 hover:bg-gray-800/50' : 'bg-white/50 hover:bg-white/80'} md:col-span-2 xl:col-span-1`}>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-emerald-400 text-base sm:text-lg">AI & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillCategories.aiMl.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  skillName={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 100}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;