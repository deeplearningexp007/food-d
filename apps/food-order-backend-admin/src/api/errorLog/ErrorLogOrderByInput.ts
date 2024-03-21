import { SortOrder } from "../../util/SortOrder";

export type ErrorLogOrderByInput = {
  errorCode?: SortOrder;
  errorMessage?: SortOrder;
  id?: SortOrder;
  requestInfo?: SortOrder;
  stackTrace?: SortOrder;
  timestamp?: SortOrder;
  user_id?: SortOrder;
};
