import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput Component', () => {
  it('should display the placeholder correctly', () => {
    const mockOnInputChange = vi.fn();
    const mockOnClearBtnClick = vi.fn();
    render(
      <TextInput
        onInputChange={mockOnInputChange}
        onClearBtnClick={mockOnClearBtnClick}
        placeholder="Enter text"
        helloMessage="Hello"
      />,
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('should call onInputChange with the correct value when typed into', () => {
    const mockOnInputChange = vi.fn();
    const mockOnClearBtnClick = vi.fn();
    render(
      <TextInput
        onInputChange={mockOnInputChange}
        onClearBtnClick={mockOnClearBtnClick}
        helloMessage="Hello"
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnInputChange).toHaveBeenCalledWith('test');
  });

  it('should clear the input when the clear button is clicked', () => {
    const mockOnInputChange = vi.fn();
    const mockOnClearBtnClick = vi.fn();
    render(
      <TextInput
        onInputChange={mockOnInputChange}
        onClearBtnClick={mockOnClearBtnClick}
        helloMessage="Hello"
      />,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Clear' });

    // Type into the input
    fireEvent.change(input, { target: { value: 'test' } });
    // Click the clear button
    fireEvent.click(button);

    expect(input).toHaveValue('');
    expect(mockOnClearBtnClick).toHaveBeenCalled();
  });
});
