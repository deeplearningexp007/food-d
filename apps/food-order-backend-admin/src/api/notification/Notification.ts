import { UserModel } from "../userModel/UserModel";

export type Notification = {
  createdAt: Date | null;
  id: number;
  isRead: boolean | null;
  message: string | null;
  userModels?: UserModel | null;
};
