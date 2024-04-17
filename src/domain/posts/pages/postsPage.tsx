import PostsList from '../components/postsList/postsList';
import { SharedProps } from '../types/interfaces';
import styles from './postsPage.module.css';

interface PostsPageProps extends SharedProps {}

const PostsPage = ({ helloMessage }: PostsPageProps) => {
  console.log(`${helloMessage} ${PostsPage.name}`);
  return (
    <div className={styles.postsLayout}>
      <div className={styles.header}>Welcome to our blog posts</div>
      <PostsList helloMessage={helloMessage} />
    </div>
  );
};

export default PostsPage;
