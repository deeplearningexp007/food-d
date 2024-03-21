import { FavoriteMenuItemCreateNestedManyWithoutFavoritesInput } from "./FavoriteMenuItemCreateNestedManyWithoutFavoritesInput";
import { FavoriteRestaurantCreateNestedManyWithoutFavoritesInput } from "./FavoriteRestaurantCreateNestedManyWithoutFavoritesInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type FavoriteCreateInput = {
  favoriteMenuItems?: FavoriteMenuItemCreateNestedManyWithoutFavoritesInput;
  favoriteRestaurants?: FavoriteRestaurantCreateNestedManyWithoutFavoritesInput;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
