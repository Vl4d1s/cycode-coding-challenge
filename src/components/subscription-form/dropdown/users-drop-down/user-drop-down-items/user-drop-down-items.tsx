import React from "react";
import { User } from "../../../../../types";
import styles from "./user-drop-down-items.module.css";

type DropdownItemsProps = {
  users: User[];
  selectedUsers: User[];
  onSelectUser: (user: User) => void;
};

const DropdownItems: React.FC<DropdownItemsProps> = ({
  users,
  selectedUsers,
  onSelectUser,
}) => (
  <div className={styles.items}>
    {users.map((user) => (
      <div key={user.id} className={styles.item}>
        <input
          type="checkbox"
          id={user.id}
          checked={selectedUsers.some(
            (selectedUser) => selectedUser.id === user.id
          )}
          onChange={(e) => {
            e.stopPropagation();
            onSelectUser(user);
          }}
        />
        <label htmlFor={user.id}>{`${user.firstName} ${user.lastName}`}</label>
      </div>
    ))}
  </div>
);

export default DropdownItems;
