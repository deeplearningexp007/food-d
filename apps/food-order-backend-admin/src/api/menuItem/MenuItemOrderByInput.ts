import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  availableQuantity?: SortOrder;
  description?: SortOrder;
  hashtags?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  ingredients?: SortOrder;
  isActive?: SortOrder;
  isVegetarian?: SortOrder;
  category_id?: SortOrder;
  menu_id?: SortOrder;
  name?: SortOrder;
  preparationTime?: SortOrder;
  price?: SortOrder;
  shareSlug?: SortOrder;
};
