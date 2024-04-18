import { beforeEach, describe, it, expect, vi } from 'vitest';
import { fetchData } from './dataFetcher';

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('fetchData', () => {
  it('should fetch and return data successfully', async () => {
    global.fetch = vi.fn(
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ user: 'John Doe' }),
          status: 200,
        }) as Promise<Response>,
    );

    const data = await fetchData<{ user: string }>(
      'GET',
      'https://api.example.com/user',
    );
    expect(data).toEqual({ user: 'John Doe' });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/user', {
      method: 'GET',
    });
  });

  it('should throw an error when the response is not ok', async () => {
    global.fetch = vi.fn(
      () =>
        Promise.resolve({
          ok: false,
          status: 500,
          statusText: 'Server error',
        }) as Promise<Response>,
    );

    await expect(
      fetchData<{ user: string }>('GET', 'https://api.example.com/user'),
    ).rejects.toThrow('Failed to fetch data, status: 500');
  });

  it('should log and rethrow the error on fetch rejection', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Network failure')));

    const consoleSpy = vi.spyOn(console, 'error');
    await expect(
      fetchData<{ user: string }>('GET', 'https://api.example.com/user'),
    ).rejects.toThrow('Network failure');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error fetching data:',
      new Error('Network failure'),
    );
    consoleSpy.mockRestore();
  });
});
