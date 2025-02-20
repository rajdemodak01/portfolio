import React from 'react';

interface SkillBarProps {
  skillName: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skillName, percentage }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl mb-2">{skillName}</h3>
      <div className="relative pt-1">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
        <div className="flex mb-2 bg-gray-300 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full" 
            style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
