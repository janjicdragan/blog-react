import { useCommentsData } from '../../hooks/useCommentsData';
import Comment from '../comment/comment';
import styles from './comments.module.css';

interface CommentsProps {
  associatedPostId: number;
}

const Comments = ({ associatedPostId }: CommentsProps) => {
  const { comments } = useCommentsData(associatedPostId);
  if (comments.length === 0)
    return <div className={styles.noComments}>No added comments yet.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>Comments: </div>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.name}
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        );
      })}
    </div>
  );
};

export default Comments;
