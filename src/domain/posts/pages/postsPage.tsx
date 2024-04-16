import Post from '../components/post/post';
import { usePostsData } from '../hooks/usePostsData';
import styles from './postsPage.module.css';

const PostsPage = () => {
  const { posts } = usePostsData();

  const renderPosts = () => {
    return posts?.map((post) => (
      <Post
        key={post.title}
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    ));
  };
  return (
    <div className={styles.postsLayout}>
      <div className={styles.header}>Welcome to our blog posts</div>
      {renderPosts()}
    </div>
  );
};

export default PostsPage;
