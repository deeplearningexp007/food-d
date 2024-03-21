import { TransactionStatus as TTransactionStatus } from "../api/transactionStatus/TransactionStatus";

export const TRANSACTIONSTATUS_TITLE_FIELD = "status";

export const TransactionStatusTitle = (record: TTransactionStatus): string => {
  return record.status?.toString() || String(record.id);
};
