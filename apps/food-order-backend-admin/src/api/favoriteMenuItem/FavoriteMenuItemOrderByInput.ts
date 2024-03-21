import { SortOrder } from "../../util/SortOrder";

export type FavoriteMenuItemOrderByInput = {
  createdAt?: SortOrder;
  favorite_id?: SortOrder;
  id?: SortOrder;
  menu_item_id?: SortOrder;
};
