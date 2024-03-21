import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  customizationOptions?: SortOrder;
  id?: SortOrder;
  itemDescription?: SortOrder;
  itemImage?: SortOrder;
  itemName?: SortOrder;
  menu_item_id?: SortOrder;
  order_id?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
};
