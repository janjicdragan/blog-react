import { useEffect, useState } from 'react';
import { Post } from '../types/interfaces';
import { PostsService } from '../service/posts.service';
import { useParams } from 'react-router-dom';
import { convertToNumber } from '../../../shared/utlis';

export const usePostData = () => {
  const { postId } = useParams<{ postId?: string }>();
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const getPost = async (postId: number) => {
    setIsLoading(true);
    try {
      const post = await PostsService.getById(postId);
      setPost(post);
    } catch (error) {
      setError(
        'Error occured while retrieving post data. Please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const postIdAsNumber = convertToNumber(postId);
    if (postIdAsNumber) getPost(postIdAsNumber);
  }, [postId]);

  return {
    post,
    isLoading,
    error,
  };
};
