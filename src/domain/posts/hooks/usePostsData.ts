import { useEffect, useState } from 'react';
import { Post } from '../types/interfaces';
import { PostsService } from '../service/posts.service';
import { usePagination } from '../../../shared/components/Pagination/hooks/usePagination';
import { useUsersData } from '../../users/hooks/useUsersData';
import { useDebounce } from './useDebounce';

type TryCatchWrapperCallback = (param?: string) => void;

export const usePostsData = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const { currentPage, pageLimit, nextPage, previousPage } = usePagination();
  const { filterUsersByName } = useUsersData();
  const { debounce } = useDebounce<string>();

  const tryCatchWrapper = (
    callback: TryCatchWrapperCallback,
    value?: string,
  ) => {
    setIsLoading(true);
    try {
      if (value) callback(value);
      callback();
    } catch (error) {
      setError(
        'Error occured while retrieving posts data. Please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getFirstPostsPage = async () => {
    tryCatchWrapper(async () => {
      const posts = await PostsService.getPaginated(1, pageLimit);
      setPosts(posts);
    });
  };

  const getNextPostsPage = async () => {
    tryCatchWrapper(async () => {
      const posts = await PostsService.getPaginated(currentPage + 1, pageLimit);
      setPosts(posts);
    });

    nextPage();
  };

  const getPreviousPostsPage = async () => {
    tryCatchWrapper(async () => {
      const posts = await PostsService.getPaginated(currentPage - 1, pageLimit);
      setPosts(posts);
    });

    previousPage();
  };

  const filterPostsByUserName = async (userName: string) => {
    tryCatchWrapper(async () => {
      if (userName === '') {
        clearFiltering();
        return;
      }

      setIsFiltering(true);
      const users = filterUsersByName(userName);
      const userIds = users.map((user) => user.id);

      if (userIds.length === 0) {
        setPosts([]);
        return;
      }

      const filteredPosts = await PostsService.getByUserIds(userIds);

      setPosts(filteredPosts);
    });
  };

  const debouncedFilterPostsByUserName = (userName: string) => {
    debounce(filterPostsByUserName, userName);
  };

  const clearFiltering = async () => {
    const posts = await PostsService.getPaginated(currentPage, pageLimit);
    setPosts(posts);
    setIsFiltering(false);
  };

  useEffect(() => {
    getFirstPostsPage();
  }, []);

  return {
    posts,
    isLoading,
    error,
    isFiltering,
    clearFiltering,
    currentPage,
    getFirstPostsPage,
    getNextPostsPage,
    getPreviousPostsPage,
    debouncedFilterPostsByUserName,
  };
};
