import { Decimal } from "decimal.js";
import { FavoriteRestaurantUpdateManyWithoutRestaurantsInput } from "./FavoriteRestaurantUpdateManyWithoutRestaurantsInput";
import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";
import { OrderUpdateManyWithoutRestaurantsInput } from "./OrderUpdateManyWithoutRestaurantsInput";
import { ReservationUpdateManyWithoutRestaurantsInput } from "./ReservationUpdateManyWithoutRestaurantsInput";
import { RestaurantDetailUpdateManyWithoutRestaurantsInput } from "./RestaurantDetailUpdateManyWithoutRestaurantsInput";
import { ReviewUpdateManyWithoutRestaurantsInput } from "./ReviewUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  averageCost?: Decimal | null;
  closingHours?: string | null;
  createdAt?: Date | null;
  email?: string | null;
  favoriteRestaurants?: FavoriteRestaurantUpdateManyWithoutRestaurantsInput;
  filterTag?: string | null;
  hashtags?: string | null;
  isActive?: boolean | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
  name?: string | null;
  openingHours?: string | null;
  orders?: OrderUpdateManyWithoutRestaurantsInput;
  phoneNumber?: string | null;
  reservations?: ReservationUpdateManyWithoutRestaurantsInput;
  restaurantDetails?: RestaurantDetailUpdateManyWithoutRestaurantsInput;
  reviews?: ReviewUpdateManyWithoutRestaurantsInput;
  shareSlug?: string | null;
  updatedAt?: Date | null;
};
