import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { Decimal } from "decimal.js";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";

export type PaymentUpdateInput = {
  orders?: OrderWhereUniqueInput;
  paymentAmount?: Decimal | null;
  paymentDate?: Date | null;
  paymentMethods?: PaymentMethodWhereUniqueInput;
  paymentStatus?: string | null;
  transactionId?: string | null;
};
