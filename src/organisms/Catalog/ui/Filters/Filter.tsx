import type { FC, ReactNode } from 'react';

import { FilterProps, Good } from '@/types';
import { cn } from '@/utils/cn';
import s from './Filter.module.scss';
import { SortProps } from './ui/Sort/types';
import { Sort } from './ui/Sort';
import ItemsOnPage from './ui/ItemsOnPage';

const Items: FC<FilterProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={cn(s.items, className)} {...props}>
      {children}
    </div>
  );
};

const Base: FC<FilterProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={cn(s.container, className)} {...props}>
      {children}
    </div>
  );
};

export const Filter = Object.assign(Base, {
  Sort,
  Items,
  ItemsOnPage,
}) as FilterComponent;

type FilterComponent = FC<FilterProps> & {
  Sort: <T extends Good>(props: FilterProps & SortProps<T>) => ReactNode;
  Items: FC<FilterProps>;
  ItemsOnPage: typeof ItemsOnPage;
};

export default Filter;
