import { useState } from 'react';

type UsePagination = {
  currentPage: number;
  pageLimit: number;
  setPageLimit: React.Dispatch<React.SetStateAction<number>>;
  nextPage: () => void;
  previousPage: () => void;
};

export const usePagination = (
  initialPage: number = 1,
  initialLimit: number = 10,
): UsePagination => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageLimit, setPageLimit] = useState<number>(initialLimit);

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);
  const previousPage = () => setCurrentPage((currentPage) => currentPage - 1);

  return { currentPage, pageLimit, setPageLimit, nextPage, previousPage };
};
