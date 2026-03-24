import type { Good } from '@/types';
import type { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  itemsOnPage: number;
  items: readonly Good[];
};

const Pagination = ({ page, setPage, itemsOnPage, items }: PaginationProps) => {
  const totalPages = Math.ceil(items.length / itemsOnPage);

  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    setPage(currentPage => Math.max(1, currentPage - 1));
  };

  const handleNext = () => {
    setPage(currentPage => Math.min(totalPages, currentPage + 1));
  };

  return (
    <nav>
      <button type="button" disabled={page === 1} onClick={handlePrevious}>
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;

        return (
          <button
            key={pageNumber}
            type="button"
            disabled={page === pageNumber}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button type="button" disabled={page === totalPages} onClick={handleNext}>
        Next
      </button>
    </nav>
  );
};

export default Pagination;
