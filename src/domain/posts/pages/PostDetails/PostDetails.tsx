import { Link } from 'react-router-dom';
import Comments from '../../../comments/components/Comments/Comments';
import { useUsersData } from '../../../users/hooks/useUsersData';
import Post from '../../components/Post/Post';
import { usePostData } from '../../hooks/usePostData';
import { POSTS } from '../../../../router/router.config';
import { SharedProps } from '../../types/interfaces';

interface PostDetails extends SharedProps {}

const PostDetails = ({ helloMessage }: PostDetails) => {
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

  console.log(`${helloMessage} ${PostDetails.name}`);
  return (
    <div>
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
