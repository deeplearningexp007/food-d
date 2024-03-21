import { SortOrder } from "../../util/SortOrder";

export type TransactionStatusOrderByInput = {
  id?: SortOrder;
  status?: SortOrder;
  statusDate?: SortOrder;
  transaction_id?: SortOrder;
};
