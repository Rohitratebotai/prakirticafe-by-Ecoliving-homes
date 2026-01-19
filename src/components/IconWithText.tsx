import React from 'react';

type IconWithTextProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const IconWithText: React.FC<IconWithTextProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-2 text-4xl">{icon}</div>
    <div className="font-bold text-lg mb-1">{title}</div>
    <div className="text-gray-600 text-sm">{description}</div>
  </div>
);

export default IconWithText;
