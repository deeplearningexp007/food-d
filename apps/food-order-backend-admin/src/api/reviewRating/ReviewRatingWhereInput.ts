import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ReviewRatingWhereInput = {
  cleanliness?: DecimalNullableFilter;
  foodQuality?: DecimalNullableFilter;
  id?: IntFilter;
  reviews?: ReviewWhereUniqueInput;
  service?: DecimalNullableFilter;
  valueForMoney?: DecimalNullableFilter;
};
