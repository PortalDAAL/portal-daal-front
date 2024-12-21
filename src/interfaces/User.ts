export interface User {
  username: string;
  email: string;
  createdAt: Date;
  blocked: boolean;
  token?: string;
}

export interface UserContextType {
  user: User | null;
  login: (info: User) => void;
  logout: () => void;
}