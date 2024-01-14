'use client';

import { useCallback } from 'react';

import { useWheelList } from '@/api/wheel';

import ContentWrapper from '@/components/ContentWrapper';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';

import WheelList from '@/libs/wheel/components/WheelList';

export default function Home() {
  const { response, isError, isLoading, page, handleSetPage } = useWheelList();

  const handlePreviousPage = useCallback(
    () => handleSetPage({ endCursor: response?.pageInfo?.startCursor }),
    [handleSetPage, response?.pageInfo?.startCursor],
  );

  const handleNextPage = useCallback(
    () => handleSetPage({ startCursor: response?.pageInfo?.endCursor }),
    [handleSetPage, response?.pageInfo?.endCursor],
  );

  return (
    <main>
      <Header />
      <ContentWrapper className="py-12">
        <Pagination
          totalCount={response?.totalCount ?? 0}
          page={page}
          hasNextPage={response?.pageInfo?.hasNextPage}
          hasPreviousPage={response?.pageInfo?.hasPreviousPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />

        <WheelList
          wheelList={response?.items || []}
          isLoading={isLoading}
          isError={isError}
        />

        <Pagination
          totalCount={response?.totalCount ?? 0}
          page={page}
          hasNextPage={response?.pageInfo?.hasNextPage}
          hasPreviousPage={response?.pageInfo?.hasPreviousPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </ContentWrapper>
    </main>
  );
}
