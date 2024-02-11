export type GraphNode<T> = {
  node: T;
};

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
};

export type BaseApiResponse<T> = {
  [key: string]: {
    edges: GraphNode<T>[];
    totalCount: number;
    pageInfo: PageInfo;
  };
};

export type PaginatedData<T> = {
  pageInfo: PageInfo;
  totalCount: number;
  items: T[];
};
