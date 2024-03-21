import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type PaymentMethodWhereInput = {
  id?: IntFilter;
  methodDetails?: StringNullableFilter;
  methodName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  payments?: PaymentListRelationFilter;
};
