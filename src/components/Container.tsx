import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`container max-w-6xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
