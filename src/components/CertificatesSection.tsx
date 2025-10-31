import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { CometCard } from "@/components/ui/comet-card";

interface CertificatesSectionProps {
  openCertificateModal: (certificate: any) => void;
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ openCertificateModal }) => {
  const { theme } = useTheme();

  const certificates = [
    {
      title: "Human Resource Management",
      description: "Certification in HR fundamentals, recruitment lifecycle, employee onboarding, performance evaluation, and workplace compliance practices.",
      image: "HR.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Digital Marketing Specialist",
      description: "Comprehensive certification covering SEO, social media marketing, PPC campaigns, content strategy, analytics, and online brand growth.",
      image: "DM.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Course Completion Certificate",
      description: "Official certificate awarded upon successful completion of a structured professional training and assessment program.",
      image: "Gao-completion.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Master ChatGPT",
      description: "Advanced certification in ChatGPT usage, prompt engineering, and AI integration for various applications and business solutions.",
      image: "gpt.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Basic Python Certificate",
      description: "Fundamental Python programming certification covering syntax, data structures, and basic programming concepts.",
      image: "python.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Digital Marketing Certificate",
      description: "Comprehensive digital marketing certification including SEO, social media marketing, and online advertising strategies.",
      image: "marketing.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Fortune Certificate",
      description: "Professional business and entrepreneurship certification focusing on strategic planning and business development.",
      image: "fortune.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Mastering Microsoft PowerBI Certificate",
      description: "Advanced PowerBI certification for data visualization, business intelligence, and interactive dashboard creation.",
      image: "power.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "MEAL Essentials Certificate",
      description: "Certification covering core concepts of Monitoring, Evaluation, Accountability, and Learning (MEAL) practices in humanitarian and development sectors.",
      image: "Meal Essential.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Create Your Own ChatGPT with PDF",
      description: "Specialized certification in creating custom AI chatbots with PDF processing capabilities and document understanding.",
      image: "creategpt.webp?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Data Analytics Essentials",
      description: "Specialization in Data Analytics Essentials focuses on mastering core data analysis techniques, tools, and insights for informed decision-making.",
      image: "DAE.webp?auto=format&fit=crop&w=400&q=80"
    }
  ];
  return (
    <section
      id="certificates"
      className={`py-12 sm:py-16 lg:py-20 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'} relative z-10`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-emerald-500 animate-fade-in">
          Certificates & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert, index) => (
            <CometCard key={index}>
              <Card
                className={`text-center card-3d h-full flex flex-col justify-between border-emerald-500/20 hover:shadow-lg transition-all duration-300 cursor-pointer ${theme === 'dark'
                  ? 'bg-gradient-to-br from-emerald-600/20 to-gray-800/50'
                  : 'bg-gradient-to-br from-emerald-600/20 to-white/50'
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  height: '420px', // Increased height to accommodate full images
                  width: '100%', // Full width within the grid
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => openCertificateModal(cert)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3 sm:mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-emerald-500 mx-auto mb-3 sm:mb-4 pulse-ring" />

                  <h3 className={`font-semibold text-sm sm:text-base lg:text-lg mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    {cert.title}
                  </h3>

                  <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                    Click to view details
                  </p>
                </CardContent>
              </Card>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;