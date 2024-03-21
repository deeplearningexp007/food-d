import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { MenuItemWhereUniqueInput } from "../menuItem/MenuItemWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  customizationOptions?: StringNullableFilter;
  id?: IntFilter;
  itemDescription?: StringNullableFilter;
  itemImage?: StringNullableFilter;
  itemName?: StringNullableFilter;
  menuItems?: MenuItemWhereUniqueInput;
  orders?: OrderWhereUniqueInput;
  price?: DecimalNullableFilter;
  quantity?: IntNullableFilter;
};
