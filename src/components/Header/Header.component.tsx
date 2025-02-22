import Link from 'next/link';

import ContentWrapper from '@/components/ContentWrapper';

const Header: React.FC = () => {
  return (
    <header className=" bg-white fixed top-0 left-0 w-full z-10">
      <ContentWrapper className="h-12 flex items-center justify-between">
        <h1 className="font-bold text-lg tracking-tight select-none">
          BeamNG
          <i className="text-bng-theme-scroll font-black tracking-tighter">
            .wheels
          </i>
        </h1>
      </ContentWrapper>
      <div className="border-t border-t-bng-theme-hr bg-yellow-200 py-1">
        <ContentWrapper className="">
          <p className="text-sm break-words">
            This project is now deprecated and will be closed on March 2, 2025.
            A new, improved version of this website will be released on
            <Link
              target="_blank"
              className="underline pl-1"
              href="https://quarryside-auto.com"
            >
              https://quarryside-auto.com
            </Link>
            .
          </p>
        </ContentWrapper>
      </div>
    </header>
  );
};

export default Header;
