import React, { useState } from "react";
import { Organization, User } from "../types";
import useOrganization from "../hooks/useOrganization";

interface OrganizationContextProps {
  users: User[];
  organizations: Organization[];
  selectedOrg: Organization | null;
  selectedUsers: Set<string>;
  setSelectedOrg: React.Dispatch<React.SetStateAction<Organization | null>>;
  setSelectedUsers: React.Dispatch<React.SetStateAction<Set<string>>>;
  isLoading: boolean;
  error: Error | null;
  filteredUsers: User[];
}

const initialContextValue: OrganizationContextProps = {
  users: [],
  organizations: [],
  filteredUsers: [],
  selectedOrg: null,
  selectedUsers: new Set<string>(),
  setSelectedOrg: () => {},
  setSelectedUsers: () => {},
  isLoading: false,
  error: null,
};

export const OrganizationContext =
  React.createContext<OrganizationContextProps>(initialContextValue);

const filterUsersByOrganization = (
  users: User[] | undefined,
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
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
  const [selectedUsers, setSelectedUsers] = useState(new Set<string>());
  const { data, isLoading, error } = useOrganization();

  const filteredUsers = filterUsersByOrganization(data?.users, selectedOrg);

  return (
    <OrganizationContext.Provider
      value={{
        organizations: data?.organizations || [],
        users: data?.users || [],
        selectedOrg,
        setSelectedOrg,
        selectedUsers,
        setSelectedUsers,
        error,
        isLoading,
        filteredUsers,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
