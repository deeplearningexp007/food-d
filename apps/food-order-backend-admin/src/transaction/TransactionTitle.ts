import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "status";

export const TransactionTitle = (record: TTransaction): string => {
  return record.status?.toString() || String(record.id);
};
