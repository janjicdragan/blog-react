import { useUsersData } from '../../../users/hooks/useUsersData';
import { usePostsData } from '../../hooks/usePostsData';
import { usePosts } from '../../hooks/usePosts';
import styles from './PostsList.module.css';
import Loader from '../../../../shared/components/Loader/Loader';
import { lazy } from 'react';
import { SharedProps } from '../../../../shared/types/interfaces';

const ErrorComponent = lazy(
  () => import('../../../../shared/components/Error/ErrorComponent'),
);
const TextInput = lazy(
  () => import('../../../../shared/components/TextInput/TextInput'),
);
const Pagination = lazy(
  () => import('../../../../shared/components/Pagination/Pagination'),
);
const Post = lazy(() => import('../Post/Post'));
const Comments = lazy(
  () => import('../../../comments/components/Comments/Comments'),
);

interface PostsListProps extends SharedProps {}

const PostsList = ({ helloMessage }: PostsListProps) => {
  const {
    posts,
    isLoading,
    error,
    isFiltering,
    clearFiltering,
    currentPage,
    getNextPostsPage,
    getPreviousPostsPage,
    debouncedFilterPostsByUserName,
  } = usePostsData();
  const { getUserById } = useUsersData();
  const { onPostClick } = usePosts();
  console.log(`${helloMessage} ${PostsList.name}`);

  if (isLoading) return <Loader />;

  if (error)
    return (
      <ErrorComponent
        render={() => {
          return <div className={styles.error}>{error}</div>;
        }}
        helloMessage={helloMessage}
      />
    );

  if (!posts) {
    return (
      <ErrorComponent
        render={() => {
          return <div className={styles.error}>No posts available.</div>;
        }}
        helloMessage={helloMessage}
      />
    );
  }

  const renderPosts = () => {
    if (posts.length === 0 && isFiltering)
      return (
        <div className={styles.error}>
          No posts found with given search criteria.
        </div>
      );
    return posts?.map((post) => {
      const postUser = getUserById(post.userId);
      return (
        <Post
          key={post.title}
          id={post.id}
          userName={postUser?.name}
          title={post.title}
          body={post.body}
          onPostClick={onPostClick}
          helloMessage={helloMessage}
        >
          <Comments
            associatedPostId={post.id}
            showAllComments={false}
            helloMessage={helloMessage}
          />
          <div className={styles.moreDetails}>
            Click on post for more details
          </div>
        </Post>
      );
    });
  };

  return (
    <div className={styles.postsListContainer}>
      <TextInput
        onInputChange={debouncedFilterPostsByUserName}
        onClearBtnClick={clearFiltering}
        placeholder="Search posts based on user name"
        helloMessage={helloMessage}
      />
      <div className={styles.postsContainer}>{renderPosts()}</div>
      {!isFiltering && (
        <Pagination
          prevBtnHandler={getPreviousPostsPage}
          nextBtnHandler={getNextPostsPage}
          isPrevBtnDisabled={currentPage <= 1}
          isNextBtnDisabled={posts.length <= 0}
          helloMessage={helloMessage}
        />
      )}
    </div>
  );
};

export default PostsList;
