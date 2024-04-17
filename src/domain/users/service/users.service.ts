import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { User } from '../../posts/types/interfaces';

async function get() {
  const url = `${API_BASE_URL}/users`;
  return await fetchData<User[]>('get', url);
}

async function getById(id: number) {
  const url = `${API_BASE_URL}/users/${id}`;
  return await fetchData<User>('get', url);
}

export const UsersService = {
  get,
  getById,
};
