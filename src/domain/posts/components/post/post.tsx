import styles from './post.module.css';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  children?: React.ReactNode;
}

const Post = ({ userId, id, title, body, children }: PostProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>Author: User {userId}</p>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
      {children && <>{children}</>}
    </div>
  );
};

export default Post;
