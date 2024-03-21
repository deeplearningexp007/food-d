import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type HashtagWhereInput = {
  createdAt?: DateTimeNullableFilter;
  hashText?: StringNullableFilter;
  id?: IntFilter;
  tag?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
