import { Link } from 'react-router-dom';
import { useUsersData } from '../../../users/hooks/useUsersData';
import { usePostData } from '../../hooks/usePostData';
import { POSTS } from '../../../../router/router.config';
import { SharedProps } from '../../types/interfaces';
import ErrorComponent from '../../../../shared/components/Error/ErrorComponent';
import { lazy } from 'react';
import Loader from '../../../../shared/components/Loader/Loader';
import styles from './PostDetails.module.css';

const Post = lazy(() => import('../../components/Post/Post'));
const Comments = lazy(
  () => import('../../../comments/components/Comments/Comments'),
);

interface PostDetails extends SharedProps {}

const PostDetails = ({ helloMessage }: PostDetails) => {
  const { post, isLoading, error } = usePostData();
  const { getUserById } = useUsersData();
  console.log(`${helloMessage} ${PostDetails.name}`);

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <ErrorComponent
        render={() => {
          return (
            <div>
              <div>{error}</div>
              <Link to={POSTS}>Return to posts page</Link>
            </div>
          );
        }}
      />
    );
  }

  if (!post) {
    return (
      <ErrorComponent
        render={() => {
          return (
            <div>
              <div>Post with specified ID does not exist</div>
              <Link to={POSTS}>Return to posts page</Link>
            </div>
          );
        }}
      />
    );
  }

  const postUser = getUserById(post.userId);

  return (
    <div className={styles.container}>
      <Post
        id={post.id}
        userName={postUser?.name}
        body={post.body}
        title={post.title}
        helloMessage={helloMessage}
      >
        <Link to={POSTS}>Return to posts page</Link>
        <Comments
          associatedPostId={post.id}
          showAllComments={true}
          helloMessage={helloMessage}
        />
      </Post>
    </div>
  );
};

export default PostDetails;
