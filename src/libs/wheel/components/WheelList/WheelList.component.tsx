import React from 'react';

import { PageInfo } from '@/api/types';

import WheelCard from '@/libs/wheel/components/WheelCard';
import { Wheel } from '@/libs/wheel/types';

import WheelCardSkeleton from '../WheelCard/WheelCardSkeleton.component';

type Props = {
  wheelList: Wheel[];
  isLoading: boolean;
  isError: boolean;
};

const WheelList: React.FC<Props> = ({ wheelList, isLoading, isError }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[...Array(30).keys()].map((index) => (
          <WheelCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500">failed to load</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {wheelList.map((wheel) => (
        <WheelCard
          key={wheel.id}
          brand={wheel.brand}
          created_at={wheel.created_at}
          is_five_lug={wheel.is_five_lug}
          is_four_lug={wheel.is_four_lug}
          is_six_lug={wheel.is_six_lug}
          is_weathered={wheel.is_weathered}
          name={wheel.name}
          preview_url={wheel.preview_url}
        />
      ))}
    </div>
  );
};

export default React.memo(WheelList);
