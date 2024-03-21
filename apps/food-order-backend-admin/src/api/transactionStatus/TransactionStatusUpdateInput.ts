import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionStatusUpdateInput = {
  status?: string | null;
  transactions?: TransactionWhereUniqueInput | null;
};
