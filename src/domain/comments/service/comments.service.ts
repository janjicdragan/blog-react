import { API_BASE_URL } from '../../../shared/constants';
import { fetchData } from '../../../shared/services/dataFetcher/dataFetcher';
import { Comment } from '../../posts/types/interfaces';

async function get() {
  const url = `${API_BASE_URL}/comments`;
  return await fetchData<Comment[]>('get', url);
}

async function getCommentByPostId(postId: number) {
  const url = `${API_BASE_URL}/comments?postId=${postId}`;
  return await fetchData<Comment[]>('get', url);
}

export const CommentsService = {
  get,
  getCommentByPostId,
};
