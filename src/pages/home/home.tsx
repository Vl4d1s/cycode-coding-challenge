import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Button from "../../components/shered/button/button";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.welcome}>
        Welcome to the{" "}
        <a className={styles.link} href="https://cycode.com/">
          Cycode
        </a>{" "}
        Coding Challenge!
      </h2>
      <p className={styles.message}>
        This challenge has been solved with ❤️ by{" "}
        <a className={styles.link} href="https://www.github.com/vl4d1s">
          {" "}
          <span className={styles.developer}>{"{ Vladis Markin }"}</span>
        </a>
      </p>
      <Link to="/subscribe">
        <Button>Go to Subscribe Page {">>"}</Button>
      </Link>
    </div>
  );
};

export default HomePage;
