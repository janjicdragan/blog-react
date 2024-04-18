import { describe, vi, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  it('should display the not found message and a link to the home page', () => {
    render(
      <Router>
        <NotFound helloMessage="Hello" />
      </Router>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Opps! Page not found')).toBeInTheDocument();
    expect(screen.getByText('Navigate to home page')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('should log the correct hello message on render', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(
      <Router>
        <NotFound helloMessage="Hello" />
      </Router>,
    );

    expect(consoleSpy).toHaveBeenCalledWith('Hello NotFound');
    consoleSpy.mockRestore();
  });
});
