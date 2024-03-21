import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { ReviewRatingListRelationFilter } from "../reviewRating/ReviewRatingListRelationFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReviewWhereInput = {
  body?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  rating?: DecimalNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  reviewRatings?: ReviewRatingListRelationFilter;
  title?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
