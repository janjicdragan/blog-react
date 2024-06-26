import { SharedProps } from '../../../../shared/types/interfaces';
import PostsList from '../../components/PostsList/PostsList';
import styles from './PostsPage.module.css';

interface PostsPageProps extends SharedProps {}

const PostsPage = ({ helloMessage }: PostsPageProps): JSX.Element => {
  console.log(`${helloMessage} ${PostsPage.name}`);
  return (
    <div className={styles.postsLayout}>
      <div className={styles.header}>Welcome to our blog posts</div>
      <PostsList helloMessage={helloMessage} />
    </div>
  );
};

export default PostsPage;
