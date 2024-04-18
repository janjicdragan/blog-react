import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { Comment } from '../../posts/types/interfaces';

interface CommentsService {
  get: () => Promise<Comment[]>;
  getCommentsByPostId: (postId: number) => Promise<Comment[]>;
  getLimitedCommentsByPostId: (
    postId: number,
    limit: number,
  ) => Promise<Comment[]>;
}

async function get(): Promise<Comment[]> {
  const url = `${API_BASE_URL}/comments`;
  return await fetchData<Comment[]>('get', url);
}

async function getCommentsByPostId(postId: number): Promise<Comment[]> {
  const url = `${API_BASE_URL}/comments?postId=${postId}`;
  return await fetchData<Comment[]>('get', url);
}

async function getLimitedCommentsByPostId(
  postId: number,
  limit: number,
): Promise<Comment[]> {
  const url = `${API_BASE_URL}/comments?postId=${postId}&_limit=${limit}`;
  return await fetchData<Comment[]>('get', url);
}

export const CommentsService: CommentsService = {
  get,
  getCommentsByPostId,
  getLimitedCommentsByPostId,
};
