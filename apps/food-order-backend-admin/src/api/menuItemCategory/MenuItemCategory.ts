import { MenuItem } from "../menuItem/MenuItem";

export type MenuItemCategory = {
  id: number;
  menuItemsMenuItemCategoriesMenuItemIdToMenuItems?: MenuItem | null;
  menuItemsMenuItemsCategoryIdToMenuItemCategories?: Array<MenuItem>;
  name: string | null;
};
