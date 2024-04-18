import { SharedProps } from '../../../domain/posts/types/interfaces';
import styles from './ErrorComponent.module.css';

interface ErrorComponentProps extends SharedProps {
  render: () => JSX.Element;
}

const ErrorComponent = ({ render, helloMessage }: ErrorComponentProps) => {
  console.log(`${helloMessage} ${ErrorComponent.name}`);
  return <div className={styles.container}>{render()}</div>;
};

export default ErrorComponent;
