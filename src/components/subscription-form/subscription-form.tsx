import { useNavigate } from "react-router-dom";
import React, { useCallback, useContext } from "react";

import { Organization, User } from "../../types";
import Loader from "../shered-components/loader/loader";
import UsersDropdown from "./dropdown/users-drop-down/users-drop-down";
import { OrganizationContext } from "../../context/organizations";
import ErrorMessage from "../shered-components/error-message/error-message";
import OrganizationsDropdown from "./dropdown/organization-drop-down/organization-drop-down";
import styles from "./subscription-form.module.css";

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
    },
    [setSelectedOrg]
  );

  const handleUserSelect = useCallback(
    (user: User) => {
      const userExists = selectedUsers.find((u) => u.id === user.id);
      userExists
        ? setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id))
        : setSelectedUsers([...selectedUsers, user]);
    },
    [selectedUsers, setSelectedUsers]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigate("/");
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

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
        disabled={!selectedOrg || selectedUsers.length === 0}
      >
        Submit
      </button>
    </form>
  );
};

export default SubscriptionForm;
