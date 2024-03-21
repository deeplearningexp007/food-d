import { SortOrder } from "../../util/SortOrder";

export type RestaurantDetailOrderByInput = {
  deliveryCharge?: SortOrder;
  deliveryTime?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  minOrderValue?: SortOrder;
  rating?: SortOrder;
  restaurant_id?: SortOrder;
  reviewCount?: SortOrder;
};
