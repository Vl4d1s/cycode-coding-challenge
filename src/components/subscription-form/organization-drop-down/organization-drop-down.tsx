import React from "react";
import styles from "./organization-drop-down.module.css";
import { Organization } from "../../../types";

type OrganizationsDropdownProps = {
  organizations: Organization[];
  selectedOrg: Organization | null;
  onSelectOrg: (org: Organization) => void;
};

const OrganizationsDropdown = React.memo(
  ({ organizations, selectedOrg, onSelectOrg }: OrganizationsDropdownProps) => {
    return (
      <div className={styles.dropdown}>
        {organizations.map((org) => (
          <div key={org.id} className={styles.item}>
            <input
              type="radio"
              id={org.id}
              name="organization"
              checked={org.id === selectedOrg?.id}
              onChange={() => onSelectOrg(org)}
            />
            <label htmlFor={org.id}>{org.name}</label>
          </div>
        ))}
      </div>
    );
  }
);

export default OrganizationsDropdown;
