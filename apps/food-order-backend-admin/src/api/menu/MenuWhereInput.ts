import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanNullableFilter;
  menuItems?: MenuItemListRelationFilter;
  name?: StringNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
