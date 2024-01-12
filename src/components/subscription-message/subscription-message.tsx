import { Organization } from "../../types";

interface SubscriptionMessageProps {
  selectedOrg: Organization;
  selectedUsers: Set<string>;
}

const SubscriptionMessage = ({
  selectedOrg,
  selectedUsers,
}: SubscriptionMessageProps) => {
  const userList = Array.from(selectedUsers).map((user, index) => (
    <li key={index}>{user}</li>
  ));

  return (
    <div>
      <h1>Subscribed!</h1>
      <h2>Organization: {selectedOrg.name}</h2>
      <h3>Selected Users id:</h3>
      <ul>{userList}</ul>
    </div>
  );
};

export default SubscriptionMessage;
