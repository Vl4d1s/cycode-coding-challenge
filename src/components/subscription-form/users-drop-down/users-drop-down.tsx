import React, { useState } from "react";
import { User } from "../../../types";
import styles from "./users-drop-down.module.css";

type UsersDropdownProps = {
  users: User[];
  selectedUsers: Set<string>;
  onSelectUser: (id: string) => void;
};

const UsersDropdown = React.memo(
  ({ users, selectedUsers, onSelectUser }: UsersDropdownProps) => {
    const [filter, setFilter] = useState("");

    const filteredUsers = filter
      ? users.filter((user) =>
          `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
      : users;

    return (
      <div className={styles.dropdown}>
        <input
          type="text"
          placeholder="Search users"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        {filteredUsers.map((user) => (
          <div key={user.id} className={styles.item}>
            <input
              type="checkbox"
              id={user.id}
              checked={selectedUsers.has(user.id)}
              onChange={(e) => {
                e.stopPropagation(); // Prevent the dropdown from closing
                onSelectUser(user.id);
              }}
            />
            <label
              htmlFor={user.id}
            >{`${user.firstName} ${user.lastName}`}</label>
          </div>
        ))}
      </div>
    );
  }
);

export default UsersDropdown;
