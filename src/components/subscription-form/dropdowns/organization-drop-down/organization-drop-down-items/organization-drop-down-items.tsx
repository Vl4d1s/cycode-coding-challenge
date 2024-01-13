import { Organization } from "../../../../../types";
import styles from "./organization-drop-down-items.module.css";

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
  return (
    <>
      {organizations.map((org) => (
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
    </>
  );
};

export default DropdownItems;
