import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { Post } from '../types/interfaces';

async function get() {
  const url = `${API_BASE_URL}/posts`;
  return await fetchData<Post[]>('get', url);
}

async function getById(postId: number) {
  const url = `${API_BASE_URL}/posts/${postId}`;
  return await fetchData<Post>('get', url);
}

async function getPaginated(pageNumber: number, pageLimit: number) {
  const url = `${API_BASE_URL}/posts?_page=${pageNumber}&_limit=${pageLimit}`;
  return await fetchData<Post[]>('get', url);
}

async function getByUserIds(userIds: number[]) {
  let url = `${API_BASE_URL}/posts?`;
  userIds.forEach((userId, index) => {
    const queryParameter =
      index === 0 ? `userId=${userId}` : `&userId=${userId}`;
    url += queryParameter;
  });
  return await fetchData<Post[]>('get', url);
}

export const PostsService = {
  get,
  getById,
  getByUserIds,
  getPaginated,
};
