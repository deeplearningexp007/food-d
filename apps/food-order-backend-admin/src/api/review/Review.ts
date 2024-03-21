import { Decimal } from "decimal.js";
import { Restaurant } from "../restaurant/Restaurant";
import { ReviewRating } from "../reviewRating/ReviewRating";
import { UserModel } from "../userModel/UserModel";

export type Review = {
  body: string | null;
  createdAt: Date | null;
  id: number;
  rating: Decimal | null;
  restaurants?: Restaurant | null;
  reviewRatings?: Array<ReviewRating>;
  title: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
