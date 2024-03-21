import { MenuItem as TMenuItem } from "../api/menuItem/MenuItem";

export const MENUITEM_TITLE_FIELD = "name";

export const MenuItemTitle = (record: TMenuItem): string => {
  return record.name?.toString() || String(record.id);
};
