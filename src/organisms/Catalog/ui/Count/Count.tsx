import { cn } from '@/utils/cn';
import s from './Count.module.scss';

type Props<T> = {
  list: readonly T[];
  className?: string;
  singularLabel?: string;
  pluralLabel?: string;
};

const Count = <T,>({
  list,
  className = '',
  singularLabel = 'model',
  pluralLabel = 'models',
}: Props<T>) => {
  const label = list.length === 1 ? singularLabel : pluralLabel;

  return <p className={cn(s.count, className)}>{`${list.length} ${label}`}</p>;
};

export default Count;
