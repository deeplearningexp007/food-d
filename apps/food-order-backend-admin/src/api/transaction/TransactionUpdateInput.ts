import { Decimal } from "decimal.js";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { TransactionStatusUpdateManyWithoutTransactionsInput } from "./TransactionStatusUpdateManyWithoutTransactionsInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: Decimal | null;
  orders?: OrderWhereUniqueInput | null;
  status?: string | null;
  transactionStatuses?: TransactionStatusUpdateManyWithoutTransactionsInput;
  transactionType?: string | null;
  updatedAt?: Date | null;
  userModels?: UserModelWhereUniqueInput | null;
};
