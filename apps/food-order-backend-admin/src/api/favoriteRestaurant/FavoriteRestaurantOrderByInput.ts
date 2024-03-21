import { SortOrder } from "../../util/SortOrder";

export type FavoriteRestaurantOrderByInput = {
  createdAt?: SortOrder;
  favorite_id?: SortOrder;
  id?: SortOrder;
  restaurant_id?: SortOrder;
};
