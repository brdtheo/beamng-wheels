import Image from 'next/image';
import React from 'react';

import Chip from '@/components/Chip';

import { Wheel } from '@/libs/wheel/types';

type Props = Omit<Wheel, 'id'>;

const WheelCard: React.FC<Props> = ({
  brand,
  is_five_lug,
  is_four_lug,
  is_six_lug,
  is_weathered,
  name,
  preview_url,
}) => {
  const wheelName = `${name}${is_weathered ? ` (weathered)` : ''}`;

  return (
    <article className="select-none">
      <div className="flex overflow-hidden border-bng-theme-hr border rounded min-w-[300px] shadow-sm">
        <Image
          priority
          className="rounded-l pr-2"
          src={preview_url}
          width={150}
          height={150}
          alt={`Picture of the wheel ${brand} ${name}`}
        />

        <div className="py-2 pr-2 flex-1 flex flex-col">
          <div className="flex-1 flex flex-col gap-2">
            <span className="leading-none text-sm uppercase font-semibold text-bng-theme-dim-text">
              {brand}
            </span>
            <h5 className="text-xl font-semibold text-bng-theme-text">
              {wheelName}
            </h5>
          </div>

          <div className="h-fit">
            <hr className="mb-1" />
            {is_four_lug && <Chip label="4 lug" />}
            {is_five_lug && <Chip label="5 lug" />}
            {is_six_lug && <Chip label="6 lug" />}
          </div>
        </div>
      </div>
    </article>
  );
};

export default React.memo(WheelCard);
