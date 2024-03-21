import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  order_id?: SortOrder;
  paymentAmount?: SortOrder;
  paymentDate?: SortOrder;
  payment_method_id?: SortOrder;
  paymentStatus?: SortOrder;
  transactionId?: SortOrder;
};
