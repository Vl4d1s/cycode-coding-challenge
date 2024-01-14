import { User } from "../../../../../types";
import styles from "./user-drop-down-items.module.css";
import useLazyLoading from "../../../../../hooks/useLazyLoading";

type DropdownItemsProps = {
  users: User[];
  selectedUsers: User[];
  onSelectUser: (user: User) => void;
};

const DropdownItems = ({
  users,
  selectedUsers,
  onSelectUser,
}: DropdownItemsProps) => {
  const { itemCount, loaderRef } = useLazyLoading();

  return (
    <div className={styles.items}>
      {users.slice(0, itemCount).map((user) => (
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
          <label
            htmlFor={user.id}
          >{`${user.firstName} ${user.lastName}`}</label>
        </div>
      ))}
      {itemCount < users.length && <span ref={loaderRef}>Loading...</span>}
    </div>
  );
};

export default DropdownItems;
