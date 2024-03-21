import { MenuItemCategoryWhereInput } from "./MenuItemCategoryWhereInput";
import { MenuItemCategoryOrderByInput } from "./MenuItemCategoryOrderByInput";

export type MenuItemCategoryFindManyArgs = {
  where?: MenuItemCategoryWhereInput;
  orderBy?: Array<MenuItemCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
