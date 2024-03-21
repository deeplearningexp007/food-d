import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  restaurant_id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
