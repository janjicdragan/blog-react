import { lazy } from 'react';
import Loader from '../../../../shared/components/Loader/Loader';
import { useCommentsData } from '../../hooks/useCommentsData';
import styles from './Comments.module.css';
import { SharedProps } from '../../../../shared/types/interfaces';

const Comment = lazy(() => import('./../Comment/Comment'));
const ErrorComponent = lazy(
  () => import('./../../../../shared/components/Error/ErrorComponent'),
);

interface CommentsProps extends SharedProps {
  associatedPostId: number;
  showAllComments: boolean;
}

const Comments = ({
  associatedPostId,
  showAllComments,
  helloMessage,
}: CommentsProps): JSX.Element => {
  const { comments, isLoading, error } = useCommentsData(
    associatedPostId,
    showAllComments,
  );
  console.log(`${helloMessage} ${Comments.name}`);

  if (isLoading) return <Loader />;

  if (error)
    return (
      <ErrorComponent
        render={() => {
          return <div className={styles.error}>{error}</div>;
        }}
        helloMessage={helloMessage}
      />
    );

  return (
    <div className={styles.container}>
      {comments.length === 0 ? (
        <div className={styles.noComments}>No added comments yet.</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Comments;
