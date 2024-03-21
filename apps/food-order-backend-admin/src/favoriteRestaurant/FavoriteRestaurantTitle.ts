import { FavoriteRestaurant as TFavoriteRestaurant } from "../api/favoriteRestaurant/FavoriteRestaurant";

export const FAVORITERESTAURANT_TITLE_FIELD = "id";

export const FavoriteRestaurantTitle = (
  record: TFavoriteRestaurant
): string => {
  return record.id?.toString() || String(record.id);
};
