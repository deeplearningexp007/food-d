import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  autoRenew?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  paymentStatus?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  plan_id?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
