import { SortOrder } from "../../util/SortOrder";

export type SystemSettingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  settingKey?: SortOrder;
  settingValue?: SortOrder;
  updatedAt?: SortOrder;
};
