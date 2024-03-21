import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionStatusCreateInput = {
  status?: string | null;
  transactions?: TransactionWhereUniqueInput | null;
};
