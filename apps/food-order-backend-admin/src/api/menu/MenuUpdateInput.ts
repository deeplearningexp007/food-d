import { MenuItemUpdateManyWithoutMenusInput } from "./MenuItemUpdateManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  createdAt?: Date | null;
  description?: string | null;
  isActive?: boolean | null;
  menuItems?: MenuItemUpdateManyWithoutMenusInput;
  name?: string | null;
  restaurants?: RestaurantWhereUniqueInput | null;
  updatedAt?: Date | null;
};
