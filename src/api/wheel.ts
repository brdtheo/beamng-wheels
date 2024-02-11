'use client';

import { gql, request } from 'graphql-request';
import { useCallback, useState } from 'react';
import useSWR from 'swr';

import { API_KEY, API_URL, DEFAULT_PAGE_SIZE } from '@/api/constants';

import { Wheel, WheelListFilterParams } from '@/libs/wheel/types';

import { BaseApiResponse, PaginatedData } from './types';
import { buildQueryFilters, getCleanGraphQLResponse } from './utils';

export const wheelFetcher = async (params: WheelListFilterParams) => {
  const queryFilters = buildQueryFilters(params);

  const document = gql`
    query getWheelList($startCursor: String) {
      wheelCollection${queryFilters} {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          node {
            brand
            id
            is_five_lug
            is_four_lug
            is_six_lug
            is_weathered
            name
            preview_url
          }
        }
      }
    }
  `;

  const response = await request<BaseApiResponse<Wheel>>(
    API_URL,
    document,
    {},
    {
      Authorization: `Bearer ${API_KEY}`,
      apikey: API_KEY,
    },
  );

  const wheelList = getCleanGraphQLResponse<Wheel>(response);

  return wheelList;
};

export const useWheelList = () => {
  const [page, setPage] = useState(1);
  const [requestParams, setRequestParams] = useState<{
    startCursor?: string;
    endCursor?: string;
  }>({});

  const handleSetPage = useCallback(
    (params: { startCursor?: string; endCursor?: string }) => {
      if (params.startCursor) {
        setRequestParams(params);
        setPage((state) => state + 1);
      }
      if (params.endCursor) {
        setRequestParams(params);
        setPage((state) => state - 1);
      }
    },
    [],
  );

  const { data, error, isLoading } = useSWR<PaginatedData<Wheel>, string>(
    {
      ...requestParams,
      page_size: DEFAULT_PAGE_SIZE,
    },
    wheelFetcher,
  );
  return {
    isError: !!error,
    isLoading,
    response: data,
    page,
    handleSetPage,
  };
};
