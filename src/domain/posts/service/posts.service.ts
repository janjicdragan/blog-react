import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { Post } from '../types/interfaces';

async function get() {
  const url = `${API_BASE_URL}/posts`;
  return await fetchData<Post[]>('get', url);
}

async function getPaginated(pageNumber: number, pageLimit: number) {
  const url = `${API_BASE_URL}/posts?_page=${pageNumber}&_limit=${pageLimit}`;
  return await fetchData<Post[]>('get', url);
}

async function getByUserId(userId: number) {
  const url = `${API_BASE_URL}/posts?userId=${userId}`;
  return await fetchData<Post[]>('get', url);
}

export const PostsService = {
  get,
  getByUserId,
  getPaginated,
};
