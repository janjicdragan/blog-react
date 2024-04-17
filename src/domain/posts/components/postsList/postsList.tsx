import Pagination from '../../../../shared/components/pagination/pagination';
import Comments from '../../../comments/components/comments/comments';
import { useUsersData } from '../../../users/hooks/useUsersData';
import { usePostsData } from '../../hooks/usePostsData';
import Post from '../post/post';
import { usePosts } from '../../hooks/usePosts';
import TextInput from '../../../../shared/components/textInput/textInput';

const PostsList = () => {
  const {
    posts,
    isFiltering,
    clearFiltering,
    currentPage,
    getNextPostsPage,
    getPreviousPostsPage,
    debouncedFilterPostsByUserName,
  } = usePostsData();
  const { getUserById } = useUsersData();
  const { onPostClick } = usePosts();

  const renderPosts = () => {
    return posts?.map((post) => {
      const postUser = getUserById(post.id);
      return (
        <Post
          key={post.title}
          id={post.id}
          userName={postUser?.name}
          title={post.title}
          body={post.body}
          onPostClick={onPostClick}
        >
          <Comments associatedPostId={post.id} />
        </Post>
      );
    });
  };

  return (
    <div>
      <TextInput
        onInputChange={debouncedFilterPostsByUserName}
        onClearBtnClick={clearFiltering}
        placeholder="Search posts based on user name"
      />
      {renderPosts()}
      {!isFiltering && (
        <Pagination
          prevBtnHandler={getPreviousPostsPage}
          nextBtnHandler={getNextPostsPage}
          isPrevBtnDisabled={currentPage <= 1}
          isNextBtnDisabled={posts.length <= 0}
        />
      )}
    </div>
  );
};

export default PostsList;
