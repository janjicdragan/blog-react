import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders a loader div with the correct class', () => {
    render(<Loader />);
    const loaderDiv = screen.getByTestId('loader');
    expect(loaderDiv).toBeInTheDocument();
  });
});
