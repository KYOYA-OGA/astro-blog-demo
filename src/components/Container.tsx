import React from 'react';

export default function Container({ children }: React.ReactNode) {
  return <div className="container max-w-6xl mx-auto px-5">{children}</div>;
}
