import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorComponent from './ErrorComponent';

describe('ErrorComponent', () => {
  it('renders the component with provided render function', () => {
    const mockRender = vi.fn(() => <div>Test Content</div>);
    render(<ErrorComponent helloMessage="Hello" render={mockRender} />);

    const outputElement = screen.getByText('Test Content');
    expect(outputElement).toBeInTheDocument();
    expect(mockRender).toHaveBeenCalled();
  });

  it('logs the correct hello message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const mockRender = () => <div />;
    render(<ErrorComponent helloMessage="Hello" render={mockRender} />);

    expect(consoleSpy).toHaveBeenCalledWith('Hello ErrorComponent');
    consoleSpy.mockRestore();
  });
});
