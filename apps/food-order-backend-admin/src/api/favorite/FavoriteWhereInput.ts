import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavoriteMenuItemListRelationFilter } from "../favoriteMenuItem/FavoriteMenuItemListRelationFilter";
import { FavoriteRestaurantListRelationFilter } from "../favoriteRestaurant/FavoriteRestaurantListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type FavoriteWhereInput = {
  createdAt?: DateTimeNullableFilter;
  favoriteMenuItems?: FavoriteMenuItemListRelationFilter;
  favoriteRestaurants?: FavoriteRestaurantListRelationFilter;
  id?: IntFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
