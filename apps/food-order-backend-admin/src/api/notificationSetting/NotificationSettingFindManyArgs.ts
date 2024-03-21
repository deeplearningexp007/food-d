import { NotificationSettingWhereInput } from "./NotificationSettingWhereInput";
import { NotificationSettingOrderByInput } from "./NotificationSettingOrderByInput";

export type NotificationSettingFindManyArgs = {
  where?: NotificationSettingWhereInput;
  orderBy?: Array<NotificationSettingOrderByInput>;
  skip?: number;
  take?: number;
};
