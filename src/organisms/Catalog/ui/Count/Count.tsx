import { cn } from '@/utils/cn';
import s from './Count.module.scss';
import { Good } from '@/types';

type Props = {
  list: readonly Good[];
  className?: string;
  singularLabel?: string;
  pluralLabel?: string;
};

const Count = ({
  list,
  className = '',
  singularLabel = 'model',
  pluralLabel = 'models',
}: Props) => {
  const label = list.length === 1 ? singularLabel : pluralLabel;

  return <p className={cn(s.count, className)}>{`${list.length} ${label}`}</p>;
};

export default Count;
