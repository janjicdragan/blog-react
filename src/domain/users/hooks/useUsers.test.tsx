import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useUsersData } from './useUsersData';
import { useUsers } from '../context/usersContext';

type MockUser = {
  userId: number;
  userName: string;
};

vi.mock('../context/usersContext', () => ({
  useUsers: vi.fn(),
}));

function TestComponent({ userId, userName }: MockUser) {
  const { getUserById, filterUsersByName } = useUsersData();
  const user = getUserById(userId);
  const filteredUsers = filterUsersByName(userName);

  return (
    <div>
      {user && <div data-testid="user">{user.name}</div>}
      <ul data-testid="filtered-users">
        {filteredUsers.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

describe('useUsersData', () => {
  it('returns a user by id', () => {
    vi.mocked(useUsers).mockReturnValue({
      users: [
        {
          id: 1,
          name: 'John Doe',
          username: 'john_doe',
          email: 'john_doe@mock.com',
        },
      ],
      loading: false,
      error: null,
    });

    render(<TestComponent userId={1} userName="" />);
    expect(screen.getByTestId('user').textContent).toBe('John Doe');
  });

  it('filters users by name', () => {
    vi.mocked(useUsers).mockReturnValue({
      users: [
        {
          id: 1,
          name: 'John Doe',
          username: 'john_doe',
          email: 'john_doe@mock.com',
        },
        {
          id: 2,
          name: 'Jane Doe',
          username: 'jane_doe',
          email: 'jane_doe@mock.com',
        },
      ],
      loading: false,
      error: null,
    });

    render(<TestComponent userId={0} userName="Jane" />);
    const list = screen.getByTestId('filtered-users');
    expect(list.children.length).toBe(1);
    expect(list?.firstChild?.textContent).toBe('Jane Doe');
  });
});
