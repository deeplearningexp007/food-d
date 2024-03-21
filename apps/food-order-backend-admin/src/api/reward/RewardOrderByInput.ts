import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
