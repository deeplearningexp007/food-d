import { MenuItemCreateNestedManyWithoutMenusInput } from "./MenuItemCreateNestedManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  createdAt?: Date | null;
  description?: string | null;
  isActive?: boolean | null;
  menuItems?: MenuItemCreateNestedManyWithoutMenusInput;
  name?: string | null;
  restaurants?: RestaurantWhereUniqueInput | null;
  updatedAt?: Date | null;
};
