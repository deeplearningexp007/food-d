import { IntFilter } from "../../util/IntFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MenuItemCategoryWhereInput = {
  id?: IntFilter;
  menuItemsMenuItemCategoriesMenuItemIdToMenuItems?: MenuItemWhereUniqueInput;
  menuItemsMenuItemsCategoryIdToMenuItemCategories?: MenuItemListRelationFilter;
  name?: StringNullableFilter;
};
