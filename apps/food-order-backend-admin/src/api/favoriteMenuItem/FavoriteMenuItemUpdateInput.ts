import { FavoriteWhereUniqueInput } from "../favorite/FavoriteWhereUniqueInput";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type FavoriteMenuItemUpdateInput = {
  favorites?: FavoriteWhereUniqueInput | null;
  menuItems?: MenuItemWhereUniqueInput | null;
};
