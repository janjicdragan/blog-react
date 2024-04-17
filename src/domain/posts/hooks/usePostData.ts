import { useEffect, useState } from 'react';
import { Post } from '../types/interfaces';
import { PostsService } from '../service/posts.service';
import { useParams } from 'react-router-dom';
import { convertToNumber } from '../../../shared/utlis';

export const usePostData = () => {
  const { postId } = useParams<{ postId?: string }>();
  const [post, setPost] = useState<Post>();

  const getPost = async (postId: number) => {
    const post = await PostsService.getById(postId);
    setPost(post);
  };

  useEffect(() => {
    const postIdAsNumber = convertToNumber(postId);
    if (postIdAsNumber) getPost(postIdAsNumber);
  }, [postId]);

  return {
    post,
  };
};
