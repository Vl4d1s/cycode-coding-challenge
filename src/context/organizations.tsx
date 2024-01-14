import React from "react";

import { Organization, User } from "../types";
import useOrganization from "../hooks/useOrganization";
import useLocalStorage from "../hooks/useLocalStorage";

interface OrganizationContextProps {
  users: User[];
  organizations: Organization[];
  selectedOrg: Organization | null;
  selectedUsers: User[];
  setSelectedOrg: React.Dispatch<React.SetStateAction<Organization | null>>;
  setSelectedUsers: React.Dispatch<React.SetStateAction<User[]>>;
  isLoading: boolean;
  error: Error | null;
  filteredUsers: User[];
}

const initialContextValue: OrganizationContextProps = {
  users: [],
  organizations: [],
  filteredUsers: [],
  selectedOrg: null,
  selectedUsers: [],
  setSelectedOrg: () => {},
  setSelectedUsers: () => {},
  isLoading: false,
  error: null,
};

export const OrganizationContext =
  React.createContext<OrganizationContextProps>(initialContextValue);

const filterUsersByOrganization = (
  users: User[],
  organization: Organization | null
): User[] => {
  if (!users || !organization) return [];
  return users.filter((user) => user.organizationId === organization.id);
};

export const OrganizationProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [selectedOrg, setSelectedOrg] = useLocalStorage<Organization | null>(
    "selectedOrg",
    null
  );
  const [selectedUsers, setSelectedUsers] = useLocalStorage<User[]>(
    "selectedUsers",
    []
  );
  const { data, isLoading, error } = useOrganization();

  const filteredUsers = filterUsersByOrganization(
    data?.users || [],
    selectedOrg
  );

  return (
    <OrganizationContext.Provider
      value={{
        error,
        selectedOrg,
        isLoading,
        filteredUsers,
        selectedUsers,
        setSelectedOrg,
        setSelectedUsers,
        users: data?.users || [],
        organizations: data?.organizations || [],
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
