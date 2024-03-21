import { Decimal } from "decimal.js";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { TransactionStatusCreateNestedManyWithoutTransactionsInput } from "./TransactionStatusCreateNestedManyWithoutTransactionsInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: Decimal | null;
  orders?: OrderWhereUniqueInput | null;
  status?: string | null;
  transactionStatuses?: TransactionStatusCreateNestedManyWithoutTransactionsInput;
  transactionType?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
