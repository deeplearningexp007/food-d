import { FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput } from "./FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput";
import { MenuItemCategoryCreateNestedManyWithoutMenuItemsInput } from "./MenuItemCategoryCreateNestedManyWithoutMenuItemsInput";
import { MenuItemCategoryWhereUniqueInput } from "../menuItemCategory/MenuItemCategoryWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutMenuItemsInput } from "./OrderItemCreateNestedManyWithoutMenuItemsInput";
import { Decimal } from "decimal.js";

export type MenuItemCreateInput = {
  availableQuantity?: number | null;
  description?: string | null;
  favoriteMenuItems?: FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput;
  hashtags?: string | null;
  imageUrl?: string | null;
  ingredients?: string | null;
  isActive?: boolean | null;
  isVegetarian?: boolean | null;
  menuItemCategoriesMenuItemCategoriesMenuItemIdToMenuItems?: MenuItemCategoryCreateNestedManyWithoutMenuItemsInput;
  menuItemCategoriesMenuItemsCategoryIdToMenuItemCategories?: MenuItemCategoryWhereUniqueInput | null;
  menus?: MenuWhereUniqueInput | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutMenuItemsInput;
  preparationTime?: number | null;
  price?: Decimal | null;
  shareSlug?: string | null;
};
