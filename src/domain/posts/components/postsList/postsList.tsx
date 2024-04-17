import Pagination from '../../../../shared/components/pagination/pagination';
import Comments from '../../../comments/components/comments/comments';
import { useUsersData } from '../../../users/hooks/useUsersData';
import { usePostsData } from '../../hooks/usePostsData';
import Post from '../post/post';

const PostsList = () => {
  const { posts, currentPage, getNextPostsPage, getPreviousPostsPage } =
    usePostsData();
  const { getUserById } = useUsersData();

  const renderPosts = () => {
    return posts?.map((post) => {
      const postUser = getUserById(post.id);
      return (
        <Post
          key={post.title}
          userName={postUser?.name}
          title={post.title}
          body={post.body}
        >
          <Comments associatedPostId={post.id} />
        </Post>
      );
    });
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
