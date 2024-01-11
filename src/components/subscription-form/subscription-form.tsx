import React, { useCallback, useState } from "react";
import OrganizationsDropdown from "./organization-drop-down/organization-drop-down";
import UsersDropdown from "./users-drop-down/users-drop-down";
import styles from "./subscription-form.module.css";
import useOrganization from "../../hooks/useOrganization";
import { Organization } from "../../types";
import { filterUsersByOrganization } from "../../utils";

const SubscriptionForm: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
  const [selectedUsers, setSelectedUsers] = useState(new Set<string>());
  const { data, isLoading, error } = useOrganization();

  const filteredUsers = filterUsersByOrganization(data?.users, selectedOrg);

  const handleOrgSelect = useCallback((org: Organization) => {
    setSelectedOrg(org);
    setSelectedUsers(new Set()); // Reset selected users when organization changes
  }, []);

  const handleUserSelect = useCallback(
    (id: string) => {
      const newSelectedUsers = new Set(selectedUsers);
      if (newSelectedUsers.has(id)) newSelectedUsers.delete(id);
      else newSelectedUsers.add(id);
      setSelectedUsers(newSelectedUsers);
    },
    [selectedUsers]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
  };

  if (isLoading) return <h1>Is Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>{selectedOrg?.name || "Choose Organization"}</label>
      <OrganizationsDropdown
        organizations={data?.organizations || []}
        selectedOrg={selectedOrg}
        onSelectOrg={handleOrgSelect}
      />
      {selectedOrg && (
        <>
          <label>{`${
            selectedUsers.size
              ? `${selectedUsers.size} selected`
              : "Choose Users"
          }`}</label>
          <UsersDropdown
            users={filteredUsers}
            selectedUsers={selectedUsers}
            onSelectUser={handleUserSelect}
          />
        </>
      )}
      <button type="submit" disabled={!selectedOrg || selectedUsers.size === 0}>
        Submit
      </button>
    </form>
  );
};

export default SubscriptionForm;
