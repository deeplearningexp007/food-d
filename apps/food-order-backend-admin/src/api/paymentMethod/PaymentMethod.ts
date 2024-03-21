import { Order } from "../order/Order";
import { Payment } from "../payment/Payment";

export type PaymentMethod = {
  id: number;
  methodDetails: string | null;
  methodName: string | null;
  orders?: Array<Order>;
  payments?: Array<Payment>;
};
