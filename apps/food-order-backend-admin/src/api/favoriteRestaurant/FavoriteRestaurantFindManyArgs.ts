import { FavoriteRestaurantWhereInput } from "./FavoriteRestaurantWhereInput";
import { FavoriteRestaurantOrderByInput } from "./FavoriteRestaurantOrderByInput";

export type FavoriteRestaurantFindManyArgs = {
  where?: FavoriteRestaurantWhereInput;
  orderBy?: Array<FavoriteRestaurantOrderByInput>;
  skip?: number;
  take?: number;
};
