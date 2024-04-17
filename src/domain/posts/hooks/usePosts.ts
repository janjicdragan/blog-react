import { useNavigate } from 'react-router-dom';

export const usePosts = () => {
  const navigate = useNavigate();

  const onPostClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const postId = event.currentTarget.dataset.postId;
    navigate(`/posts/${postId}`);
  };

  return { onPostClick };
};
