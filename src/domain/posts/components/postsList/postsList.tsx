import Pagination from '../../../../shared/components/pagination/pagination';
import Comments from '../../../comments/components/comments/comments';
import { usePostsData } from '../../hooks/usePostsData';
import Post from '../post/post';

const PostsList = () => {
  const { posts, currentPage, getNextPostsPage, getPreviousPostsPage } =
    usePostsData();

  if (posts?.length === 0) return <div>Loading...</div>;

  const renderPosts = () => {
    return posts?.map((post) => (
      <Post
        key={post.title}
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
      >
        <Comments associatedPostId={post.id} />
      </Post>
    ));
  };

  return (
    <div>
      {renderPosts()}
      <Pagination
        prevBtnHandler={getPreviousPostsPage}
        nextBtnHandler={getNextPostsPage}
        isPrevBtnDisabled={currentPage <= 1}
        isNextBtnDisabled={posts.length <= 0}
      />
    </div>
  );
};

export default PostsList;
