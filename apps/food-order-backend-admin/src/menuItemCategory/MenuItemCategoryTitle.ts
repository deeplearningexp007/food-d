import { MenuItemCategory as TMenuItemCategory } from "../api/menuItemCategory/MenuItemCategory";

export const MENUITEMCATEGORY_TITLE_FIELD = "name";

export const MenuItemCategoryTitle = (record: TMenuItemCategory): string => {
  return record.name?.toString() || String(record.id);
};
