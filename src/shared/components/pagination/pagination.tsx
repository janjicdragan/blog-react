import styles from './pagination.module.css';

interface PaginationProps {
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
}: PaginationProps) => {
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
