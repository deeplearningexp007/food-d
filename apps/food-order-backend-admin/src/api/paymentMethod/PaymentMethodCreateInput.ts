import { OrderCreateNestedManyWithoutPaymentMethodsInput } from "./OrderCreateNestedManyWithoutPaymentMethodsInput";
import { PaymentCreateNestedManyWithoutPaymentMethodsInput } from "./PaymentCreateNestedManyWithoutPaymentMethodsInput";

export type PaymentMethodCreateInput = {
  methodDetails?: string | null;
  methodName?: string | null;
  orders?: OrderCreateNestedManyWithoutPaymentMethodsInput;
  payments?: PaymentCreateNestedManyWithoutPaymentMethodsInput;
};
