import clsx from 'clsx';
import { memo } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const ContentWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx('px-6 max-w-[980px] mx-auto', className)}>
      {children}
    </div>
  );
};

export default memo(ContentWrapper);
