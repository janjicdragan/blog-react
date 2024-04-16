import { useEffect, useState } from 'react';
import { Post } from '../types/interfaces';
import { PostsService } from '../service/posts.service';

export const usePostsData = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const posts = await PostsService.get();
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts };
};
