export interface User {
  readonly id: number;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  blocked: boolean;
  token?: string;
}

export interface UserContextType {
  user: User | null;
  login: (info: User) => void;
  logout: () => void;
}