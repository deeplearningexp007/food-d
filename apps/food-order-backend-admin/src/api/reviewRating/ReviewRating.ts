import { Decimal } from "decimal.js";
import { Review } from "../review/Review";

export type ReviewRating = {
  cleanliness: Decimal | null;
  foodQuality: Decimal | null;
  id: number;
  reviews?: Review | null;
  service: Decimal | null;
  valueForMoney: Decimal | null;
};
