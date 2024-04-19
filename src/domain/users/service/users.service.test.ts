import { describe, it, expect, vi } from 'vitest';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { UsersService } from './users.service';
import { API_BASE_URL } from '../../../shared/constants';

vi.mock('../../../shared/services/dataFetcher/dataFetcher', () => ({
  fetchData: vi.fn(),
}));

describe('UsersService', () => {
  it('calls fetchData with the correct URL for get()', async () => {
    const mockUsers = [{ id: 1, name: 'John Doe', username: 'john' }];
    vi.mocked(fetchData).mockResolvedValue(mockUsers);

    const result = await UsersService.get();

    expect(fetchData).toHaveBeenCalledWith('get', `${API_BASE_URL}/users`);
    expect(result).toEqual(mockUsers);
  });

  it('calls fetchData with the correct URL for getById()', async () => {
    const userId = 1;
    const mockUser = { id: 1, name: 'John Doe', username: 'john' };
    vi.mocked(fetchData).mockResolvedValue(mockUser);

    const result = await UsersService.getById(userId);

    expect(fetchData).toHaveBeenCalledWith(
      'get',
      `${API_BASE_URL}/users/${userId}`,
    );
    expect(result).toEqual(mockUser);
  });
});
