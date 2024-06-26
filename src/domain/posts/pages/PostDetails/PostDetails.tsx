import { Link } from 'react-router-dom';
import { useUsersData } from '../../../users/hooks/useUsersData';
import { usePostData } from '../../hooks/usePostData';
import { POSTS } from '../../../../router/router.config';
import { lazy } from 'react';
import Loader from '../../../../shared/components/Loader/Loader';
import styles from './PostDetails.module.css';
import { SharedProps } from '../../../../shared/types/interfaces';
import withSuspense from '../../../../shared/components/withSuspense/withSuspense';

const Post = withSuspense(lazy(() => import('../../components/Post/Post')));
const Comments = withSuspense(
  lazy(() => import('../../../comments/components/Comments/Comments')),
);
const ErrorComponent = withSuspense(
  lazy(() => import('../../../../shared/components/Error/ErrorComponent')),
);

interface PostDetails extends SharedProps {}

const PostDetails = ({ helloMessage }: PostDetails): JSX.Element => {
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
        helloMessage={helloMessage}
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
        helloMessage={helloMessage}
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
