import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Comment, { CommentProps } from './Comment';

describe('Comment Component', () => {
  const testProps: CommentProps = {
    email: 'user@example.com',
    body: 'This is a sample comment text.',
    helloMessage: 'Hello from',
  };

  it('renders the comment with email and body text', () => {
    render(<Comment {...testProps} />);

    const emailElement = screen.getByText(testProps.email);
    const bodyElement = screen.getByText(testProps.body);

    expect(emailElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  it('logs the correct hello message on render', () => {
    const consoleSpy = vi.spyOn(console, 'log');

    render(<Comment {...testProps} />);

    expect(consoleSpy).toHaveBeenCalledWith('Hello from Comment');
    consoleSpy.mockRestore();
  });
});
