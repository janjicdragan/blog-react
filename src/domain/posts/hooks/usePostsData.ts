import { useEffect, useState } from 'react';
import { Post } from '../types/interfaces';
import { PostsService } from '../service/posts.service';
import { usePagination } from '../../../shared/components/pagination/hooks/usePagination';

export const usePostsData = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { currentPage, pageLimit, nextPage, previousPage } = usePagination();

  const getFirstPostsPage = async () => {
    const posts = await PostsService.getPaginated(1, pageLimit);
    setPosts(posts);
  };

  const getNextPostsPage = async () => {
    const posts = await PostsService.getPaginated(currentPage + 1, pageLimit);
    setPosts(posts);
    nextPage();
  };

  const getPreviousPostsPage = async () => {
    const posts = await PostsService.getPaginated(currentPage - 1, pageLimit);
    setPosts(posts);
    previousPage();
  };

  useEffect(() => {
    getFirstPostsPage();
  }, []);

  return {
    posts,
    currentPage,
    getFirstPostsPage,
    getNextPostsPage,
    getPreviousPostsPage,
  };
};
