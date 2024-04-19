import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Post from './Post';

describe('Post Component', () => {
  it('renders correctly with required props', () => {
    render(
      <Post
        id={1}
        title="Test Post"
        body="This is a test post."
        helloMessage="Hello"
      />,
    );

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Author: Anonymous')).toBeInTheDocument();
    expect(screen.getByText('This is a test post.')).toBeInTheDocument();
  });

  it('renders with a specified username', () => {
    render(
      <Post
        id={2}
        userName="John Doe"
        title="User Post"
        body="Post by user."
        helloMessage="Hello"
      />,
    );

    expect(screen.getByText('Author: John Doe')).toBeInTheDocument();
  });

  it('handles click events if onPostClick is provided', () => {
    const mockOnClick = vi.fn();
    render(
      <Post
        id={3}
        title="Clickable Post"
        body="This post can be clicked."
        onPostClick={mockOnClick}
        helloMessage="Hello"
      />,
    );

    fireEvent.click(screen.getByText('Clickable Post'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders children when passed', () => {
    const childText = "I'm a child component";
    render(
      <Post
        id={4}
        title="Post with Children"
        body="This post has children."
        helloMessage="Hello"
      >
        <div>{childText}</div>
      </Post>,
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
