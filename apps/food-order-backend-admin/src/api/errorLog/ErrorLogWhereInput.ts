import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ErrorLogWhereInput = {
  errorCode?: IntNullableFilter;
  errorMessage?: StringNullableFilter;
  id?: IntFilter;
  requestInfo?: JsonFilter;
  stackTrace?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
