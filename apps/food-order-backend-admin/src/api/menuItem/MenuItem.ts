import { FavoriteMenuItem } from "../favoriteMenuItem/FavoriteMenuItem";
import { MenuItemCategory } from "../menuItemCategory/MenuItemCategory";
import { Menu } from "../menu/Menu";
import { OrderItem } from "../orderItem/OrderItem";
import { Decimal } from "decimal.js";

export type MenuItem = {
  availableQuantity: number | null;
  description: string | null;
  favoriteMenuItems?: Array<FavoriteMenuItem>;
  hashtags: string | null;
  id: number;
  imageUrl: string | null;
  ingredients: string | null;
  isActive: boolean | null;
  isVegetarian: boolean | null;
  menuItemCategoriesMenuItemCategoriesMenuItemIdToMenuItems?: Array<MenuItemCategory>;
  menuItemCategoriesMenuItemsCategoryIdToMenuItemCategories?: MenuItemCategory | null;
  menus?: Menu | null;
  name: string | null;
  orderItems?: Array<OrderItem>;
  preparationTime: number | null;
  price: Decimal | null;
  shareSlug: string | null;
};
