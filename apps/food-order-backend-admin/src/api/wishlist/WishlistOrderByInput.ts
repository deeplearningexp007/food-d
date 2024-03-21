import { SortOrder } from "../../util/SortOrder";

export type WishlistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  itemType?: SortOrder;
  updatedAt?: SortOrder;
  user_id?: SortOrder;
};
