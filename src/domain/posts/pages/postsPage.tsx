import PostsList from '../components/postsList/postsList';
import styles from './postsPage.module.css';

const PostsPage = () => {
  return (
    <div className={styles.postsLayout}>
      <div className={styles.header}>Welcome to our blog posts</div>
      <PostsList />
    </div>
  );
};

export default PostsPage;
