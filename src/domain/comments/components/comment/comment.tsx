import { SharedProps } from '../../../posts/types/interfaces';
import styles from './comment.module.css';

interface CommentProps extends SharedProps {
  name: string;
  email: string;
  body: string;
}

const Comment = ({ email, body, helloMessage }: CommentProps) => {
  console.log(`${helloMessage} ${Comment.name}`);
  return (
    <div className={styles.commentContainer}>
      <p className={styles.commentEmail}>{email}</p>
      <p className={styles.commentBody}>{body}</p>
    </div>
  );
};

export default Comment;
