export interface User {
  id: number;
  email?: string;
  avatar: string;
  first_name: string;
  last_name: string;
}

export interface HookData {
  users: User[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
}
