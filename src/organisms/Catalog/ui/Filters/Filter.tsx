import type { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import s from './Filter.module.scss';

type FilterProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

type FilterComponent = FC<FilterProps> & {
  Sort: FC<FilterProps>;
  Items: FC<FilterProps>;
};

const Sort: FC<FilterProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={cn(s.sort, className)} {...props}>
      {children}
    </div>
  );
};

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
  Sort: Sort,
  Items: Items,
}) as FilterComponent;

export default Filter;
