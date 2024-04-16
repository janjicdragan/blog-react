import { useEffect, useState } from 'react';
import { Post } from '../types/interfaces';
import { PostsService } from '../service/posts.service';
import { usePagination } from '../../../shared/components/pagination/hooks/usePagination';

export const usePostsData = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { currentPage, nextPage, previousPage } = usePagination();

  const getPosts = async () => {
    const posts = await PostsService.get();
    setPosts(posts);
  };

  const getFirstPostsPage = async () => {
    const posts = await PostsService.getPaginated(1);
    setPosts(posts);
  };

  const getNextPostsPage = async () => {
    const posts = await PostsService.getPaginated(currentPage + 1);
    setPosts(posts);
    nextPage();
  };

  const getPreviousPostsPage = async () => {
    const posts = await PostsService.getPaginated(currentPage - 1);
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
