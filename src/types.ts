import { User } from "@/models/user-auth";

export interface Auth {
  error: string,
  user: User,
  registerUser: (user: User) => Promise<void>,
  loginUser: (user: User) => Promise<void>
  logoutUser: () => void
}