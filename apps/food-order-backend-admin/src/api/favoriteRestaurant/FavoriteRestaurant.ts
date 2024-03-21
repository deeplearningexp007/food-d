import { Favorite } from "../favorite/Favorite";
import { Restaurant } from "../restaurant/Restaurant";

export type FavoriteRestaurant = {
  createdAt: Date | null;
  favorites?: Favorite | null;
  id: number;
  restaurants?: Restaurant | null;
};
