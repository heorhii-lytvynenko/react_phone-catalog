import { ItemCard } from '@/atoms';
import type { Good } from '@/types';
import { cn } from '@/utils/cn';
import type { Key, ReactNode } from 'react';
import s from './LongList.module.scss';

type Props<T extends Good> = {
  items: readonly T[];
  itemsOnPage?: number;
  page?: number;
  className?: string;
  discount?: boolean;
  emptyState?: ReactNode;
  renderItem?: (item: T, index: number) => ReactNode;
  getItemKey?: (item: T, index: number) => Key;
};

const List = <T extends Good>({
  items,
  itemsOnPage = 16,
  page = 1,
  className = '',
  discount = false,
  emptyState = null,
  renderItem,
  getItemKey,
}: Props<T>) => {
  const normalizedItemsOnPage = Math.max(1, Math.floor(itemsOnPage));
  const startIndex = (page - 1) * normalizedItemsOnPage;
  const visibleItems = items.slice(
    startIndex,
    startIndex + normalizedItemsOnPage,
  );

  if (visibleItems.length === 0) {
    return emptyState ? (
      <div className={cn(s.empty, className)}>{emptyState}</div>
    ) : null;
  }

  return (
    <div className={cn(s.list, className)}>
      {visibleItems.map((item, index) => {
        const itemIndex = startIndex + index;

        const key =
          getItemKey?.(item, itemIndex) ?? `${item.namespaceId}-${itemIndex}`;

        const content = renderItem?.(item, itemIndex) ?? (
          <ItemCard item={item} discount={discount} />
        );

        return (
          <div className={s.list__item} key={key}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default List;
