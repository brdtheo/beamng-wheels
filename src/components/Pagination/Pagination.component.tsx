import clsx from 'clsx';
import { memo, useEffect, useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';

import { DEFAULT_PAGE_SIZE } from '@/api/constants';

type Props = {
  className?: string;
  totalCount: number;
  page: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

const Pagination: React.FC<Props> = ({
  className,
  totalCount,
  page,
  hasNextPage,
  hasPreviousPage,
  handleNextPage,
  handlePreviousPage,
}) => {
  const [totalItemCount, setTotalItemCount] = useState(0);

  useEffect(() => {
    if (totalCount !== totalItemCount && !totalItemCount) {
      setTotalItemCount(totalCount);
    }
  }, [totalCount, totalItemCount]);

  const startItemCount = hasPreviousPage ? (page - 1) * DEFAULT_PAGE_SIZE : 1;

  const endItemCount = hasNextPage ? page * DEFAULT_PAGE_SIZE : totalItemCount;

  return (
    <div
      className={clsx(
        className,
        'flex items-center gap-2 select-none justify-center py-3',
      )}
    >
      <button
        disabled={!hasPreviousPage}
        type="button"
        onClick={handlePreviousPage}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full hover:enabled:bg-bng-theme-input-hover disabled:opacity-40"
      >
        <GoChevronLeft />
      </button>

      <span className="text-sm inline-flex">
        {startItemCount} - {endItemCount} / {totalItemCount}
      </span>

      <button
        disabled={!hasNextPage}
        type="button"
        onClick={handleNextPage}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full hover:enabled:bg-bng-theme-input-hover disabled:opacity-40"
      >
        <GoChevronRight />
      </button>
    </div>
  );
};

export default memo(Pagination);
