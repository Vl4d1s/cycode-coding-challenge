import React, { useState } from "react";
import { Organization, User } from "../types";
import useOrganization from "../hooks/useOrganization";

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
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
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
