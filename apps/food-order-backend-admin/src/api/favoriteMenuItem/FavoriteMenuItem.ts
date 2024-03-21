import { Favorite } from "../favorite/Favorite";
import { MenuItem } from "../menuItem/MenuItem";

export type FavoriteMenuItem = {
  createdAt: Date | null;
  favorites?: Favorite | null;
  id: number;
  menuItems?: MenuItem | null;
};
