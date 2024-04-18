import { usePagination } from './usePagination';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

function TestPaginationComponent({
  initialPage = 1,
  initialLimit = 10,
}: {
  initialPage?: number;
  initialLimit?: number;
}) {
  const { currentPage, pageLimit, setPageLimit, nextPage, previousPage } =
    usePagination(initialPage, initialLimit);

  return (
    <div>
      <div data-testid="currentPage">{currentPage}</div>
      <div data-testid="pageLimit">{pageLimit}</div>
      <button onClick={nextPage}>Next</button>
      <button onClick={previousPage}>Previous</button>
      <button onClick={() => setPageLimit(20)}>Set Page Limit 20</button>
    </div>
  );
}

describe('usePagination Hook', () => {
  it('initializes with default values', () => {
    render(<TestPaginationComponent />);
    expect(screen.getByTestId('currentPage').textContent).toBe('1');
    expect(screen.getByTestId('pageLimit').textContent).toBe('10');
  });

  it('changes page correctly on button click', () => {
    render(<TestPaginationComponent />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByTestId('currentPage').textContent).toBe('2');
    fireEvent.click(screen.getByText('Previous'));
    expect(screen.getByTestId('currentPage').textContent).toBe('1');
  });

  it('updates the page limit', () => {
    render(<TestPaginationComponent />);
    fireEvent.click(screen.getByText('Set Page Limit 20'));
    expect(screen.getByTestId('pageLimit').textContent).toBe('20');
  });
});
