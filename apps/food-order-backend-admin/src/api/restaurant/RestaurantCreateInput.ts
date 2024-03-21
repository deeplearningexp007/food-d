import { Decimal } from "decimal.js";
import { FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput } from "./FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput";
import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";
import { OrderCreateNestedManyWithoutRestaurantsInput } from "./OrderCreateNestedManyWithoutRestaurantsInput";
import { ReservationCreateNestedManyWithoutRestaurantsInput } from "./ReservationCreateNestedManyWithoutRestaurantsInput";
import { RestaurantDetailCreateNestedManyWithoutRestaurantsInput } from "./RestaurantDetailCreateNestedManyWithoutRestaurantsInput";
import { ReviewCreateNestedManyWithoutRestaurantsInput } from "./ReviewCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  averageCost?: Decimal | null;
  closingHours?: string | null;
  createdAt?: Date | null;
  email?: string | null;
  favoriteRestaurants?: FavoriteRestaurantCreateNestedManyWithoutRestaurantsInput;
  filterTag?: string | null;
  hashtags?: string | null;
  isActive?: boolean | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
  name?: string | null;
  openingHours?: string | null;
  orders?: OrderCreateNestedManyWithoutRestaurantsInput;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutRestaurantsInput;
  restaurantDetails?: RestaurantDetailCreateNestedManyWithoutRestaurantsInput;
  reviews?: ReviewCreateNestedManyWithoutRestaurantsInput;
  shareSlug?: string | null;
  updatedAt?: Date | null;
};
