import React, { useState, useRef, useEffect } from "react";
import { User } from "../../../../types";
import styles from "./users-drop-down.module.css";

type UsersDropdownProps = {
  users: User[];
  selectedUsers: Set<string>;
  onSelectUser: (id: string) => void;
};

const UsersDropdown = React.memo(
  ({ users, selectedUsers, onSelectUser }: UsersDropdownProps) => {
    const [filter, setFilter] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          event.target.id !== "submit-button" // Check if the clicked element is the submit button
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const filteredUsers = filter
      ? users.filter((user) =>
          `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
      : users;

    return (
      <div className={styles.dropdown} ref={dropdownRef}>
        <div
          className={styles.dropdownHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedUsers.size > 0 ? "Selected users" : "Select a user"}
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
            <div className={styles.dropdownItems}>
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
          </>
        )}
      </div>
    );
  }
);

export default UsersDropdown;
