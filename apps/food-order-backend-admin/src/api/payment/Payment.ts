import { Order } from "../order/Order";
import { Decimal } from "decimal.js";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";

export type Payment = {
  id: number;
  orders?: Order;
  paymentAmount: Decimal | null;
  paymentDate: Date | null;
  paymentMethods?: PaymentMethod;
  paymentStatus: string | null;
  transactionId: string | null;
};
