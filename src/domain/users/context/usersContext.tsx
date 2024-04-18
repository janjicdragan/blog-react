import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { User } from '../../posts/types/interfaces';
import { UsersService } from '../service/users.service';
import { SharedProps } from '../../../shared/types/interfaces';

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
}

interface UserProviderProps extends SharedProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children, helloMessage }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      UsersService.get()
        .then((users) => {
          setUsers(users);
        })
        .catch((error: Error) => {
          setError(error.message);
        })
        .finally(() => setLoading(false));
    };

    getUsers();
  }, []);

  console.log(`${helloMessage} ${UserProvider.name}`);
  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}
