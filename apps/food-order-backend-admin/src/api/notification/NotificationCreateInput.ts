import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type NotificationCreateInput = {
  isRead?: boolean | null;
  message?: string | null;
  userModels?: UserModelWhereUniqueInput | null;
};
