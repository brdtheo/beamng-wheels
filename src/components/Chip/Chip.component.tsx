import clsx from 'clsx';
import { memo } from 'react';

type Props = {
  className?: string;
  label: string;
};

const Chip: React.FC<Props> = ({ className, label }) => {
  return (
    <span
      className={clsx(
        'rounded-full bg-bng-theme-a-hover text-white leading-none text-xs mr-1 font-medium px-1 h-3',
        className,
      )}
    >
      {label}
    </span>
  );
};

export default memo(Chip);
