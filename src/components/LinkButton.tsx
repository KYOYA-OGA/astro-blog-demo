import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}

export default function LinkButton({
  children,
  href,
  className = '',
  disabled = false,
}: Props) {
  return (
    <a
      href={href}
      className={`block text-center bg-blue-500 text-white py-2 px-5 rounded-lg  transition ${
        disabled ? 'brightness-50' : 'hover:brightness-110 focus:brightness-110'
      } ${className}`}
    >
      {children}
    </a>
  );
}
