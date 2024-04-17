import { SharedProps } from '../../../posts/types/interfaces';
import { useCommentsData } from '../../hooks/useCommentsData';
import Comment from '../comment/comment';
import styles from './comments.module.css';

interface CommentsProps extends SharedProps {
  associatedPostId: number;
}

const Comments = ({ associatedPostId, helloMessage }: CommentsProps) => {
  const { comments } = useCommentsData(associatedPostId);
  if (comments.length === 0)
    return <div className={styles.noComments}>No added comments yet.</div>;

  console.log(`${helloMessage} ${Comments.name}`);
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
            helloMessage={helloMessage}
          />
        );
      })}
    </div>
  );
};

export default Comments;
