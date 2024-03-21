import { FavoriteWhereUniqueInput } from "../favorite/FavoriteWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FavoriteRestaurantCreateInput = {
  favorites?: FavoriteWhereUniqueInput | null;
  restaurants?: RestaurantWhereUniqueInput | null;
};
