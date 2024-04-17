import styles from './post.module.css';

interface PostProps {
  id: number;
  userName?: string;
  title: string;
  body: string;
  onPostClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const Post = ({
  id,
  userName,
  title,
  body,
  onPostClick,
  children,
}: PostProps) => {
  return (
    <div
      data-post-id={id}
      className={styles.post}
      onClick={onPostClick ? onPostClick : undefined}
    >
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>Author: {userName ?? 'Anonymous'}</p>
      </div>
      <div className={styles.body}>
        <p>{body}</p>
      </div>
      {children && <div className={styles.childrenContainer}>{children}</div>}
    </div>
  );
};

export default Post;
