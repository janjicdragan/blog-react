import { useEffect, useState } from 'react';
import { Comment } from '../../posts/types/interfaces';
import { CommentsService } from '../service/comments.service';

export const useCommentsData = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const getCommentsByPostId = async (postId: number) => {
    const comments = await CommentsService.getCommentByPostId(postId);
    setComments(comments);
  };

  useEffect(() => {
    getCommentsByPostId(postId);
  }, [postId]);

  return { comments };
};
