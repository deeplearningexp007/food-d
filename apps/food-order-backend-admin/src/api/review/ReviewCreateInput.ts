import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { ReviewRatingCreateNestedManyWithoutReviewsInput } from "./ReviewRatingCreateNestedManyWithoutReviewsInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReviewCreateInput = {
  body?: string | null;
  createdAt?: Date | null;
  rating?: Decimal | null;
  restaurants?: RestaurantWhereUniqueInput | null;
  reviewRatings?: ReviewRatingCreateNestedManyWithoutReviewsInput;
  title?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
