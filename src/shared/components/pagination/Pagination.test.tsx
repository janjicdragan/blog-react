import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('renders both buttons', () => {
    render(
      <Pagination
        prevBtnHandler={() => {}}
        nextBtnHandler={() => {}}
        isPrevBtnDisabled={false}
        isNextBtnDisabled={false}
        helloMessage="Hello"
      />,
    );
    const prevButton = screen.getByRole('button', { name: 'Previous' });
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('disables buttons correctly', () => {
    render(
      <Pagination
        prevBtnHandler={() => {}}
        nextBtnHandler={() => {}}
        isPrevBtnDisabled={true}
        isNextBtnDisabled={true}
        helloMessage="Hello"
      />,
    );
    const prevButton = screen.getByRole('button', { name: 'Previous' });
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('calls the prevBtnHandler when Previous is clicked', () => {
    const prevBtnHandler = vi.fn();
    render(
      <Pagination
        prevBtnHandler={prevBtnHandler}
        nextBtnHandler={() => {}}
        isPrevBtnDisabled={false}
        isNextBtnDisabled={true}
        helloMessage="Hello"
      />,
    );
    const prevButton = screen.getByRole('button', { name: 'Previous' });
    fireEvent.click(prevButton);
    expect(prevBtnHandler).toHaveBeenCalled();
  });

  it('calls the nextBtnHandler when Next is clicked', () => {
    const nextBtnHandler = vi.fn();
    render(
      <Pagination
        prevBtnHandler={() => {}}
        nextBtnHandler={nextBtnHandler}
        isPrevBtnDisabled={true}
        isNextBtnDisabled={false}
        helloMessage="Hello"
      />,
    );
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    expect(nextBtnHandler).toHaveBeenCalled();
  });

  it('logs the correct hello message on render', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(
      <Pagination
        prevBtnHandler={() => {}}
        nextBtnHandler={() => {}}
        isPrevBtnDisabled={false}
        isNextBtnDisabled={false}
        helloMessage="Hello"
      />,
    );
    expect(consoleSpy).toHaveBeenCalledWith('Hello Pagination');
    consoleSpy.mockRestore();
  });
});
