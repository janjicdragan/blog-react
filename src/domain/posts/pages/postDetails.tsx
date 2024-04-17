import { Link } from 'react-router-dom';
import Comments from '../../comments/components/comments/comments';
import { useUsersData } from '../../users/hooks/useUsersData';
import Post from '../components/post/post';
import { usePostData } from '../hooks/usePostData';
import { POSTS } from '../../../router/router.config';

const PostDetails = () => {
  const { post } = usePostData();
  const { getUserById } = useUsersData();

  if (!post)
    return (
      <div>
        <div>Post with specified ID does not exist</div>
        <Link to={POSTS}>Return to posts page</Link>
      </div>
    );

  const postUser = getUserById(post.userId);

  return (
    <div>
      <Post
        id={post.id}
        userName={postUser?.name}
        body={post.body}
        title={post.title}
      >
        <Link to={POSTS}>Return to posts page</Link>
        <Comments associatedPostId={post.id} />
      </Post>
    </div>
  );
};

export default PostDetails;
