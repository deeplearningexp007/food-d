import { Decimal } from "decimal.js";
import { Order } from "../order/Order";
import { TransactionStatus } from "../transactionStatus/TransactionStatus";
import { UserModel } from "../userModel/UserModel";

export type Transaction = {
  amount: Decimal | null;
  createdAt: Date | null;
  id: number;
  orders?: Order | null;
  status: string | null;
  transactionStatuses?: Array<TransactionStatus>;
  transactionType: string | null;
  updatedAt: Date | null;
  userModels?: UserModel | null;
};
