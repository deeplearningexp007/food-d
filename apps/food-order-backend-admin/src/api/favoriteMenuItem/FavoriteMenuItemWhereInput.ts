import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavoriteWhereUniqueInput } from "../favorite/FavoriteWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";

export type FavoriteMenuItemWhereInput = {
  createdAt?: DateTimeNullableFilter;
  favorites?: FavoriteWhereUniqueInput;
  id?: IntFilter;
  menuItems?: MenuItemWhereUniqueInput;
};
