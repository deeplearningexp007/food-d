import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { MenuItemUpdateManyWithoutMenuItemCategoriesInput } from "./MenuItemUpdateManyWithoutMenuItemCategoriesInput";

export type MenuItemCategoryUpdateInput = {
  menuItemsMenuItemCategoriesMenuItemIdToMenuItems?: MenuItemWhereUniqueInput | null;
  menuItemsMenuItemsCategoryIdToMenuItemCategories?: MenuItemUpdateManyWithoutMenuItemCategoriesInput;
  name?: string | null;
};
