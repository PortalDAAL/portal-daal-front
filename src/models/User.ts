import { Event } from "./Event";

export interface User {
  readonly documentId: string;
  readonly id: number;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  blocked: boolean;
  token?: string;
  events?: Event[];
}

export interface UserContextType {
  user: User | null;
  login: (info: User) => void;
  logout: () => void;
}
