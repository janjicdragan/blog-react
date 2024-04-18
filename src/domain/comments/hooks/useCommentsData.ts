import { useEffect, useState } from 'react';
import { Comment } from '../../posts/types/interfaces';
import { CommentsService } from '../service/comments.service';

type UsePostsData = {
  comments: Comment[];
  isLoading: boolean;
  error: string | undefined;
};

export const useCommentsData = (
  postId: number,
  showAllComments: boolean,
): UsePostsData => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const getCommentsByPostId = async (
    postId: number,
    showAllComments: boolean,
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const comments = showAllComments
        ? await CommentsService.getCommentsByPostId(postId)
        : await CommentsService.getLimitedCommentsByPostId(postId, 2);
      setComments(comments);
    } catch (error) {
      setError(
        'Error occured while retrieving comments data. Please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCommentsByPostId(postId, showAllComments);
  }, [postId, showAllComments]);

  return { comments, isLoading, error };
};
