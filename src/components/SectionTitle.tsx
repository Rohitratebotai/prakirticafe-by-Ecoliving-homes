import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => (
  <h2 className={`text-2xl md:text-3xl font-medium pb-14 text-center ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
