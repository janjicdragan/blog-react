import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from '../domain/posts/pages/postsPage';
import PostDetails from '../domain/posts/pages/postDetails';
import { INDEX, POSTS, POST } from './router.config';
import NotFound from '../shared/pages/notFound';

const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={POSTS} element={<PostsPage />} />
        <Route path={POST} element={<PostDetails />} />
        <Route path={INDEX} element={<PostsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
