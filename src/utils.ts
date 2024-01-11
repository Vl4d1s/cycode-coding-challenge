import { User, Organization } from "./types";

export const filterUsersByOrganization = (
  users: User[] | undefined,
  organization: Organization | null
): User[] => {
  if (!users || !organization) return [];
  return users.filter((user) => user.organizationId === organization.id);
};
