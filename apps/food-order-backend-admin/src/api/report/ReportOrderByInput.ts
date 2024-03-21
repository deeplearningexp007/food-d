import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reportData?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
