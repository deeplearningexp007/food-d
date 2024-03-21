import { UserModel } from "../userModel/UserModel";

export type NotificationSetting = {
  createdAt: Date | null;
  id: number;
  settingName: string | null;
  settingValue: boolean | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
