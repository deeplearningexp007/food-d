import { TransactionStatusWhereInput } from "./TransactionStatusWhereInput";
import { TransactionStatusOrderByInput } from "./TransactionStatusOrderByInput";

export type TransactionStatusFindManyArgs = {
  where?: TransactionStatusWhereInput;
  orderBy?: Array<TransactionStatusOrderByInput>;
  skip?: number;
  take?: number;
};
