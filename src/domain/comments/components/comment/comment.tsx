import styles from './comment.module.css';

type CommentProps = {
  name: string;
  email: string;
  body: string;
};

const Comment = ({ email, body }: CommentProps) => {
  return (
    <div className={styles.commentContainer}>
      <p className={styles.commentEmail}>{email}</p>
      <p className={styles.commentBody}>{body}</p>
    </div>
  );
};

export default Comment;
