import { HTMLAttributes, ReactNode } from 'react';

export type FilterProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};
