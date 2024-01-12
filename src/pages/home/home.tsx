import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Button from "../../components/shered/button/button";
import { useContext } from "react";
import { OrganizationContext } from "../../context/organizations";

const HomePage = () => {
  const { selectedUsers, selectedOrg } = useContext(OrganizationContext);

  if (selectedUsers.size > 0 && selectedOrg) {
    const userList = Array.from(selectedUsers).map((user, index) => (
      <li key={index}>{user}</li>
    ));

    return (
      <div>
        <h1>Subscribed!</h1>
        <h2>Organization: {selectedOrg.name}</h2>
        <h3>Selected Users:</h3>
        <ul>{userList}</ul>
      </div>
    );
  }

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
        <Button>Go to Subscription page Page {">>"}</Button>
      </Link>
    </div>
  );
};

export default HomePage;
