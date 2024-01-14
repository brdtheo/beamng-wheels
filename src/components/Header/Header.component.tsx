import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';

import ContentWrapper from '@/components/ContentWrapper';

const Header: React.FC = () => {
  return (
    <header className="border-b border-b-bng-theme-hr h-12">
      <ContentWrapper className="h-12 flex items-center justify-between">
        <h1 className="font-bold text-lg tracking-tight select-none">
          BeamNG
          <i className="text-bng-theme-scroll font-black tracking-tighter">
            .wheels
          </i>
        </h1>

        <Link
          href="https://github.com/brdtheo/beamng-wheels"
          className="flex items-center gap-1 text-sm font-medium text-bng-theme-text"
          target="_blank"
        >
          GitHub
          <GoLinkExternal fill="bng-theme-text" />
        </Link>
      </ContentWrapper>
    </header>
  );
};

export default Header;
