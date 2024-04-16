import { useState } from 'react';

export const usePagination = (initialPage = 1, initialLimit = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageLimit, setPageLimit] = useState(initialLimit);

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);
  const previousPage = () => setCurrentPage((currentPage) => currentPage - 1);

  return { currentPage, pageLimit, setPageLimit, nextPage, previousPage };
};
