import styles from './ErrorComponent.module.css';

interface ErrorComponentProps {
  render: () => JSX.Element;
}

const ErrorComponent = ({ render }: ErrorComponentProps) => {
  return (
    <div className={styles.container}>
      <div>Error occured</div>
      {render()}
    </div>
  );
};

export default ErrorComponent;
