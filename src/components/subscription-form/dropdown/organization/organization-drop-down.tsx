import React, { useState, useEffect, useRef } from "react";
import styles from "./organization-drop-down.module.css";
import { Organization } from "../../../../types";

type OrganizationsDropdownProps = {
  organizations: Organization[];
  selectedOrg: Organization | null;
  onSelectOrg: (org: Organization) => void;
};

const OrganizationsDropdown = React.memo(
  ({ organizations, selectedOrg, onSelectOrg }: OrganizationsDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
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

    return (
      <div className={styles.dropdown} ref={dropdownRef}>
        <div
          className={styles.dropdownHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOrg ? selectedOrg.name : "Select an organization"}
        </div>
        {isOpen &&
          organizations.map((org) => (
            <div key={org.id} className={styles.item}>
              <input
                type="radio"
                id={org.id}
                name="organization"
                checked={org.id === selectedOrg?.id}
                onChange={() => {
                  onSelectOrg(org);
                  setIsOpen(false);
                }}
              />
              <label htmlFor={org.id}>{org.name}</label>
            </div>
          ))}
      </div>
    );
  }
);

export default OrganizationsDropdown;
