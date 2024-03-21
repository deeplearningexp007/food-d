import { FavoriteMenuItem as TFavoriteMenuItem } from "../api/favoriteMenuItem/FavoriteMenuItem";

export const FAVORITEMENUITEM_TITLE_FIELD = "id";

export const FavoriteMenuItemTitle = (record: TFavoriteMenuItem): string => {
  return record.id?.toString() || String(record.id);
};
