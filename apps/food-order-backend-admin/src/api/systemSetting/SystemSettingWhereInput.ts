import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type SystemSettingWhereInput = {
  createdAt?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  settingKey?: StringNullableFilter;
  settingValue?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
