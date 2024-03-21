import { OrderUpdateManyWithoutPaymentMethodsInput } from "./OrderUpdateManyWithoutPaymentMethodsInput";
import { PaymentUpdateManyWithoutPaymentMethodsInput } from "./PaymentUpdateManyWithoutPaymentMethodsInput";

export type PaymentMethodUpdateInput = {
  methodDetails?: string | null;
  methodName?: string | null;
  orders?: OrderUpdateManyWithoutPaymentMethodsInput;
  payments?: PaymentUpdateManyWithoutPaymentMethodsInput;
};
