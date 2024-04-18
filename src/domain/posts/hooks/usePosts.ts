import { useNavigate } from 'react-router-dom';

type UsePosts = {
  onPostClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const usePosts = (): UsePosts => {
  const navigate = useNavigate();

  const onPostClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const postId = event.currentTarget.dataset.postId;
    navigate(`/posts/${postId}`);
  };

  return { onPostClick };
};
