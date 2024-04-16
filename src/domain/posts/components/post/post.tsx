import styles from './post.module.css';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = ({ userId, id, title, body }: PostProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>Author: User {userId}</p>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
