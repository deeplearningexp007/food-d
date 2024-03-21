import { RestaurantDetail as TRestaurantDetail } from "../api/restaurantDetail/RestaurantDetail";

export const RESTAURANTDETAIL_TITLE_FIELD = "deliveryTime";

export const RestaurantDetailTitle = (record: TRestaurantDetail): string => {
  return record.deliveryTime?.toString() || String(record.id);
};
