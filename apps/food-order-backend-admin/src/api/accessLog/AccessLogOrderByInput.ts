import { SortOrder } from "../../util/SortOrder";

export type AccessLogOrderByInput = {
  action?: SortOrder;
  deviceInfo?: SortOrder;
  errorMessage?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  responseStatus?: SortOrder;
  timestamp?: SortOrder;
  user_id?: SortOrder;
};
