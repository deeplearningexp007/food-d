import { FavoriteMenuItemUpdateManyWithoutFavoritesInput } from "./FavoriteMenuItemUpdateManyWithoutFavoritesInput";
import { FavoriteRestaurantUpdateManyWithoutFavoritesInput } from "./FavoriteRestaurantUpdateManyWithoutFavoritesInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type FavoriteUpdateInput = {
  favoriteMenuItems?: FavoriteMenuItemUpdateManyWithoutFavoritesInput;
  favoriteRestaurants?: FavoriteRestaurantUpdateManyWithoutFavoritesInput;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
