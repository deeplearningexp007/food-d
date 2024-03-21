import { Decimal } from "decimal.js";
import { Restaurant } from "../restaurant/Restaurant";

export type RestaurantDetail = {
  deliveryCharge: Decimal | null;
  deliveryTime: string | null;
  description: string | null;
  id: number;
  imageUrl: string | null;
  minOrderValue: Decimal | null;
  rating: Decimal | null;
  restaurants?: Restaurant | null;
  reviewCount: number | null;
};
