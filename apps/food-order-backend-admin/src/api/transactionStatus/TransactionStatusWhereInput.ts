import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionStatusWhereInput = {
  id?: IntFilter;
  status?: StringNullableFilter;
  statusDate?: DateTimeNullableFilter;
  transactions?: TransactionWhereUniqueInput;
};
