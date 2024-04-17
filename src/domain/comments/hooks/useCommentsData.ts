import { useEffect, useState } from 'react';
import { Comment } from '../../posts/types/interfaces';
import { CommentsService } from '../service/comments.service';

export const useCommentsData = (postId: number, showAllComments: boolean) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const getCommentsByPostId = async (
    postId: number,
    showAllComments: boolean,
  ) => {
    const comments = showAllComments
      ? await CommentsService.getCommentsByPostId(postId)
      : await CommentsService.getLimitedCommentsByPostId(postId, 2);
    setComments(comments);
  };

  useEffect(() => {
    getCommentsByPostId(postId, showAllComments);
  }, [postId]);

  return { comments };
};
