import { SortOrder } from "../../util/SortOrder";

export type NotificationSettingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  settingName?: SortOrder;
  settingValue?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
