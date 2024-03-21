import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type AccessLogWhereInput = {
  action?: StringNullableFilter;
  deviceInfo?: JsonFilter;
  errorMessage?: StringNullableFilter;
  id?: IntFilter;
  ipAddress?: StringNullableFilter;
  responseStatus?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
