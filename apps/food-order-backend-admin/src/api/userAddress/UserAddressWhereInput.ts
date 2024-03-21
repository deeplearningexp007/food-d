import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type UserAddressWhereInput = {
  addressLine1?: StringNullableFilter;
  addressLine2?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  isPrimary?: BooleanNullableFilter;
  orders?: OrderListRelationFilter;
  pincode?: StringNullableFilter;
  state?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
