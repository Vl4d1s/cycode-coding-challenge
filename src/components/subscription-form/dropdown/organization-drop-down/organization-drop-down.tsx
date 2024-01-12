import React, { useState, useRef } from "react";

import { Organization } from "../../../../types";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import DropdownItems from "./organization-drop-down-items/organization-drop-down-items";
import styles from "./organization-drop-down.module.css";

type OrganizationsDropdownProps = {
  organizations: Organization[];
  selectedOrg: Organization | null;
  onSelectOrg: (org: Organization) => void;
};

const OrganizationsDropdown: React.FC<OrganizationsDropdownProps> = ({
  organizations,
  selectedOrg,
  onSelectOrg,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const label = selectedOrg ? selectedOrg.name : "Select an organization";

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const handleSelectOrg = (org: Organization) => {
    onSelectOrg(org);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        {label}
      </div>
      {isOpen && (
        <DropdownItems
          organizations={organizations}
          selectedOrg={selectedOrg}
          onSelectOrg={handleSelectOrg}
        />
      )}
    </div>
  );
};

export default OrganizationsDropdown;
