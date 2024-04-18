import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { Post } from '../types/interfaces';

interface PostsService {
  get: () => Promise<Post[]>;
  getById: (postId: number) => Promise<Post>;
  getByUserIds: (userIds: number[]) => Promise<Post[]>;
  getPaginated: (pageNumber: number, pageLimit: number) => Promise<Post[]>;
}

async function get(): Promise<Post[]> {
  const url = `${API_BASE_URL}/posts`;
  return await fetchData<Post[]>('get', url);
}

async function getById(postId: number): Promise<Post> {
  const url = `${API_BASE_URL}/posts/${postId}`;
  return await fetchData<Post>('get', url);
}

async function getPaginated(
  pageNumber: number,
  pageLimit: number,
): Promise<Post[]> {
  const url = `${API_BASE_URL}/posts?_page=${pageNumber}&_limit=${pageLimit}`;
  return await fetchData<Post[]>('get', url);
}

async function getByUserIds(userIds: number[]): Promise<Post[]> {
  let url = `${API_BASE_URL}/posts?`;
  userIds.forEach((userId, index) => {
    const queryParameter =
      index === 0 ? `userId=${userId}` : `&userId=${userId}`;
    url += queryParameter;
  });
  return await fetchData<Post[]>('get', url);
}

export const PostsService: PostsService = {
  get,
  getById,
  getByUserIds,
  getPaginated,
};
