export type Organization = {
  name: string;
  id: string;
};

export type User = {
  firstName: string;
  lastName: string;
  id: string;
  organizationId: string;
};

export type OrganizationData = {
  users: User[];
  organizations: Organization[];
};
