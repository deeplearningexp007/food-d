import { FavoriteMenuItemUpdateManyWithoutMenuItemsInput } from "./FavoriteMenuItemUpdateManyWithoutMenuItemsInput";
import { MenuItemCategoryUpdateManyWithoutMenuItemsInput } from "./MenuItemCategoryUpdateManyWithoutMenuItemsInput";
import { MenuItemCategoryWhereUniqueInput } from "../menuItemCategory/MenuItemCategoryWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { OrderItemUpdateManyWithoutMenuItemsInput } from "./OrderItemUpdateManyWithoutMenuItemsInput";
import { Decimal } from "decimal.js";

export type MenuItemUpdateInput = {
  availableQuantity?: number | null;
  description?: string | null;
  favoriteMenuItems?: FavoriteMenuItemUpdateManyWithoutMenuItemsInput;
  hashtags?: string | null;
  imageUrl?: string | null;
  ingredients?: string | null;
  isActive?: boolean | null;
  isVegetarian?: boolean | null;
  menuItemCategoriesMenuItemCategoriesMenuItemIdToMenuItems?: MenuItemCategoryUpdateManyWithoutMenuItemsInput;
  menuItemCategoriesMenuItemsCategoryIdToMenuItemCategories?: MenuItemCategoryWhereUniqueInput | null;
  menus?: MenuWhereUniqueInput | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutMenuItemsInput;
  preparationTime?: number | null;
  price?: Decimal | null;
  shareSlug?: string | null;
};
