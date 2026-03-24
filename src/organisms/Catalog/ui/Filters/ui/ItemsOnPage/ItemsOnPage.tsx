import type { Dispatch, SetStateAction } from 'react';

type ItemsOnPageProps = {
  itemsOnPage: number;
  setItemsOnPage: Dispatch<SetStateAction<number>>;
  options?: number[];
};

const ItemsOnPage = ({
  itemsOnPage,
  setItemsOnPage,
  options = [16, 32, 64],
}: ItemsOnPageProps) => {
  return (
    <select
      value={itemsOnPage}
      onChange={event => {
        setItemsOnPage(Number(event.target.value));
      }}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ItemsOnPage;
