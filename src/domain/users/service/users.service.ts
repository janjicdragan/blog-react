import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { User } from '../../posts/types/interfaces';

type UsersService = {
  get: () => Promise<User[]>;
  getById: (id: number) => Promise<User>;
};

async function get(): Promise<User[]> {
  const url = `${API_BASE_URL}/users`;
  return await fetchData<User[]>('get', url);
}

async function getById(id: number): Promise<User> {
  const url = `${API_BASE_URL}/users/${id}`;
  return await fetchData<User>('get', url);
}

export const UsersService: UsersService = {
  get,
  getById,
};
