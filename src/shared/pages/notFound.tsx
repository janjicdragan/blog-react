import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import { SharedProps } from '../types/interfaces';

interface NotFoundPageProps extends SharedProps {}

const NotFound = ({ helloMessage }: NotFoundPageProps) => {
  console.log(`${helloMessage} ${NotFound.name}`);
  return (
    <div className={styles.error}>
      <h3 className={styles.title}>404</h3>
      <h2 className={styles.text}>Opps! Page not found</h2>
      <Link className={styles.link} to="/">
        Navigate to home page
      </Link>
    </div>
  );
};

export default NotFound;
