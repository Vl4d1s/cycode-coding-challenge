import { Organization, User } from "../../types";
import styles from "./subscription-message.module.css";

interface SubscriptionMessageProps {
  selectedOrg: Organization;
  selectedUsers: User[];
}

const SubscriptionMessage = ({
  selectedOrg,
  selectedUsers,
}: SubscriptionMessageProps) => {
  const userList = selectedUsers.map((user, index) => (
    <li key={index} className={styles.userListItem}>
      {index + 1}. {user.firstName} {user.lastName}
    </li>
  ));
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Subscribed!</h1>
      <h2 className={styles.orgName}>Organization: {selectedOrg.name}</h2>
      <h3>Selected Users:</h3>
      <ul className={styles.userList}>{userList}</ul>
    </div>
  );
};

export default SubscriptionMessage;
