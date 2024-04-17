import styles from './ErrorComponent.module.css';

interface ErrorComponentProps {
  render: () => JSX.Element;
}

const ErrorComponent = ({ render }: ErrorComponentProps) => {
  return <div className={styles.container}>{render()}</div>;
};

export default ErrorComponent;
