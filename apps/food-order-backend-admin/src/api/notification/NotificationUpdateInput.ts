import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type NotificationUpdateInput = {
  isRead?: boolean | null;
  message?: string | null;
  userModels?: UserModelWhereUniqueInput | null;
};
