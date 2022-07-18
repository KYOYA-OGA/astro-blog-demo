import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PostGrid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-8 lg:gap-10 mb-32">
      {children}
    </div>
  );
};

export default PostGrid;
