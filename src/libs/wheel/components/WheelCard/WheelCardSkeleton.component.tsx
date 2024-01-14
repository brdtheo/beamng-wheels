import React from 'react';

const WheelCardSkeleton: React.FC = () => {
  return (
    <div className="flex h-36 border-bng-theme-hr border rounded min-w-[300px] shadow-sm">
      <div className="w-[150px] h-36 bg-gray-200 animate-pulse" />

      <div className="p-2 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-24 h-3.5 bg-gray-200 animate-pulse rounded" />
          <div className="w-36 h-7 bg-gray-200 animate-pulse rounded" />
        </div>

        <div className="h-fit">
          <hr className="mb-1" />
          <div className="w-9 h-3.5 bg-gray-200 animate-pulse rounded-full mr-1 inline-flex" />
          <div className="w-9 h-3.5 bg-gray-200 animate-pulse rounded-full mr-1 inline-flex" />
          <div className="w-9 h-3.5 bg-gray-200 animate-pulse rounded-full mr-1 inline-flex" />
        </div>
      </div>
    </div>
  );
};

export default WheelCardSkeleton;
