import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { ReviewRatingUpdateManyWithoutReviewsInput } from "./ReviewRatingUpdateManyWithoutReviewsInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReviewUpdateInput = {
  body?: string | null;
  createdAt?: Date | null;
  rating?: Decimal | null;
  restaurants?: RestaurantWhereUniqueInput | null;
  reviewRatings?: ReviewRatingUpdateManyWithoutReviewsInput;
  title?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
