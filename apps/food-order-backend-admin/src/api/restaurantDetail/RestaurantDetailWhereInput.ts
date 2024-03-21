import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RestaurantDetailWhereInput = {
  deliveryCharge?: DecimalNullableFilter;
  deliveryTime?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  imageUrl?: StringNullableFilter;
  minOrderValue?: DecimalNullableFilter;
  rating?: DecimalNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  reviewCount?: IntNullableFilter;
};
