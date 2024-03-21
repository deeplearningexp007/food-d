import { Transaction } from "../transaction/Transaction";

export type TransactionStatus = {
  id: number;
  status: string | null;
  statusDate: Date | null;
  transactions?: Transaction | null;
};
