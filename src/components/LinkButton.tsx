import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const LinkButton: React.FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={`block text-center bg-blue-500 text-white py-2 px-5 rounded-lg  transition hover:brightness-110 focus:brightness-110 ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
