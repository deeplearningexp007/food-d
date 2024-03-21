import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
  user_id?: SortOrder;
};
