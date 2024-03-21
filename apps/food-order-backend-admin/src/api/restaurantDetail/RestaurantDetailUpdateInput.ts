import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantDetailUpdateInput = {
  deliveryCharge?: Decimal | null;
  deliveryTime?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  minOrderValue?: Decimal | null;
  rating?: Decimal | null;
  restaurants?: RestaurantWhereUniqueInput | null;
  reviewCount?: number | null;
};
