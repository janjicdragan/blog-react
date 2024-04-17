import { SharedProps } from '../../../domain/posts/types/interfaces';
import styles from './pagination.module.css';

interface PaginationProps extends SharedProps {
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  isPrevBtnDisabled: boolean;
  isNextBtnDisabled: boolean;
}

const Pagination = ({
  prevBtnHandler,
  nextBtnHandler,
  isPrevBtnDisabled,
  isNextBtnDisabled,
  helloMessage,
}: PaginationProps) => {
  console.log(`${helloMessage} ${Pagination.name}`);
  return (
    <div className={styles.pagination}>
      <button onClick={prevBtnHandler} disabled={isPrevBtnDisabled}>
        Previous
      </button>
      <button onClick={nextBtnHandler} disabled={isNextBtnDisabled}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
