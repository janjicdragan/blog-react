import Pagination from '../../../../shared/components/Pagination/Pagination';
import Comments from '../../../comments/components/Comments/Comments';
import { useUsersData } from '../../../users/hooks/useUsersData';
import { usePostsData } from '../../hooks/usePostsData';
import Post from '../Post/Post';
import { usePosts } from '../../hooks/usePosts';
import TextInput from '../../../../shared/components/TextInput/TextInput';
import { SharedProps } from '../../types/interfaces';
import styles from './PostsList.module.css';

interface PostsListProps extends SharedProps {}

const PostsList = ({ helloMessage }: PostsListProps) => {
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

  console.log(`${helloMessage} ${PostsList.name}`);
  return (
    <div>
      <TextInput
        onInputChange={debouncedFilterPostsByUserName}
        onClearBtnClick={clearFiltering}
        placeholder="Search posts based on user name"
        helloMessage={helloMessage}
      />
      {renderPosts()}
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
