import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PostGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-x-8 lg:gap-10 mb-10 lg:mb-32">
      {children}
    </div>
  );
}
