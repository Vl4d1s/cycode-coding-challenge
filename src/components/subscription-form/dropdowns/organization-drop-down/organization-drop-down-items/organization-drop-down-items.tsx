import { Organization } from "../../../../../types";
import styles from "./organization-drop-down-items.module.css";
import useLazyLoading from "../../../../../hooks/useLazyLoading";

type DropdownItemsProps = {
  organizations: Organization[];
  selectedOrg: Organization | null;
  onSelectOrg: (org: Organization) => void;
};

const DropdownItems = ({
  organizations,
  selectedOrg,
  onSelectOrg,
}: DropdownItemsProps) => {
  const { itemCount, loaderRef } = useLazyLoading();

  return (
    <>
      {organizations.slice(0, itemCount).map((org) => (
        <div key={org.id} className={styles.item}>
          <input
            type="radio"
            id={org.id}
            name="organization"
            checked={org.id === selectedOrg?.id}
            onChange={() => {
              onSelectOrg(org);
            }}
          />
          <label htmlFor={org.id}>{org.name}</label>
        </div>
      ))}
      {itemCount < organizations.length && (
        <span ref={loaderRef}>Loading...</span>
      )}
    </>
  );
};

export default DropdownItems;
