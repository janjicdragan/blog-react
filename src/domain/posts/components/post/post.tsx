import styles from './post.module.css';

interface PostProps {
  userName?: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}

const Post = ({ userName, title, body, children }: PostProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>Author: {userName ?? 'Anonymous'}</p>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
      {children && <>{children}</>}
    </div>
  );
};

export default Post;
