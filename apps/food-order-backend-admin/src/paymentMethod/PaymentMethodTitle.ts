import { PaymentMethod as TPaymentMethod } from "../api/paymentMethod/PaymentMethod";

export const PAYMENTMETHOD_TITLE_FIELD = "methodName";

export const PaymentMethodTitle = (record: TPaymentMethod): string => {
  return record.methodName?.toString() || String(record.id);
};
