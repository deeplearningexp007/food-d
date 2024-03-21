import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  order_id?: SortOrder;
  status?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
