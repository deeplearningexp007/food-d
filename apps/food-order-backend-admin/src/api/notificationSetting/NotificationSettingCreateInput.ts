import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type NotificationSettingCreateInput = {
  settingName?: string | null;
  settingValue?: boolean | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
