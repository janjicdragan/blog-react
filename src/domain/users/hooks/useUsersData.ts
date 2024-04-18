import { User } from '../../posts/types/interfaces';
import { useUsers } from '../context/usersContext';

export const useUsersData = () => {
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
