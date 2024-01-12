import { Link } from "react-router-dom";

import Button from "../shered-components/button/button";
import styles from "./welcome-message.module.css";

const WelcomeMessage = () => (
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
        <span className={styles.developer}>{"{ Vladis Markin }"}</span>
      </a>
    </p>
    <Link to="/subscribe">
      <Button>Go to Subscription page {">"}</Button>
    </Link>
  </div>
);

export default WelcomeMessage;
