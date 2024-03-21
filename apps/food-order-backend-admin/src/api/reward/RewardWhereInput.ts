import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type RewardWhereInput = {
  createdAt?: DateTimeNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: IntFilter;
  points?: IntNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
