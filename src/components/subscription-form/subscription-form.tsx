import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrganizationsDropdown from "./dropdown/organization/organization-drop-down";
import UsersDropdown from "./dropdown/users/users-drop-down";
import styles from "./subscription-form.module.css";
import { Organization } from "../../types";
import { OrganizationContext } from "../../context/organizations";

const SubscriptionForm = () => {
  const {
    organizations,
    selectedOrg,
    setSelectedOrg,
    selectedUsers,
    setSelectedUsers,
    error,
    isLoading,
    filteredUsers,
  } = useContext(OrganizationContext);

  const navigate = useNavigate();

  const handleOrgSelect = useCallback(
    (org: Organization) => {
      setSelectedOrg(org);
      setSelectedUsers(new Set());
    },
    [setSelectedOrg, setSelectedUsers]
  );

  const handleUserSelect = useCallback(
    (id: string) => {
      const newSelectedUsers = new Set(selectedUsers);
      if (newSelectedUsers.has(id)) newSelectedUsers.delete(id);
      else newSelectedUsers.add(id);
      setSelectedUsers(newSelectedUsers);
    },
    [selectedUsers, setSelectedUsers]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
    // Submit logic here
  };

  if (isLoading) return <h1>Is Loading...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <OrganizationsDropdown
        organizations={organizations}
        selectedOrg={selectedOrg}
        onSelectOrg={handleOrgSelect}
      />
      {selectedOrg && (
        <>
          <UsersDropdown
            users={filteredUsers}
            selectedUsers={selectedUsers}
            onSelectUser={handleUserSelect}
          />
        </>
      )}
      <button
        id="submit-button"
        type="submit"
        disabled={!selectedOrg || selectedUsers.size === 0}
      >
        Submit
      </button>
    </form>
  );
};

export default SubscriptionForm;
