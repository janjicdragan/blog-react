import { useUsers } from '../context/usersContext';

export const useUsersData = () => {
  const { users } = useUsers();

  const getUserById = (userId: number) => {
    const matchingUser = users?.find((user) => user.id === userId);

    if (!matchingUser) return;

    return matchingUser;
  };

  return { getUserById };
};
