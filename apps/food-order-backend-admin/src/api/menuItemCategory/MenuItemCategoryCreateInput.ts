import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { MenuItemCreateNestedManyWithoutMenuItemCategoriesInput } from "./MenuItemCreateNestedManyWithoutMenuItemCategoriesInput";

export type MenuItemCategoryCreateInput = {
  menuItemsMenuItemCategoriesMenuItemIdToMenuItems?: MenuItemWhereUniqueInput | null;
  menuItemsMenuItemsCategoryIdToMenuItemCategories?: MenuItemCreateNestedManyWithoutMenuItemCategoriesInput;
  name?: string | null;
};
