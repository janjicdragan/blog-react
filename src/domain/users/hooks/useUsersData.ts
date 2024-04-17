import { User } from '../../posts/types/interfaces';
import { useUsers } from '../context/usersContext';

export const useUsersData = () => {
  const { users } = useUsers();

  const getUserById = (userId: number): User | undefined => {
    const matchingUser = users?.find((user) => user.id === userId);

    if (!matchingUser) return;

    return matchingUser;
  };

  const filterUsersByName = (userName: string): User[] => {
    const filteredUsers = users.filter((user) => {
      if (user.name.toLowerCase().includes(userName.toLowerCase())) return true;
    });

    return filteredUsers;
  };

  return { getUserById, filterUsersByName };
};
