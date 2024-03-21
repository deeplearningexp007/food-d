import { FavoriteWhereUniqueInput } from "../favorite/FavoriteWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FavoriteRestaurantUpdateInput = {
  favorites?: FavoriteWhereUniqueInput | null;
  restaurants?: RestaurantWhereUniqueInput | null;
};
