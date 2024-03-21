import { FavoriteWhereUniqueInput } from "../favorite/FavoriteWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type FavoriteMenuItemCreateInput = {
  favorites?: FavoriteWhereUniqueInput | null;
  menuItems?: MenuItemWhereUniqueInput | null;
};
