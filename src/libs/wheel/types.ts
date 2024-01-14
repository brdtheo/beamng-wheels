import { WheelBrand } from './constants';

export type Wheel = {
  brand: `${WheelBrand}`;
  created_at: string;
  id: string;
  is_five_lug: boolean;
  is_four_lug: boolean;
  is_six_lug: boolean;
  is_weathered: boolean;
  name: string;
  preview_url: string;
};

export type WheelListFilterParams = {
  pageSize?: number;
  startCursor?: string;
  endCursor?: string;
  brand?: WheelBrand[];
  isFourLug?: boolean;
  isFiveLug?: boolean;
  isSixLug?: boolean;
};
