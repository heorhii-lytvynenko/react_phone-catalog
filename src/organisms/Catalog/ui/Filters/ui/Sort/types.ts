import { Good } from '@/types';
import { Dispatch, SetStateAction } from 'react';

export type SortOption<T> = {
  label: string;
  value: string;
  compare: (a: T, b: T) => number;
};

export type SortProps<T extends Good> = {
  items: T[];
  setItems: Dispatch<SetStateAction<T[]>>;
  options?: SortOption<T>[];
};
