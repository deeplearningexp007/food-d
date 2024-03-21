import { Wishlist as TWishlist } from "../api/wishlist/Wishlist";

export const WISHLIST_TITLE_FIELD = "itemType";

export const WishlistTitle = (record: TWishlist): string => {
  return record.itemType?.toString() || String(record.id);
};
