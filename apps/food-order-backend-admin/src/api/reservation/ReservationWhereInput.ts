import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReservationWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  partySize?: IntNullableFilter;
  reservationDate?: DateTimeNullableFilter;
  reservationTime?: DateTimeNullableFilter;
  restaurants?: RestaurantWhereUniqueInput;
  status?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
