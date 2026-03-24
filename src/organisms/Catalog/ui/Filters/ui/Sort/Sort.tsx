import { FilterProps, Good } from '@/types';
import { SortOption, SortProps } from './types';
import { defaultSortOptions } from './defaultSortOptions';
import { cn } from '@/utils/cn';
import s from './Sort.module.scss';

export const Sort = <T extends Good>({
  children,
  className = '',
  items,
  setItems,
  options = defaultSortOptions,
  ...props
}: FilterProps & SortProps<T>) => {
  const handleSort = (option: SortOption<T>) => {
    setItems([...items].sort(option.compare));
  };

  return (
    <div className={cn(s.sort, className)} {...props}>
      <select
        onChange={event => {
          const o = options.find(option => option.value === event.target.value);

          if (o) {
            handleSort(o);
          }
        }}
      >
        <option value="">Sort by</option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {children}
    </div>
  );
};
