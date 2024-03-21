import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type NotificationWhereInput = {
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  isRead?: BooleanNullableFilter;
  message?: StringNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
