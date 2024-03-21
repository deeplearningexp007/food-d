import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionStatusListRelationFilter } from "../transactionStatus/TransactionStatusListRelationFilter";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: DecimalNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: IntFilter;
  orders?: OrderWhereUniqueInput;
  status?: StringNullableFilter;
  transactionStatuses?: TransactionStatusListRelationFilter;
  transactionType?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  userModels?: UserModelWhereUniqueInput;
};
