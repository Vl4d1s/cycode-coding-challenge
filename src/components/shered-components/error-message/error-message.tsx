import styles from "./error-message.module.css";

type ErrorProps = {
  error: Error;
};

const ErrorMessage = ({ error }: ErrorProps) => (
  <h1 className={styles.error}>An error occurred: {error.message}</h1>
);

export default ErrorMessage;
