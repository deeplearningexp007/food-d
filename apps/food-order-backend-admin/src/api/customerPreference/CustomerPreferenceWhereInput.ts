import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type CustomerPreferenceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  preferenceType?: StringNullableFilter;
  preferenceValue?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
