import { BaseApiResponse, PaginatedData } from '@/api/types';

import { WheelListFilterParams } from '@/libs/wheel/types';

/**
 * Returns all of the parsed GraphQL params for the wheel collection
 *
 * @param params All available filters from the wheel collection
 * @returns {string}
 * @example const url = buildURLParams(`${API_URL}/wheel`, params);
 *
 * @see https://supabase.com/docs/guides/graphql/api#querytype
 */
export const buildQueryFilters = (params: WheelListFilterParams) => {
  const cursorParamKey = params.endCursor ? 'endCursor' : 'startCursor';
  const cursorPageSizeKeyword = {
    startCursor: 'first',
    endCursor: 'last',
  };

  const filters = Object.entries(params)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => {
      switch (key) {
        case 'page_size':
          return `${cursorPageSizeKeyword[cursorParamKey]}: ${value}`;
        case 'startCursor':
          return `after: "${value}"`;
        case 'endCursor':
          return `before: "${value}"`;
        default:
          return `${key}: ${JSON.stringify(value)}`;
      }
    })
    .join(', ');

  return filters ? `(${filters})` : '';
};

/**
 * Returns a GraphQL response without edges/node fields
 *
 * @param response The raw response returned by the API
 * @example
 * {
 *   transformResponse: (response: <BaseApiResponse<T>>) => getCleanGraphQLResponse(response) // T[]
 * }
 */
export function getCleanGraphQLResponse<T>(
  response?: BaseApiResponse<T>,
): PaginatedData<T> {
  const edges = Object.values(response ?? {})[0].edges ?? [];
  const parsedEdges = edges.map((object) => object.node);
  const pageInfo = Object.values(response ?? {})[0].pageInfo ?? {};
  const totalCount = Object.values(response ?? {})[0].totalCount ?? 0;
  const parsedApiResponse = {
    totalCount,
    pageInfo,
    items: parsedEdges,
  };

  return parsedApiResponse;
}
