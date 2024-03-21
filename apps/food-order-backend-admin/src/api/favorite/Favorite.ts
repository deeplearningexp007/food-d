import { FavoriteMenuItem } from "../favoriteMenuItem/FavoriteMenuItem";
import { FavoriteRestaurant } from "../favoriteRestaurant/FavoriteRestaurant";
import { UserModel } from "../userModel/UserModel";

export type Favorite = {
  createdAt: Date | null;
  favoriteMenuItems?: Array<FavoriteMenuItem>;
  favoriteRestaurants?: Array<FavoriteRestaurant>;
  id: number;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
