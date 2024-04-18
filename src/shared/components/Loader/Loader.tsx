import styles from './Loader.module.css';

const Loader = (): JSX.Element => {
  return <div className={styles.loader} data-testid="loader"></div>;
};

export default Loader;
