import React, { useState, useRef } from "react";

import { User } from "../../../../types";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import DropdownItems from "./user-drop-down-items/user-drop-down-items";
import styles from "./users-drop-down.module.css";

type UsersDropdownProps = {
  users: User[];
  selectedUsers: User[];
  onSelectUser: (user: User) => void;
};

const UsersDropdown: React.FC<UsersDropdownProps> = ({
  users,
  selectedUsers,
  onSelectUser,
}) => {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const lable =
    selectedUsers.length > 0
      ? `${selectedUsers.length} Selected users`
      : "Select a user";

  useOutsideClick(dropdownRef, () => setIsOpen(false));
  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        {lable}
      </div>
      {isOpen && (
        <>
          <input
            type="text"
            placeholder="Search users"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.searchInput}
          />
          <DropdownItems
            users={filteredUsers}
            selectedUsers={selectedUsers}
            onSelectUser={onSelectUser}
          />
        </>
      )}
    </div>
  );
};

export default UsersDropdown;
