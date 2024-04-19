import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostsPage from './PostsPage';

describe('PostsPage Component', () => {
  vi.mock('../../components/PostsList/PostsList', () => {
    return {
      default: () => <div>Mocked Posts List</div>,
    };
  });

  it('renders the welcome header and the PostsList component', () => {
    const helloMessage = 'Hello PostsPage';
    render(<PostsPage helloMessage={helloMessage} />);

    const header = screen.getByText('Welcome to our blog posts');
    const mockedPostsList = screen.getByText('Mocked Posts List');

    expect(header).toBeInTheDocument();
    expect(mockedPostsList).toBeInTheDocument();
  });

  it('logs the correct hello message on render', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const helloMessage = 'Hello PostsPage';
    render(<PostsPage helloMessage={helloMessage} />);

    expect(consoleSpy).toHaveBeenCalledWith('Hello PostsPage PostsPage');
    consoleSpy.mockRestore();
  });
});
