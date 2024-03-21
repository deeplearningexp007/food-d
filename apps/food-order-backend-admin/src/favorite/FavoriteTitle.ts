import { Favorite as TFavorite } from "../api/favorite/Favorite";

export const FAVORITE_TITLE_FIELD = "id";

export const FavoriteTitle = (record: TFavorite): string => {
  return record.id?.toString() || String(record.id);
};
