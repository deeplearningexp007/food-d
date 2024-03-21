import { SortOrder } from "../../util/SortOrder";

export type CustomerSubscriptionOrderByInput = {
  activationDate?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  renewalCount?: SortOrder;
  plan_id?: SortOrder;
  subscription_id?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
