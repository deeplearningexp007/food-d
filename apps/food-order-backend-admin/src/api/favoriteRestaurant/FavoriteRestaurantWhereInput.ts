import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavoriteWhereUniqueInput } from "../favorite/FavoriteWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type FavoriteRestaurantWhereInput = {
  createdAt?: DateTimeNullableFilter;
  favorites?: FavoriteWhereUniqueInput;
  id?: IntFilter;
  restaurants?: RestaurantWhereUniqueInput;
};
