import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from '../domain/posts/pages/PostsPage/PostsPage';
import PostDetails from '../domain/posts/pages/PostDetails/PostDetails';
import { INDEX, POSTS, POST } from './router.config';
import NotFound from '../shared/pages/NotFound';
import { SharedProps } from '../domain/posts/types/interfaces';

interface GlobalRouterProps extends SharedProps {}

const GlobalRouter = ({ helloMessage }: GlobalRouterProps) => {
  console.log(`${helloMessage} ${GlobalRouter.name}`);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={POSTS}
          element={<PostsPage helloMessage={helloMessage} />}
        />
        <Route
          path={POST}
          element={<PostDetails helloMessage={helloMessage} />}
        />
        <Route
          path={INDEX}
          element={<PostsPage helloMessage={helloMessage} />}
        />
        <Route path="*" element={<NotFound helloMessage={helloMessage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
