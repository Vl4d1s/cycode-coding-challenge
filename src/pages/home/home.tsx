import { useContext } from "react";

import { OrganizationContext } from "../../context/organizations";
import WelcomeMessage from "../../components/welcome-message/welcome-message";
import SubscriptionMessage from "../../components/subscription-message/subscription-message";

const HomePage = () => {
  const { selectedUsers, selectedOrg } = useContext(OrganizationContext);
  const isSubscribed = selectedUsers.length > 0 && selectedOrg;

  return isSubscribed ? (
    <SubscriptionMessage
      selectedOrg={selectedOrg}
      selectedUsers={selectedUsers}
    />
  ) : (
    <WelcomeMessage />
  );
};

export default HomePage;
