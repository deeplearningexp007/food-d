import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type ReportWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  reportData?: JsonFilter;
  reportType?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
