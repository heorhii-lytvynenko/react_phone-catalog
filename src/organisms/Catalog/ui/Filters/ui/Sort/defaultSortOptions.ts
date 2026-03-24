import { Good } from '@/types';
import { SortOption } from './types';

export const defaultSortOptions: SortOption<Good>[] = [
  {
    label: 'Price: low to high',
    value: 'price-asc',
    compare: (a, b) => a.priceRegular - b.priceRegular,
  },
  {
    label: 'Price: high to low',
    value: 'price-desc',
    compare: (a, b) => b.priceRegular - a.priceRegular,
  },
  {
    label: 'Name: A-Z',
    value: 'name-asc',
    compare: (a, b) => a.name.localeCompare(b.name),
  },
  {
    label: 'Name: Z-A',
    value: 'name-desc',
    compare: (a, b) => b.name.localeCompare(a.name),
  },
];
