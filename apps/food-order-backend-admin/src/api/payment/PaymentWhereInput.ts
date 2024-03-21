import { IntFilter } from "../../util/IntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  id?: IntFilter;
  orders?: OrderWhereUniqueInput;
  paymentAmount?: DecimalNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethods?: PaymentMethodWhereUniqueInput;
  paymentStatus?: StringNullableFilter;
  transactionId?: StringNullableFilter;
};
