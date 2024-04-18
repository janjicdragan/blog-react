import { useState } from 'react';
import { useDebounce } from './useDebounce';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

function DebounceTestComponent(props: {
  onValueChange: (value: string) => void;
}) {
  const [value] = useState('');
  const { debounce } = useDebounce<string>(300);

  const handleChange = (newValue: string) => {
    debounce(props.onValueChange, newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
}

describe('useDebounce Hook in DebounceTestComponent', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('calls the onValueChange callback with the last value after the debounce delay', () => {
    const handleValueChange = vi.fn();
    render(<DebounceTestComponent onValueChange={handleValueChange} />);

    fireEvent.change(screen.getByPlaceholderText('Type here...'), {
      target: { value: 'test' },
    });
    expect(handleValueChange).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(handleValueChange).toHaveBeenCalledWith('test');
  });
});
