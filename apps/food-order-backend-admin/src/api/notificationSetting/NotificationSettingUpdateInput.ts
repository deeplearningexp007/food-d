import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type NotificationSettingUpdateInput = {
  settingName?: string | null;
  settingValue?: boolean | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
