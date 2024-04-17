import Comments from '../../comments/components/comments/comments';
import { useUsersData } from '../../users/hooks/useUsersData';
import Post from '../components/post/post';
import { usePostData } from '../hooks/usePostData';

const PostDetails = () => {
  const { post } = usePostData();
  const { getUserById } = useUsersData();

  if (!post) return <div>Post with specified ID does not exist</div>;

  const postUser = getUserById(post.userId);

  return (
    <div>
      <Post userName={postUser?.name} body={post.body} title={post.title}>
        <Comments associatedPostId={post.id} />
      </Post>
    </div>
  );
};

export default PostDetails;
