import { describe, it, expect, vi } from 'vitest';
import { PostsService } from './posts.service';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { API_BASE_URL } from '../../../shared/constants';

vi.mock('../../../shared/services/dataFetcher/dataFetcher', () => ({
  fetchData: vi.fn(),
}));

describe('PostsService', () => {
  it('should fetch all posts', async () => {
    const mockPosts = [{ id: 1, title: 'Post One' }];
    vi.mocked(fetchData).mockResolvedValue(mockPosts);

    const result = await PostsService.get();
    expect(fetchData).toHaveBeenCalledWith('get', `${API_BASE_URL}/posts`);
    expect(result).toEqual(mockPosts);
  });

  it('should fetch a post by ID', async () => {
    const mockPost = { id: 1, title: 'Specific Post' };
    vi.mocked(fetchData).mockResolvedValue(mockPost);

    const result = await PostsService.getById(1);
    expect(fetchData).toHaveBeenCalledWith('get', `${API_BASE_URL}/posts/1`);
    expect(result).toEqual(mockPost);
  });

  it('should fetch posts paginated', async () => {
    const mockPosts = [{ id: 2, title: 'Paginated Post' }];
    vi.mocked(fetchData).mockResolvedValue(mockPosts);

    const result = await PostsService.getPaginated(1, 10);
    expect(fetchData).toHaveBeenCalledWith(
      'get',
      `${API_BASE_URL}/posts?_page=1&_limit=10`,
    );
    expect(result).toEqual(mockPosts);
  });

  it('should fetch posts by user IDs', async () => {
    const mockPosts = [{ id: 3, title: 'User Post' }];
    vi.mocked(fetchData).mockResolvedValue(mockPosts);

    const result = await PostsService.getByUserIds([1, 2]);
    expect(fetchData).toHaveBeenCalledWith(
      'get',
      `${API_BASE_URL}/posts?userId=1&userId=2`,
    );
    expect(result).toEqual(mockPosts);
  });
});
