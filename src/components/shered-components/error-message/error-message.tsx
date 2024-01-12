import styles from "./error-message.module.css";

type ErrorProps = {
  error: Error;
};

const ErrorMessage: React.FC<ErrorProps> = ({ error }) => (
  <h1 className={styles.error}>An error occurred: {error.message}</h1>
);

export default ErrorMessage;
