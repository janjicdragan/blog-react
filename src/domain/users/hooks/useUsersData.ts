import { User } from '../../posts/types/interfaces';
import { useUsers } from '../context/usersContext';

type UseUsersData = {
  getUserById: (userId: number) => User | undefined;
  filterUsersByName: (userName: string) => User[];
};

export const useUsersData = (): UseUsersData => {
  const { users } = useUsers();

  const getUserById = (userId: number): User | undefined => {
    return users?.find((user) => user.id === userId);
  };

  const filterUsersByName = (userName: string): User[] => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(userName.toLowerCase()),
    );
  };

  return { getUserById, filterUsersByName };
};
