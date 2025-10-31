
import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  skillName: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skillName, percentage, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-4 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{skillName}</span>
        <span className="text-sm text-green-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
