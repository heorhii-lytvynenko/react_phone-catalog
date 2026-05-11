import type { ComponentProps, FC, ReactNode } from 'react';
import { Section } from '@/atoms';
import { cn } from '@/utils/cn';
import s from './Catalog.module.scss';
import List from './ui/List';
import Count from './ui/Count';
import Filter from './ui/Filters';

type CatalogProps = Omit<ComponentProps<typeof Section>, 'children'> & {
  title: ReactNode;
  children?: ReactNode;
};

type CatalogComponent = FC<CatalogProps> & {
  List: typeof List;
  Filter: typeof Filter;
  Count: typeof Count;
};

const CatalogBase: FC<CatalogProps> = ({
  title,
  children,
  className = '',
  ...props
}) => {
  return (
    <Section className={cn(s.catalog, className)} {...props}>
      <Section.Title>{title}</Section.Title>
      {children}
    </Section>
  );
};

export const Catalog = Object.assign(CatalogBase, {
  List,
  Filter,
  Count,
}) as CatalogComponent;

export default Catalog;
