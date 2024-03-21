import { Decimal } from "decimal.js";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ReviewRatingCreateInput = {
  cleanliness?: Decimal | null;
  foodQuality?: Decimal | null;
  reviews?: ReviewWhereUniqueInput | null;
  service?: Decimal | null;
  valueForMoney?: Decimal | null;
};
